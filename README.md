# Spesa Counter

## How to build
- Install npm
- Clone the repo and open the terminal
- Run **npm install --dev** in the terminal
- Run **npm run build** to build the project once
- Run **npm start** to start the live reload server
- Connect to **localhost:8080** via browser

## How to publish
- Checkout a new branch
- Build using **npm run build**
- Run **git add dist -f**
- Run **git commit -m "v.v.v"**
- Run **git subtree push --prefix dist origin gh-pages**

Note: It may be required to delete the existing gh-pages branch of the repo

## How to connect
Go to **www.jackss011.github.io/spesa-counter**
