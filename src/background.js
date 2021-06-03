
chrome.runtime.onInstalled.addListener(function(){
  chrome.contextMenus.create({
    type: 'normal',
    id: 'copy-uuid',
    title: '(Clipboard) UUID'
  })
})

chrome.contextMenus.onClicked.addListener(function(item){
  if (item.menuItemId === 'copy-uuid') {
    const textArea = document.createElement('textarea')
    document.body.appendChild(textArea)

    textArea.value = uuidv4()
    textArea.select()

    document.execCommand('copy')
    document.body.removeChild(textArea)
  }
})
