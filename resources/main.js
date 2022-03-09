const container = document.getElementById('jsoneditor')
const jsonkey = 'jsonv'
  const options = {
    mode: 'code',
    modes: ['code', 'form', 'text', 'tree', 'view', 'preview'], // allowed modes
    onChange: () => {
      try {
        localforage.setItem(jsonkey,editor.get())
      } catch (e) {
      }
    },
    
  }
 
let json={}
let editor
async function init() {
  try {
    json = await localforage.getItem(jsonkey)
  } catch (e) {
  }
  editor = new JSONEditor(container, options, json)
}
init()