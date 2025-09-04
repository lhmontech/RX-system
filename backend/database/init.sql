-- Criar banco bdraiox
DROP DATABASE IF EXISTS `bdraiox`;
CREATE DATABASE `bdraiox` CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `bdraiox`;

-- Criar tabela registros
DROP TABLE IF EXISTS `registros`;
CREATE TABLE `registros` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nomepaciente` VARCHAR(100) DEFAULT NULL,
  `sexo` VARCHAR(10) DEFAULT NULL,
  `datanascimento` DATE DEFAULT NULL,
  `exame` VARCHAR(100) DEFAULT NULL,
  `qtdincidencias` INT DEFAULT NULL,
  `origem` VARCHAR(50) DEFAULT NULL,
  `reexposicao` VARCHAR(20) DEFAULT 'Não',
  `motivo` VARCHAR(50) DEFAULT NULL,
  `datarealizada` DATE DEFAULT NULL,
  `horapedido` TIME DEFAULT NULL,
  `horarealizada` TIME DEFAULT NULL,
  `nometecnico` VARCHAR(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dados iniciais bdraiox
INSERT INTO `registros` VALUES 
(1,'JESSICA MARIANE APARECIDA RIBEIRO KIKO','F','1992-11-01','Órbitas',2,'Ortopedia','Não','','2025-05-19','10:57:00','15:13:00','TALITA'),
(2,'GILSON DEMETRIO LIMA','M','1980-06-04','Crânio',2,'Ortopedia','Não','','2025-05-19','17:00:00','17:30:00','LUCAS HENRIQUE'),
(3,'NARCISO FRANKIN SANT ANA','M','1945-03-02','Tórax',1,'Clínico','','','2025-05-16','18:46:00','19:35:00','LEANDRO F');

-- Criar banco corpore
DROP DATABASE IF EXISTS `corpore`;
CREATE DATABASE `corpore` CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `corpore`;

-- Criar tabela szpaciente
DROP TABLE IF EXISTS `szpaciente`;
CREATE TABLE `szpaciente` (
  `prontuario` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NOT NULL,
  `datanascimento` DATE DEFAULT NULL,
  `sexo` VARCHAR(20) DEFAULT NULL,
  `estadocivil` VARCHAR(20) DEFAULT NULL,
  `naturalidade` VARCHAR(50) DEFAULT NULL,
  `telefone` VARCHAR(20) DEFAULT NULL,
  PRIMARY KEY (`prontuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dados iniciais corpore
INSERT INTO `szpaciente` VALUES 
(1,'Ana Carolina Souza','1990-04-15','F','Solteiro(a)','São Paulo','(11) 98765-4321'),
(2,'João Pedro Almeida','1985-09-23','M','Casado(a)','Campinas','(19) 99876-5432');
