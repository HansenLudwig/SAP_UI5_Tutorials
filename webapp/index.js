/* Quick Start Tutorial:  Step 2: Steady
    在此替换掉 Step 1 的大多数代码（Step 1的index.js已经被备份至其他文件）
    新的index.js如下：
*/

/* 在此移除了旧的内联按钮，加入了XML视图，将表示与控制逻辑分离。
用新定义的命名空间Quickstart.App作为视图名称的前缀。
视图是异步加载的。
类似Step 1，定义后的XML视图被置于 id="content"的元素中
*/
sap.ui.define([
	"sap/ui/core/mvc/XMLView"
], function (XMLView) {
	"use strict";

	XMLView.create({viewName: "Quickstart.App"}).then(function (oView) {
		oView.placeAt("content");
	});
});