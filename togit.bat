@echo OFF
echo.
echo Envoi vers 'github'
echo.
REM pause
git init
git add .
git remote add origin https://github.com/aplus-services/lyrae-v14.git
git commit -m "update %date%-%time%"
git push -u origin main
