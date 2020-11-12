const {app, BrowserWindow, Menu} = require('electron');
const path = require('path');
const url = require('url');
const isDev = require('electron-is-dev');
const nativeImage = require('electron').nativeImage;
    var image = nativeImage.createFromPath(__dirname + '/public/icon/icon.icns');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({minHeight:150,minWidth:1050,height:185,width:1050,maxWidth:1050,maxHeight:200,maximizable:false})
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
  mainWindow.on('closed', () => mainWindow = null);
};

generateMenu = () => {
	const template = [
		{
			label: 'File',
			submenu: [{ role: 'quit' }],
		},
		{
			label: 'Edit',
			submenu: [
				{ role: 'undo' },
				{ role: 'redo' },
				{ type: 'separator' },
				{ role: 'cut' },
				{ role: 'copy' },
				{ role: 'paste' },
			],
		},
		{
			label: 'View',
			submenu: [
				{ role: 'reload' },
				{ role: 'forcereload' },
			],
		},
		{
			role: 'window',
			submenu: [{ role: 'minimize' }, { role: 'close' }],
		},
	];

	Menu.setApplicationMenu(Menu.buildFromTemplate(template));
};

app.on('ready', createWindow, generateMenu());

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
