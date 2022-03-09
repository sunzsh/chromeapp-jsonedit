const container = document.getElementById('jsoneditor')

const options = {
  mode: 'code',
  modes: ['code', 'form', 'text', 'tree', 'view', 'preview'] // allowed modes
}

const json = {}

const editor = new JSONEditor(container, options, json)
// 设置JSONEditor实例
window.JSONEditorInstance=editor
