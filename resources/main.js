const container = document.getElementById('jsoneditor')
const jsonkey = 'jsonv'
  const options = {
    mode: 'code',
    modes: ['code', 'form', 'text', 'tree', 'view', 'preview'], // allowed modes
    onChange: () => {
      try {
        localforage.setItem(jsonkey,editor.get())
      } catch (e) {}
    },
  }
 
const editor = new JSONEditor(container, options)
async function init() {
  let json = ''
  try {
    json = await localforage.getItem(jsonkey) || json
  } catch (e) { }
  if (json) { 
    editor.set(json)
  } else {
    editor.setText(json)
  }
  
}
init()

editor.focus()

// 设置JSONEditor实例
window.JSONEditorInstance=editor
