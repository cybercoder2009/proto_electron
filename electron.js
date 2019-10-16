const { app, BrowserWindow } = require('electron')
const url = require('url');
const path = require('path')

let mainWindow

function createWindow () {
    mainWindow = new BrowserWindow({ width: 800, height: 640, webPreferences: {
        webSecurity: false
    }})
    let entry = path.join(`file://${__dirname}/build/index.html`)
    console.log(entry)
    mainWindow.loadURL(entry)
    mainWindow.webContents.openDevTools()
    mainWindow.on('closed', function () {
        mainWindow = null
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow()
    }
})