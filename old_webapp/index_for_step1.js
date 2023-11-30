/* Quick Start Tutorial:  Step 1: Ready
    在webapp文件夹中继续创建一个文件：index.js
	并加入如下代码
*/

/* 在此加载了2个控件：
	- 一个按钮 sap/m/Button
	- 一个消息弹窗（Toast） sap/m/MessageToast
  并置于具有“conten”ID的元素之中。 new Button(//...).placeAt("content");
	同时按钮被定义了其上的文字属性（Ready）以及一个Callback，依附于其被按下时的 Event 上。
*/
sap.ui.define([
	"sap/m/Button",
	"sap/m/MessageToast"
], function (Button, MessageToast) {
	"use strict";

	new Button({
		text: "Ready...",
		press: function () {
			MessageToast.show("Hello World!");
		}
	}).placeAt("content");
});