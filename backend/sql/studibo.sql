-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Gen 16, 2026 alle 11:52
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
(1, 'Ingegneria dei sistemi web', 'Tecnologie dei sistemi informatici');

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
(1, '2024-12-23', '13:00:00', 'Remoto', 1, 1, 2),
(2, '2025-12-25', '00:00:00', 'Rimini', 1, 2, 1),
(3, '2026-01-02', '17:00:00', 'Ravenna', 1, NULL, NULL);

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
(1, 'Andrea', 'Tonini', 123, 'andrea.tonini4@studio.unibo.it', 'prova'),
(2, 'Lisandro', 'Antonioli', 1234, 'lisandro.antonioli@studio.unibo.it', 'prova');

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
  ADD KEY `tutor` (`id_tutor`),
  ADD KEY `materia` (`id_materia`);

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
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT per la tabella `prenotazioni`
--
ALTER TABLE `prenotazioni`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT per la tabella `utenti`
--
ALTER TABLE `utenti`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `prenotazioni`
--
ALTER TABLE `prenotazioni`
  ADD CONSTRAINT `materia` FOREIGN KEY (`Id_materia`) REFERENCES `utenti` (`Id`),
  ADD CONSTRAINT `studente` FOREIGN KEY (`id_studente`) REFERENCES `utenti` (`Id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
