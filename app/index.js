const { app, BrowserWindow } = require('electron')

require('electron-debug')({
    showDevTools: process.env.NODE_ENV === 'development'
})

function createWindow() {
    let win = new BrowserWindow({
        width: 400,
        height: 500,
        resizable: false,
        icon: './app/icon.png',
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.setMenu(null);
    win.loadFile('./app/main.js')
}

app.on('ready', createWindow)