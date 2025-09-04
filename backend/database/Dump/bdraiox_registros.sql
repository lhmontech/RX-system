-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: 192.168.150.82    Database: bdraiox
-- ------------------------------------------------------
-- Server version	9.1.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `registros`
--

DROP TABLE IF EXISTS `registros`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `registros` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nomepaciente` varchar(100) DEFAULT NULL,
  `sexo` varchar(10) DEFAULT NULL,
  `datanascimento` date DEFAULT NULL,
  `exame` varchar(100) DEFAULT NULL,
  `qtdincidencias` int DEFAULT NULL,
  `origem` varchar(50) DEFAULT NULL,
  `reexposicao` varchar(20) DEFAULT 'Não',
  `motivo` varchar(50) DEFAULT NULL,
  `datarealizada` date DEFAULT NULL,
  `horapedido` time DEFAULT NULL,
  `horarealizada` time DEFAULT NULL,
  `nometecnico` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registros`
--

LOCK TABLES `registros` WRITE;
/*!40000 ALTER TABLE `registros` DISABLE KEYS */;
INSERT INTO `registros` VALUES (1,'João Silva','M','1990-01-01','Tórax',2,'UCI','Não',NULL,'2025-04-17',NULL,'13:00:00','Carlos Souza'),(2,'Lucas Henrique','M','2001-04-04','Pé',5,'Ortop.','Não',NULL,'2025-04-18',NULL,'14:12:00','Anderson'),(3,'Anna Paula','F','1967-10-21','Ombro',2,'Clinico','Não',NULL,'2025-04-18',NULL,'13:00:00','Anderson'),(4,'Bruna Leiticia','F','2007-08-11','Punho',3,'Ortop.','Não',NULL,'2025-04-18',NULL,'11:00:00','Anderson'),(5,'Tatiana Aparecida','F','1982-11-19','Pé',1,'Ortop.','Não',NULL,'2025-04-18',NULL,'11:00:00','Anderson'),(6,'Glauber','M','1980-01-01','Crânio',2,'Clinico','2','Posicionamento errado','2025-04-17',NULL,'11:00:00','Leandro'),(8,'Romulo','M','1960-04-12','Pé',1,'UCI','Não',NULL,'2025-04-17',NULL,'12:25:00','Denisangela'),(9,'Denisangela','F','1970-06-03','Mão',2,'Ortop.','Não',NULL,'2025-04-17',NULL,'12:27:00','Leandro'),(10,'Beatriz','F','2009-03-12','Punho',4,'Clinico','Não',NULL,'2025-04-17',NULL,'12:29:00','Anna Paula'),(11,'Lucas','M','2001-04-04','Toráx',2,'Ortop','Não',NULL,'2025-04-17',NULL,'12:57:00','Anna Paula'),(13,'Pedro','M','2005-05-12','Cravicula',3,'Ortop','Não',NULL,'2025-04-19',NULL,'21:20:00','Denisangela'),(14,'Lucas','M','2001-04-04','Torax',2,'ortop','Não','','2025-04-20','10:31:00','12:31:00','Denisangela'),(15,'Tales Botaro','F','2005-02-11','Cranio',2,'ortop','Não','','2025-04-22','22:55:00','22:59:00','Leandro'),(16,'Regiane','F','2024-02-07','Mao',1,'uci','Não','','2025-04-22','00:03:00','00:04:00','Anna Paula'),(17,'Bela','F','2023-04-21','Tórax',5,'Clínico','Não','','2025-04-23','15:43:00','15:44:00','Gabriel'),(18,'João Pedro Almeida','M','1985-09-23','Crânio',2,'Ortop.','Não','','2025-04-23','23:23:00','23:24:00','Anna Paula'),(19,'Mariana Silva Costa','F','1992-12-03','Mão',3,'UCI','Não','','2025-04-24','22:57:00','23:00:00','Talita'),(20,'Anna Carolina','F','1985-05-05','Mão',1,'Ortop.','2','Paciente se moveu','2025-04-25','10:59:00','11:05:00','Lucas'),(26,'Victor rigolo','M','2001-05-07','Calcâneo',2,'Ortopedia','Não','','2025-04-30','16:35:00','16:40:00','Talita'),(31,'VIVIANE FLAUSINO FERNANDES','F','1975-06-23','Órbitas',1,'Clínico','Não','','2025-05-11','14:49:00','14:55:00','Lucas'),(23,'Eduardo Nogueira','M','1995-01-06','Mandibula',2,'Ambulatório','Não','','2025-04-28','19:11:00','19:14:00','Talita'),(25,'Arthur Casalta','M','2000-06-11','S. Face',2,'Box','Não','','2025-04-30','13:38:00','13:45:00','Leandro Bacelar');
/*!40000 ALTER TABLE `registros` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-05-13 20:46:50
