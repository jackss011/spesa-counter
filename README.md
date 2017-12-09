# Spesa Counter

## How to build
- [Node](https://nodejs.org) must be installed.
- Clone the repo and open the terminal.
- Run `npm install --dev` in the terminal.
- Run `npm run build` to build the project once.
- Run `npm start` to start the live server.
- Connect to `localhost:8080` via browser.

#### Note
- Use `npm run host` to start the live server over LAN to test mobile devices.

## About the favicon
Favicon is created using [Inkscape](https://inkscape.org) and saved as a __.svg__.

Favicon must be converted manually from __.svg__ to __.ico__ to when modified.

To covert the favicon use [Image Magick](https://www.imagemagick.org/script/index.php)
with the following parameters:

`convert -density 384 -background transparent favicon.svg -define icon:auto-resize -colors 256 favicon.ico`

## How to deploy
- Build using `npm run build`.
- Check [Firebase hosting guide](https://firebase.google.com/docs/hosting).

## Website
Go to [website](https://spesa-counter.firebaseapp.com).
