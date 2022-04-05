# 简约好用的json编辑chrome插件

## 简介

基于 [josdejong/jsoneditor](https://github.com/josdejong/jsoneditor) 封装的chrome插件，喜欢简洁的朋友一定要试试！

![效果图](https://raw.githubusercontent.com/sunzsh/chromeapp-jsonedit/master/screenshot.png)

## 使用方法
> 由于chrome目前已经不支持app类型的插件上架应用商店了，所以只能下载源码后自己安装了（很简单）

1. 下载源码
2. 在chrome中打开 `chrome://extensions`
3. 右上角找到并开启“开发者模式”
4. 将源码的根目录拖拽到chrome中（安装成功）
5. 在chrome中打开 `chrome://apps` ，找到“JsonEditor” 单击打开
6. 打开url中可以追加 `?clipboard` 自动加载剪切板里的json
6. \[可选\] 方便以后进入，建议打开后，添加到收藏夹
7. \[可选\] 可以配合安装 [alfred插件](https://github.com/sunzsh/favoritesWorkflow4Alfred/blob/main/jsonEditor.alfredworkflow) 快速打开（支持按住command自动加载剪切板内json）

## 特别鸣谢
* [https://github.com/josdejong/jsoneditor](https://github.com/josdejong/jsoneditor) 
* [sungf](https://github.com/sungf) 、 [zhaoeryu](https://github.com/zhaoeryu)  贡献的源码提供了历史记录的功能
