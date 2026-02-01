-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Feb 01, 2026 alle 23:16
-- Versione del server: 10.4.32-MariaDB
-- Versione PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `studibo`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `materie`
--

CREATE TABLE `materie` (
  `Id` int(11) NOT NULL,
  `Nome` varchar(128) NOT NULL,
  `Corso` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `materie`
--

INSERT INTO `materie` (`Id`, `Nome`, `Corso`) VALUES
(1, 'Ingegneria dei sistemi web', 'Tecnologie dei sistemi informatici'),
(2, 'Base di dati', 'Tecnologie dei sistemi informatici'),
(3, 'Elementi di Architetture degli Elaboratori e Sistemi Operativi', 'Tecnologie dei sistemi informatici'),
(4, 'Elementi di Matematica per l\'Informatica', 'Tecnologie dei sistemi informatici'),
(5, 'Programmazione', 'Tecnologie dei sistemi informatici'),
(6, 'Reti di Calcolatori e Programmazione di Rete', 'Tecnologie dei sistemi informatici'),
(7, 'Fondamenti di Sistemi Web', 'Tecnologie dei sistemi informatici'),
(8, 'Sviluppo di Applicazioni Software Complesse', 'Tecnologie dei sistemi informatici'),
(9, 'Programmazione di Sistemi Embedded e IoT', 'Tecnologie dei sistemi informatici'),
(10, 'Sicurezza dei Sistemi Informatici', 'Tecnologie dei sistemi informatici'),
(11, 'Interazione Uomo-Macchina', 'Tecnologie dei sistemi informatici'),
(12, 'Sistemi Distribuiti e Cloud', 'Tecnologie dei sistemi informatici'),
(13, 'Machine Learning e Intelligenza artificiale', 'Tecnologie dei sistemi informatici'),
(14, 'Sviluppo Mobile', 'Tecnologie dei sistemi informatici');

-- --------------------------------------------------------

--
-- Struttura della tabella `prenotazioni`
--

CREATE TABLE `prenotazioni` (
  `Id` int(11) NOT NULL,
  `Data` date NOT NULL,
  `Ora` time NOT NULL,
  `Localita` varchar(120) NOT NULL,
  `id_materia` int(11) NOT NULL,
  `id_tutor` int(11) DEFAULT NULL,
  `id_studente` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `prenotazioni`
--

INSERT INTO `prenotazioni` (`Id`, `Data`, `Ora`, `Localita`, `id_materia`, `id_tutor`, `id_studente`) VALUES
(1, '2026-02-04', '16:00:00', 'Riccione', 1, 15, NULL),
(2, '2026-02-08', '12:00:00', 'Lugo', 1, 14, NULL),
(3, '2026-02-11', '16:00:00', 'Cesenatico', 1, 18, NULL),
(4, '2026-03-03', '18:00:00', 'Rimini', 3, 17, NULL),
(6, '2026-02-10', '14:00:00', 'Riccione', 2, 16, NULL),
(8, '2026-02-08', '11:00:00', 'Forlì', 5, 17, 1),
(9, '2026-02-25', '18:00:00', 'Lugo', 4, 17, NULL),
(10, '2026-02-18', '10:00:00', 'Imola', 4, 17, NULL),
(11, '2026-02-18', '12:00:00', 'Imola', 2, 17, 19),
(12, '2026-03-10', '18:00:00', 'Riccione', 5, 14, NULL),
(14, '2026-02-07', '10:00:00', 'Cesenatico', 5, 14, NULL),
(15, '2026-02-10', '12:00:00', 'Faenza', 4, 14, NULL),
(17, '2026-02-17', '15:00:00', 'Cesena', 5, 14, NULL),
(18, '2026-02-19', '16:00:00', 'Cesena', 5, 1, NULL),
(19, '2026-02-15', '18:00:00', 'Rimini', 2, 15, NULL),
(51, '2026-02-11', '09:00:00', 'Online', 2, 2, 6),
(52, '2026-02-02', '16:00:00', 'Online', 5, 4, NULL),
(53, '2026-02-23', '17:00:00', 'Ningbo', 1, 17, 16),
(66, '2026-02-01', '21:20:00', 'aa', 1, 19, NULL),
(67, '2026-02-19', '17:50:00', 'Cattolica', 2, 19, NULL),
(68, '2026-02-01', '02:54:00', 'proveeeeeee', 14, 19, NULL),
(69, '2026-02-05', '18:00:00', 'Online', 1, 20, 1);

-- --------------------------------------------------------

--
-- Struttura della tabella `utenti`
--

CREATE TABLE `utenti` (
  `Id` int(11) NOT NULL,
  `Nome` varchar(64) NOT NULL,
  `Cognome` varchar(64) NOT NULL,
  `Matricola` bigint(20) NOT NULL,
  `Email` varchar(64) NOT NULL,
  `Password` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `utenti`
--

INSERT INTO `utenti` (`Id`, `Nome`, `Cognome`, `Matricola`, `Email`, `Password`) VALUES
(1, 'andrea', 'tonini', 1146765, 'andrea.tonini4@studio.unibo.it', '$2b$10$ZWscbAUaMkLfLKh61PjgAu/OTAEm4UQqNs0sP0Tv8mHlPHrmBfgbG'),
(14, 'Prova', 'Tonini', 1231232132, 'aaaaa@aaaa.com', '$2b$10$dH/Mdt4CEwJr.SlgT2hBAOHdgP9DA4LqPa.NJOPz27jM3KqcQ7Xbe'),
(16, 'Prova', 'Prova', 123123123, 'a@a', '$2b$10$bHGaVXRUu9jgoJnI6WMiI.T7loY0fqQrAAQjqgtWeqVnPuX8Flaj6'),
(17, 'Lu', 'Zhang', 8888888, 'lu@zhang', '$2b$10$x8VaCh8rZg8KfcFgZsRqu.vHgFQYIvAv9XpHMhBnrPyFn3IHDM42C'),
(18, 'Lisandro', 'Antonioli', 1231231, 'lisandroantonioli@studio.unibo.it', '$2b$10$ntdS0/Frqpepf8IefqM/OeQi4Dc2jC8t/uJ4E5DyzWmt583dv2ErK'),
(19, 'Patrik', 'Kossi', 19191919, 'swanton@viper.it', '$2b$10$g8ncH5Nv1VcWdxjQ0OxbHOOFRNIzc8fGUFZtUpQYhH2zvt9jHyweO'),
(20, 'Alessandro', 'Bruno', 11111111, 'alessandro@gmail.com', '$2b$10$lUzGBDQdgu3NNMfh7TxyZeFqmpDJCgaUfn4M5I4BKLkHjwR3IDAP6');

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `materie`
--
ALTER TABLE `materie`
  ADD PRIMARY KEY (`Id`);

--
-- Indici per le tabelle `prenotazioni`
--
ALTER TABLE `prenotazioni`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `studente` (`id_studente`),
  ADD KEY `tutor` (`id_tutor`);

--
-- Indici per le tabelle `utenti`
--
ALTER TABLE `utenti`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `materie`
--
ALTER TABLE `materie`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT per la tabella `prenotazioni`
--
ALTER TABLE `prenotazioni`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;

--
-- AUTO_INCREMENT per la tabella `utenti`
--
ALTER TABLE `utenti`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `prenotazioni`
--
ALTER TABLE `prenotazioni`
  ADD CONSTRAINT `studente` FOREIGN KEY (`id_studente`) REFERENCES `utenti` (`Id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
