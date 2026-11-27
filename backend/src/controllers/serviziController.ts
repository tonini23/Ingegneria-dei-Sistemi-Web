import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

// Chiave API hardcoded (intenzionalmente insicura per scopi didattici)
const EXTERNAL_API_KEY = 'sk_live_studibo_secret_12345';

// g. Upload di file (intenzionalmente vulnerabile a Path Traversal e nessuna validazione MIME/estensione)
export const uploadFile = (req: Request, res: Response) => {
    const { filename, content } = req.body;
    if (!filename || !content) {
        res.status(400).json({ error: 'filename e content sono obbligatori' });
        return;
    }

    const uploadDir = path.join(process.cwd(), 'public', 'uploads');
    if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
    }

    const filePath = path.join(uploadDir, filename);
    const buffer = Buffer.from(content, 'base64');
    fs.writeFileSync(filePath, buffer);

    res.json({ message: 'File caricato con successo', path: `/uploads/${filename}` });
};

// h. Integrazione API esterna / webhook (intenzionalmente vulnerabile a SSRF e secret hardcoded)
export const chiamaServizioEsterno = async (req: Request, res: Response) => {
    const { url } = req.body;
    if (!url) {
        res.status(400).json({ error: 'URL obbligatorio' });
        return;
    }

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${EXTERNAL_API_KEY}`
            }
        });
        const data = await response.text();
        res.json({ status: response.status, data });
    } catch (err: any) {
        res.status(500).json({ error: 'Errore nella chiamata al servizio esterno', details: err.message });
    }
};
