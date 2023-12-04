/* Walkthrough Tutorial:
*/

/* 
本脚本，其中包含本教程步骤的应用程序逻辑。
出于安全原因，我们这样做是为了避免在 HTML 文件中直接包含可执行代码。该脚本将被从index.html调用。
我们以声明的方式将其定义为模块。
*/

/* Step 2
sap.ui.define([], () => {
	"use strict";
	alert("UI5 is ready");
});
*/

/* Step 3
sap.ui.define([
	"sap/m/Text"
], (Text) => {
	"use strict";
	alert("UI5 is ready");

	new Text({
		text: "Hello World"
	}).placeAt("content");
});
*/

sap.ui.define([
	"sap/ui/core/ComponentContainer"
], (ComponentContainer) => {
	"use strict";

	new ComponentContainer({
		name: "ui5.walkthrough",
		settings : {
			id : "walkthrough"
		},
		async: true
	}).placeAt("content");
});