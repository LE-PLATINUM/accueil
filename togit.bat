@echo OFF
echo.
git init
git add .
REM git remote add origin https://github.com/aplus-services/lyrae-v14.git
REM Les deux lignes ci-dessous ne sont probablement pas toujours utiles
REM git rm -r --cached .next
REM git rm -r --cached node_modules
REM Les deux lignes ci-dessus ne sont probablement pas toujours utiles
git commit -m "update %date%-%time%"
REM git branch -M main
REM git remote add origin https://github.com/LE-PLATINUM/accueil.git
git push -u origin main