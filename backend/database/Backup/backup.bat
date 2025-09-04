@echo off
set data=%date:~6,4%-%date:~3,2%-%date:~0,2%
set hora=%time:~0,2%-%time:~3,2%
set backup_dir=C:\RX-system\backend\database\Backup
set filename=backup_%data%_%hora%.sql

"C:\Program Files\MySQL\MySQL Server 8.0\bin\mysqldump.exe" -u mestre -p123456 bdraiox > "%backup_dir%\%filename%"
