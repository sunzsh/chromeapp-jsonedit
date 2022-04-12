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
      // 获取url后面的json字符串
      if (!mode || mode == '') {
        json = await localforage.getItem(jsonkey) || json
      } else if ('none' == mode) {
        json = ''
      } else if ('clipboard' == mode) {
        chrome.runtime.sendMessage({}, function (response){
          json = response.clipboard;
          try {
            editor.set(JSON.parse(json))
          } catch(e) { }
        });
        return
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
window.JSONEditorInstance = editor

//加载时设置默认字体大小
var font = parseInt(localStorage.getItem('jsonedit_fontsize'));
if (font < 0) {
	font = 15;
  localStorage.setItem('jsonedit_fontsize', font);
}
document.querySelector('.ace_editor').style.fontSize = font + 'px';
