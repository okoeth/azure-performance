@echo off

git add -A

git commit -m "Autodeploy"

git push heroku master
