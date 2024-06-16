@echo OFF
echo.
echo Envoi des modifications
echo.
git init
git add .
git commit -m "update %date%-%time%"
git branch -M main
git remote add origin https://github.com/LE-PLATINUM/accueil.git
git push -u origin main