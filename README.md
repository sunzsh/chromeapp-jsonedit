# 简约好用的json编辑chrome插件

## 简介

基于 [josdejong/jsoneditor](https://github.com/josdejong/jsoneditor) 封装的chrome插件，喜欢简洁的朋友一定要试试！（效果视频：https://v.douyin.com/NpY9VNd/ ）

![效果图](https://raw.githubusercontent.com/sunzsh/chromeapp-jsonedit/506bbb4c14878fe97a3e80d400a6231cf2f78f90/screenshot.png)


## 更新记录
### 2022-04-12
1. 解决初次安装时报错（不影响使用）
2. 解决剪切板内容为非标准json时打开`clipboard`模式会报错的问题
### 2022-04-06
1. 支持在地址后追加参数来指定打开方式，例如：`...index.html?clipboard`
    * `无参数` 默认加载最后一次编辑过的json
    * `none` 打开一个空的编辑器
    * `clipboard` 自动读取剪切板里的内容加载并格式化
2. 支持字体缩放并记忆
3. 恢复支持了格式错误的提醒
4. 重构了自定义按钮的样式

## 使用方法
> 由于chrome目前已经不支持app类型的插件上架应用商店了，所以只能下载源码后自己安装了（很简单）

1. 下载源码
2. 在chrome中打开 `chrome://extensions`
3. 右上角找到并开启“开发者模式”
4. 将源码的根目录拖拽到chrome中（安装成功）
5. 在chrome中打开 `chrome://apps` ，找到“JsonEditor” 单击打开
6. 打开url中可以追加 `?clipboard` 自动加载剪切板里的json
7. \[可选\] 方便以后进入，建议打开后，添加到收藏夹
8. \[可选\] 可以配合安装 [alfred插件](https://github.com/sunzsh/favoritesWorkflow4Alfred/blob/main/jsonEditor.alfredworkflow) 快速打开（支持按住command自动加载剪切板内json）

## 特别鸣谢
* ★★★ 没有 [Jos de Jong](https://github.com/josdejong) 开源的 [josdejong/jsoneditor](https://github.com/josdejong/jsoneditor) ，就不会有这个小工具
* [sungf](https://github.com/sungf) 、 [zhaoeryu](https://github.com/zhaoeryu)  贡献的源码提供了历史记录的功能
* [git-403](https://github.com/git-403) 贡献了加载加载剪切板的代码和思路
* [Cherry-toto](https://github.com/Cherry-toto) 贡献了字体缩放的初始代码
