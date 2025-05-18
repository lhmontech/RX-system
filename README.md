[🇺🇸 English](README.en.md)
# 🏥 Sistema de Registro de Atendimentos de Raio-X

Este projeto é uma API desenvolvida resumidamente com **Nodejs e React**.
Ele tem como objetivo otimizar o processo de **registro de atendimentos de pacientes** que realizam exames de raio-x em um hospital.

## 📋 Descrição do sistema

O sistema permite que técnicos de imagem registrem de forma rápida e precisa os atendimentos realizados. Através do **prontuário do paciente**, os dados pessoais (nome, data de nascimento e sexo) são buscados automaticamente de um banco de dados do servidor do do hospital, facilitando o preenchimento do formulário.

Além de registrar alguns dados pessoais dos pacientes, também é registrado qual exame foi feito, qual unidade solicitou (Se foi ortopedia, UTI, Clinica médica etc), nome do técnico que realizou, data, horário e algumas outras coisas a mais.

## 🧭 Funcionalidades principais

- 📄 **Formulário de registro** com preenchimento automático via prontuário
- ✅ **Cadastro de atendimentos** com dados do exame e do paciente
- 🕒 **Listagem dos 20 registros mais recentes na tela inicial** com opção de editar ou excluir
- 🔍 **Histórico de atendimentos** com busca filtrada por data
- 📊 **Relatórios avançados** para supervisores, com filtros por:
  - Data
  - Origem do paciente
  - Faixa etária (amostragem)
  - Tipo de exame

## 🛠️ Tecnologias utilizadas

- **Frontend**: React, Axios, HTML, CSS
- **Backend**: Node.js, Express, Cors
- **Banco de Dados**: MySQL (no projeto em produção a busca do prontuário é em um SQL server)

## 🚀 Como executar o projeto

Para facilitar a execução do projeto eu usei Docker para criar um container de toda a API. egue o passo a passo:

  **1-Clone o repositório do github**
  git clone https://github.com/lhmontech/RX-system.git
  cd Rx-system

  **2-Configuração .env**
  Altere o .env.example para .env e defina as valores que quiser. Mas não se esqueça de alterar também no campo environment em docker-compose.yml

  **3-Construa e incie os serviços**
  docker compose up --build

  **4-Abra a API no browser**
  http://localhost:3000

  **5-Comandos úteis do Docker**
  | Ação                                        | Comando                         |
  | ------------------------------------------- | ------------------------------- |
  | Derrubar todos os serviços                  | `docker compose down`           |
  | Derrubar **e** remover volumes (zera banco) | `docker compose down -v`        |
  | Ver logs em tempo real                      | `docker compose logs -f`        |
  | Rebuild apenas do app                       | `docker compose up --build app` |

  **6-FAQ rápido**
  *Porta 3306 já em uso* --> Edite `docker-compose.yml` e troque `3306:3306` para `3307:3306` (ou outra livre).
  *M1/M2 Apple Silicon* --> Acrescente `platform: linux/amd64` no serviço que apresenta erro de arquitetura.
  *Alterei código, mas o contêiner não atualiza* --> Habilite **hot‑reload** no `Dockerfile` (ex.: `nodemon`) ou reconstrua: `docker compose up --build`.

⚠️ Certifique-se de ter o Docker instalado na sua máquina.
  
Licença
MIT © 2025 lhmontech

