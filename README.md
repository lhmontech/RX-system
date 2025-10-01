<p align="center">
      <img src="frontend\public\images\x-ray.png" alt="logo raio-x" width="200">
      <h2 align="center">Registros Raio-x</h2>
</p>

# 🏥 Sistema de Registro de Atendimentos de Raio-X

Este projeto é uma API desenvolvida com **Node.js**, **Express**, **React**, **MySQL**, **HTML** e **CSS**. Ele tem como objetivo otimizar o processo de **registro de atendimentos de pacientes** que realizam exames de raio-x em um hospital.

## 📋 Descrição do sistema

O sistema permite que técnicos de imagem registrem de forma rápida e precisa os atendimentos realizados. Através do **prontuário do paciente**, os dados pessoais (nome, data de nascimento e sexo) são buscados automaticamente de um servidor interno do hospital, facilitando o preenchimento do formulário.

Alé de registrar alguns dados pessoais dos pacientes, também é registrado qual exame foi feito, qual unidade solicitou (Se foi ortopedia, UTI, Clinica médica etc), nome do técnico que realizou, data, horário e algumas outras coisas a mais.

## 🧭 Funcionalidades principais

- 📄 **Formulário de registro** com preenchimento automático via prontuário
- ✅ **Cadastro de atendimentos** com dados do exame e do paciente
- 🕒 **Listagem dos 20 registros mais recentes** com opção de editar ou excluir
- 🔍 **Histórico de atendimentos** com busca filtrada por data
- 📊 **Relatórios avançados** para supervisores, com filtros por:
  - Data
  - Origem do paciente
  - Faixa etária (amostragem)
  - Tipo de exame
  - Entre outros

## 🛠️ Tecnologias utilizadas

- **Frontend**: React, HTML, CSS
- **Backend**: Node.js, Express
- **Banco de Dados**: MySQL

## 🚀 Como executar o projeto

### 1. ⚙️ Pré-requisitos para preparar o ambiente
Antes de rodar o projeto, você precisa ter instalado:
- [Node.js (versão 18+)](https://nodejs.org/)
- [MySQL Server (versão 8+)](https://dev.mysql.com/downloads/mysql/)

### 2. Clonar o repositório
``bash
git clone https://github.com/lhmontech/RX-system.git
cd Rx-system

### 3. Instalar dependências
**No backend:**
cd Rx-system/backend
npm install

**No Frontend**
cd Rx-system/frontend
npm install

### 4. Configurar váriaveis do ambiente
Crie um arquivo .env dentro da pasta backend/ com os dados do seu banco MySQL:
DB_HOST=localhost
DB_PORT=3306
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_DATABASE=bdraiox

### 5. Criar banco de dados
No backend, rode o script para inicializar o banco:
npm run db:init
> Esse comando cria o banco, tabelas e insere alguns dados de exemplo.

### 6. Rodar o backend
cd Rx-system/backend
node server.js

### 7. Rodar o frontend
cd Rx-system/frontend
npm start

## Telas
![Tela principal](/frontend/public/images/Tela-principal.jpg)
![Tela histórico](/frontend/public/images/Tela-historico.jpg)
![Tela relatório](/frontend/public/images/Tela-relatorio.jpg)

## 🛠️ Desenvolvido por

**👤 Lucas Monteiro**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)]([https://linkedin.com/in/SEU_USUARIO](https://www.linkedin.com/in/lucas-henrique-monteiro-55101a365/?trk=opento_sprofile_topcard))
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:lhmonteiro.ti@gmail.com)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/lhmontech)
