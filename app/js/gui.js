var gui = require('nw.gui');

// Hide the main window
//var win = gui.Window.get();
//win.hide();

// Setup the tray menu
var tray = new gui.Tray({icon: 'img/appium_logo_small.png' });
var menu = new gui.Menu();
menu.append(new gui.MenuItem({ label: 'Appium: On', enabled : false }));
menu.append(new gui.MenuItem({ label: 'Turn Appium Off' }));
//menu.append(new gui.MenuItem({ label: 'Separator', type : 'separator' }));
//menu.append(new gui.MenuItem({ label: 'Open Appium Preferences...' }));
tray.menu = menu;
