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

const mode = window.location.search.substring(1)
const editor = new JSONEditor(container, options)
async function init() {
  let json = ''
  try {
    try{
      json = await localforage.getItem(jsonkey) || json
    }catch(e) {
     
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
window.JSONEditorInstance = editor

//加载时设置默认字体大小
var font = parseInt(localStorage.getItem('jsonedit_fontsize'));
if (font < 0) {
	font = 15;
  localStorage.setItem('jsonedit_fontsize', font);
}
document.querySelector('.ace_editor').style.fontSize = font + 'px';
