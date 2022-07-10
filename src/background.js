importScripts('../vendor/uuid/uuidv4.min.js')

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    type: 'normal',
    id: 'copy-uuid',
    title: '(Clipboard) UUID'
  })
})

function copyToClipboard(text) {
  const textArea = document.createElement('textarea')
  document.body.appendChild(textArea)

  textArea.value = text
  textArea.select()

  document.execCommand('copy')
  document.body.removeChild(textArea)
}

chrome.contextMenus.onClicked.addListener((item, tab) => {
  if (item.menuItemId === 'copy-uuid') {
    const text = uuidv4()

    chrome.scripting.executeScript({
      target: {
        tabId: tab.id
      },
      function: copyToClipboard,
      args: [text]
    })
  }
})
