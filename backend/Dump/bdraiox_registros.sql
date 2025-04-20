-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: bdraiox
-- ------------------------------------------------------
-- Server version	8.3.0

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
  `datapedido` date DEFAULT NULL,
  `horapedido` time DEFAULT NULL,
  `horarealizada` time DEFAULT NULL,
  `nometecnico` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registros`
--

LOCK TABLES `registros` WRITE;
/*!40000 ALTER TABLE `registros` DISABLE KEYS */;
INSERT INTO `registros` VALUES (1,'João Silva','Masculino','1990-01-01','Tórax',2,'UCI','Não',NULL,'2025-04-17',NULL,'13:00:00','Carlos Souza'),(2,'Lucas Henrique','Masculino','2001-04-04','Pé',5,'Ortop.','Não',NULL,'2025-04-18',NULL,'14:12:00','Anderson'),(3,'Anna Paula','Feminino','1967-10-21','Ombro',2,'Clinico','Não',NULL,'2025-04-18',NULL,'13:00:00','Anderson'),(4,'Bruna Leiticia','Feminino','2007-08-11','Punho',3,'Ortop.','Não',NULL,'2025-04-18',NULL,'11:00:00','Anderson'),(5,'Tatiana Aparecida','Feminino','1982-11-19','Pé',1,'Ortop.','Não',NULL,'2025-04-18',NULL,'11:00:00','Anderson'),(6,'Glauber','Masculino','1980-01-01','Crânio',2,'Clinico','2','Posicionamento errado','2025-04-17',NULL,'11:00:00','Leandro'),(7,'Jamie Fox','Masculino','1992-03-02','Toráx',2,'UCI','Não',NULL,'2025-04-17',NULL,'14:12:00','Leandro'),(8,'Romulo','Masculino','1960-04-12','Pé',1,'UCI','Não',NULL,'2025-04-17',NULL,'12:25:00','Denisangela'),(9,'Denisangela','Feminino','1970-06-03','Mão',2,'Ortop.','Não',NULL,'2025-04-17',NULL,'12:27:00','Leandro'),(10,'Beatriz','Feminino','2009-03-12','Punho',4,'Clinico','Não',NULL,'2025-04-17',NULL,'12:29:00','Anna Paula'),(11,'Lucas','Masculino','2001-04-04','Toráx',2,'Ortop','Não',NULL,'2025-04-17',NULL,'12:57:00','Anna Paula'),(12,'Pedro','M','2005-05-12','Cravicula',3,'UCI','Não',NULL,'2025-04-18',NULL,'21:20:00','Denisangela'),(13,'Pedro','M','2005-05-12','Cravicula',3,'Ortop','Não',NULL,'2025-04-19',NULL,'21:20:00','Denisangela'),(14,'Lucas','M','2001-04-04','Torax',2,'ortop','Não','','2025-04-20','10:31:00','12:31:00','Denisangela');
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

-- Dump completed on 2025-04-20 18:01:11
