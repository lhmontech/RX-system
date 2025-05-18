[🇧🇷 Português](README.md)
# 🏥 X-ray examination attendance registration system

This project is an API built primarily with **Node.js and React.**
Its goal is to streamline the **patient attendance registration** process for X‑ray exams in a hospital.

## 📋 System overview

The system lets radiology technicians quickly and accurately log each attendance.
By entering the patient chart number, personal data (name, date of birth, and sex) are automatically fetched from the hospital’s database, making the form much faster to fill out.
Besides basic patient details, the system records:
- Which exam was performed

- Which unit requested it (Orthopedics, ICU, Internal Medicine, etc.)

- Technician’s name

- Date and time

- Additional relevant information

## 🧭 Key features

- 📄 **Registration form** with auto‑completion via chart number
- ✅ **Attendance logging** with exam and patient data
- 🕒 **Homepage list of the 20 most recent records**, with edit/delete actions
- 🔍 **Attendance history** searchable by date range
- 📊 **Advanced reports** for supervisors, with filters for
    - Date
    - Patient origin
    - Age range (sampling)
    - Exam type

## 🛠️ Tech stack

- **Frontend**: React, Axios, HTML, CSS
- **Backend**: Node.js, Express, Cors
- **Banco de Dados**: MySQL (In production, the chart lookup queries a SQL Server database)

## 🚀 How to run the project locally

The entire API ships in a Docker container for easy setup. Follow these steps:

  **1-Clone the rspository**
  git clone https://github.com/lhmontech/RX-system.git
  cd Rx-system

  **2-Configure environment variables**
  Adjust the .env with values as needed
  Make sure the same values are reflected in the environment section of docker-compose.yml.

  **3-Build and start the services**
  docker compose up --build
    
  **4-Open the app**
  http://localhost:3000

  **5-Useful Docker commands**
  | Action                                     | Command                         |
  | -------------------------------------------| ------------------------------- |
  | Stop and remove containers                 | `docker compose down`           |
  | Stop and remove volumes (clean database)   | `docker compose down -v`        |
  | View real-time container logs              | `docker compose logs -f`        |
  | Rebuild just the app                       | `docker compose up --build app` |

  **6-FAQ rápido**
  *Port 3306 already in use* --> Edit `docker-compose.yml` and change `3306:3306`to `3307:3306` (or another free port).
  *M1/M2 Apple Silicon* --> Add `platform: linux/amd64` in the service that presents an architure error.
  *I changed the code, but the container don't update* --> Enable **hot‑reload** in `Dockerfile` (ex.: `nodemon`) or rebuild: `docker compose up --build`.

⚠️ Make sure you have Docker installed on your machine.
  
License
MIT © 2025 lhmontech

