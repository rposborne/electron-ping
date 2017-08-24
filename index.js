const {app, Menu, Tray, MenuItem} = require('electron')

let appIcon = null
app.on('ready', () => {
  appIcon = new Tray('images/tray_icon_purple.png')
  const contextMenu = Menu.buildFromTemplate([
    new MenuItem({
      label: 'MenuItem1', 
      click() {
        console.log(Object.keys(appIcon), "appIcon")
        appIcon.setImage('images/tray_icon_black.png')
        appIcon.setImage('images/tray_icon_purple.png')
        console.log('item 1 clicked')
      }
    }),
    {type: 'separator'},
    {label: 'Quit the greatest app ever?', role: 'quit'}
  ])
  // Make a change to the context menu
  contextMenu.items[1].checked = false

  // Call this again for Linux because we modified the context menu
  appIcon.setContextMenu(contextMenu)
})
