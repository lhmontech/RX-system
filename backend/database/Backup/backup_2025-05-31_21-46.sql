-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: localhost    Database: bdraiox
-- ------------------------------------------------------
-- Server version	8.0.42

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
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
) ENGINE=MyISAM AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registros`
--

LOCK TABLES `registros` WRITE;
/*!40000 ALTER TABLE `registros` DISABLE KEYS */;
INSERT INTO `registros` VALUES (51,'LUCAS HENRIQUE MONTEIRO','M','2001-04-04','Crânio',2,'Clínico','Não','','2025-05-20','14:05:00','14:30:00','ANNA PAULA'),(17,'Bela','F','2023-04-21','Tórax',5,'Clínico','Não','','2025-04-23','15:43:00','15:44:00','Gabriel'),(20,'Anna Carolina','F','1985-05-05','Mão',1,'Ortop.','2','Paciente se moveu','2025-04-25','10:59:00','11:05:00','Lucas'),(39,'CECILIA NASCIMENTO STABILE','F','2022-09-08','Mandibula',2,'Observação','','','2025-05-16','10:00:00','11:00:00','tawany'),(25,'Arthur Casalta','M','2000-06-11','S. Face',2,'Box','Não','','2025-04-30','13:38:00','13:45:00','Leandro Bacelar'),(40,'GERSON DOS SANTOS','M','1955-09-25','Mão',2,'Ortopedia','','','2025-05-16','10:17:00','10:30:00','tawany'),(38,'GERSON DOS SANTOS','M','1955-09-25','Tórax',1,'Ortopedia','','','2025-05-16','10:14:00','10:20:00','Anna Paula '),(41,'LUIZ HENRIQUE DE PAULA OLIVEIRA','M','1991-01-30','Abdômen',3,'Clínico','','','2025-05-16','16:01:00','18:00:00','TALITA'),(42,'ISABELLE ISRAEL GASANA','F','2008-10-30','Tórax',1,'Clínico','','','2025-05-16','17:59:00','18:04:00','TALITA'),(43,'NARCISO FRANKIN SANT ANA','M','1945-03-02','Tórax',1,'Clínico','','','2025-05-16','18:46:00','19:35:00','LEANDRO F'),(44,'LUCAS','M','2025-05-01','Crânio',1,'Clínico','Não','','2025-05-18','23:29:00','23:32:00','TALITA'),(45,'JESSICA MARIANE APARECIDA RIBEIRO CHAVES','F','1992-11-01','Crânio',2,'Clínico','Não','','2025-05-19','10:57:00','11:12:00','TALITA'),(46,'JESSICA MARIANE APARECIDA RIBEIRO CHAVES','F','1992-11-01','Crânio',2,'Ortopedia','Não','','2025-05-19','10:57:00','15:07:00','TALITA'),(47,'JESSICA MARIANE APARECIDA RIBEIRO CHAVES','F','1992-11-01','Órbitas',2,'Ortopedia','Não','','2025-05-19','10:57:00','15:13:00','TALITA'),(49,'GILSON DEMETRIO LIMA','M','1980-06-04','Crânio',2,'Ortopedia','Não','','2025-05-19','17:00:00','17:30:00','LUCAS HENRIQUE');
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

-- Dump completed on 2025-05-31 21:46:38
