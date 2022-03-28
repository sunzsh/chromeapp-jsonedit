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
    try{
      // 获取url后面的json字符串
      let str = window.location.search.substring(1)
      if ('none' == str) {
        json = ''
      } else {
        if (str.length > 0) {
          json = JSON.parse(decodeURIComponent(window.location.search.substring(1)))
          localforage.setItem(jsonkey, json)
        }
      }
    }catch(e) {
     json = await localforage.getItem(jsonkey) || json
    }
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
