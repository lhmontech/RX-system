CREATE DATABASE IF NOT EXISTS bdraiox;
USE bdraiox;
DROP TABLE IF EXISTS `registros`;

CREATE TABLE `registros` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nomepaciente` varchar(100) NOT NULL,
  `sexo` enum('F', 'M') DEFAULT NULL,
  `datanascimento` date DEFAULT NULL,
  `exame` varchar(100) DEFAULT NULL,
  `qtdincidencias` int DEFAULT NULL,
  `origem` varchar(50) DEFAULT NULL,
  `reexposicao` varchar(20) DEFAULT NULL,
  `motivo` varchar(50) DEFAULT NULL,
  `datarealizada` date NOT NULL,
  `horapedido` time DEFAULT NULL,
  `horarealizada` time DEFAULT NULL,
  `nometecnico` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `registros` WRITE;
INSERT INTO `registros` VALUES (1,'João Silva','M','1990-01-01','Tórax',2,'UCI','Não',NULL,'2025-04-17',NULL,'13:00:00','Carlos Souza');
UNLOCK TABLES;

CREATE DATABASE IF NOT EXISTS corpore;
USE corpore;
DROP TABLE IF EXISTS `szpaciente`;

CREATE TABLE `szpaciente` (
  `prontuario` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `datanascimento` date DEFAULT NULL,
  `sexo` enum('F', 'M') DEFAULT NULL,
  `estadocivil` varchar(20) DEFAULT NULL,
  `naturalidade` varchar(50) DEFAULT NULL,
  `telefone` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`prontuario`)
) ENGINE=InnoDB AUTO_INCREMENT=2704 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

LOCK TABLES `szpaciente` WRITE;
INSERT INTO `szpaciente` VALUES (53,'Ana Carolina Souza','1990-04-15','F','Solteiro(a)','São Paulo','(11) 98765-4321'),(106,'João Pedro Almeida','1985-09-23','M','Casado(a)','Campinas','(19) 99876-5432'),(159,'Mariana Silva Costa','1992-12-03','F','Solteiro(a)','Belo Horizonte','(31) 98888-1111'),(212,'Carlos Henrique Melo','1978-03-11','M','Casado(a)','Rio de Janeiro','(21) 97777-2222'),(265,'Patrícia Oliveira Lima','1983-07-29','F','Divorciado(a)','Fortaleza','(85) 99999-3333'),(318,'Eduardo Nogueira','1995-01-06','M','Solteiro(a)','Curitiba','(41) 96666-4444'),(371,'Fernanda Martins','1988-05-17','F','Casado(a)','Recife','(81) 95555-6666'),(424,'Ricardo Souza Pinto','1975-10-20','M','Viúvo(a)','Porto Alegre','(51) 94444-7777'),(477,'Luciana Rocha Dias','1991-06-09','F','Solteiro(a)','Natal','(84) 93333-8888'),(530,'Thiago Santos','1993-11-22','M','Solteiro(a)','São Luís','(98) 92222-9999'),(583,'Camila Barbosa','1980-02-14','F','Casado(a)','Manaus','(92) 91111-0000'),(636,'Felipe Araújo','1987-08-19','M','Divorciado(a)','João Pessoa','(83) 90000-1111'),(689,'Juliana Neves','1996-03-03','F','Solteiro(a)','Florianópolis','(48) 98888-1234'),(742,'Vinícius Teixeira','1989-04-28','M','Casado(a)','Vitória','(27) 97777-2345'),(795,'Isabela Monteiro','1994-12-01','F','Solteiro(a)','Teresina','(86) 96666-3456'),(848,'Gustavo Lima','1982-07-07','M','Casado(a)','Aracaju','(79) 95555-4567'),(901,'Letícia Ferreira','1990-10-10','F','Solteiro(a)','Belém','(91) 94444-5678'),(954,'André Luiz Ribeiro','1977-06-21','M','Viúvo(a)','Maceió','(82) 93333-6789'),(1007,'Renata Carvalho','1984-01-25','F','Divorciado(a)','Cuiabá','(65) 92222-7890'),(1060,'Bruno Cardoso','1991-09-14','M','Solteiro(a)','Campo Grande','(67) 91111-8901'),(1113,'Natália Duarte','1986-05-05','F','Casado(a)','Goiânia','(62) 90000-9012'),(1166,'Rafael Gomes','1988-11-30','M','Solteiro(a)','Palmas','(63) 98888-0123'),(1219,'Larissa Ramos','1995-02-08','F','Solteiro(a)','Macapá','(96) 97777-1234'),(1272,'Diego Torres','1979-03-13','M','Casado(a)','Rio Branco','(68) 96666-2345'),(1325,'Elaine Brito','1983-06-18','F','Divorciado(a)','Boa Vista','(95) 95555-3456'),(1378,'Lucas Mendonça','1997-01-12','M','Solteiro(a)','Porto Velho','(69) 94444-4567'),(1431,'Aline Faria','1981-12-25','F','Casado(a)','São Paulo','(11) 93333-5678'),(1484,'Pedro Antunes','1986-08-03','M','Solteiro(a)','Sorocaba','(15) 92222-6789'),(1537,'Vanessa Prado','1993-04-09','F','Solteiro(a)','Santos','(13) 91111-7890'),(1590,'Henrique Lopes','1980-10-15','M','Casado(a)','Ribeirão Preto','(16) 90000-8901'),(1643,'Tatiane Vieira','1992-07-27','F','Solteiro(a)','Bauru','(14) 98888-9012'),(1696,'Murilo Rezende','1985-05-31','M','Divorciado(a)','Londrina','(43) 97777-0123'),(1749,'Bruna Queiroz','1994-09-10','F','Solteiro(a)','Foz do Iguaçu','(45) 96666-1234'),(1802,'Samuel Borges','1983-03-04','M','Casado(a)','Cascavel','(44) 95555-2345'),(1855,'Sabrina Matos','1996-06-30','F','Solteiro(a)','Maringá','(44) 94444-3456'),(1908,'Leandro Castro','1987-11-11','M','Solteiro(a)','Blumenau','(47) 93333-4567'),(1961,'Beatriz Andrade','1990-02-16','F','Casado(a)','Joinville','(47) 92222-5678'),(2014,'Danilo Pires','1981-01-29','M','Divorciado(a)','Chapecó','(49) 91111-6789'),(2067,'Yasmin Sales','1995-12-06','F','Solteiro(a)','Pelotas','(53) 90000-7890'),(2120,'Mateus Franco','1982-09-19','M','Solteiro(a)','Santa Maria','(55) 98888-8901'),(2173,'Alana Nunes','1993-05-22','F','Solteiro(a)','Caxias do Sul','(54) 97777-9012'),(2226,'Jorge Peixoto','1978-04-14','M','Casado(a)','Novo Hamburgo','(51) 96666-0123'),(2279,'Débora Lima','1991-08-25','F','Solteiro(a)','Uberlândia','(34) 95555-1234'),(2332,'Renan Cunha','1984-06-02','M','Divorciado(a)','Anápolis','(62) 94444-2345'),(2385,'Talita Mendes','1996-10-30','F','Solteiro(a)','Pará de Minas','(37) 93333-3456'),(2438,'Cauã Barros','1985-11-07','M','Solteiro(a)','Divinópolis','(37) 92222-4567'),(2491,'Helena Torres','1990-04-12','F','Casado(a)','Ipatinga','(31) 91111-5678'),(2544,'Otávio Assis','1983-03-18','M','Casado(a)','Patos de Minas','(34) 90000-6789'),(2597,'Gabriela Tavares','1992-12-24','F','Solteiro(a)','Itabira','(31) 98888-7890'),(2650,'Fernando Dias','1986-07-01','M','Divorciado(a)','Teófilo Otoni','(33) 97777-8901'),(2703,'Monique Freitas','1993-01-08','F','Solteiro(a)','Barbacena','(32) 96666-9012');
UNLOCK TABLES;