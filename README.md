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

> ⚠️ Certifique-se de ter o Node.js, MySQL e o React instalados na sua máquina.

## Configurações para rodar o projeto


### Backend (API)

```bash
cd backend
npm install
npm start
