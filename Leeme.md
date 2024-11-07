PS C:\Users\LUIS SALINAS\Desktop\Desarrollos web\proyectos\37-scroll container> git config --global user.name "lmsu"
PS C:\Users\LUIS SALINAS\Desktop\Desarrollos web\proyectos\37-scroll container> git config --global user.email "lsalinasuban@hotmail.com"
PS C:\Users\LUIS SALINAS\Desktop\Desarrollos web\proyectos\37-scroll container> git config --global push.default "matching"              
PS C:\Users\LUIS SALINAS\Desktop\Desarrollos web\proyectos\37-scroll container> git init
Initialized empty Git repository in C:/Users/LUIS SALINAS/Desktop/Desarrollos web/proyectos/37-scroll container/.git/
PS C:\Users\LUIS SALINAS\Desktop\Desarrollos web\proyectos\37-scroll container> git add .
PS C:\Users\LUIS SALINAS\Desktop\Desarrollos web\proyectos\37-scroll container> git commit -m "Configuración inicial"
[master (root-commit) 7227209] Configuración inicial
 16 files changed, 126 insertions(+)
 create mode 100644 .vscode/settings.json
 create mode 100644 img/img1.jpg
 create mode 100644 img/img1.png
 create mode 100644 img/img10.jpg
 create mode 100644 img/img2.jpg
 create mode 100644 img/img2.png
 create mode 100644 img/img3.jpg
 create mode 100644 img/img4.jpg
 create mode 100644 img/img5.jpg
 create mode 100644 img/img6.jpg
 create mode 100644 img/img7.jpg
 create mode 100644 img/img8.jpg
 create mode 100644 img/img9.png
 create mode 100644 index.html
 create mode 100644 main.js
 create mode 100644 styles.css
PS C:\Users\LUIS SALINAS\Desktop\Desarrollos web\proyectos\37-scroll container> git log
commit 7227209c8f404bea225870ee4556e8f711214b9b (HEAD -> master)
Author: lmsu <lsalinasuban@hotmail.com>
Date:   Thu Nov 7 14:38:16 2024 +0100

    Configuración inicial
PS C:\Users\LUIS SALINAS\Desktop\Desarrollos web\proyectos\37-scroll container> git remote add origin https://github.com/lmsu/scroll-container.git
PS C:\Users\LUIS SALINAS\Desktop\Desarrollos web\proyectos\37-scroll container> git branch -M main
PS C:\Users\LUIS SALINAS\Desktop\Desarrollos web\proyectos\37-scroll container> git push -u origin main
Enumerating objects: 20, done.
Counting objects: 100% (20/20), done.
Delta compression using up to 12 threads
Compressing objects: 100% (18/18), done.
Writing objects: 100% (20/20), 333.45 KiB | 25.65 MiB/s, done.
Total 20 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
To https://github.com/lmsu/scroll-container.git
 * [new branch]      main -> main
branch 'main' set up to track 'origin/main'.