# lanceDialog.js

***前端弹出框组件，用来进行弹出框的创建和响应，使用简单，界面较为友好！***

2016-2017学年寒假自己做的一个小组件，主要用于自己的项目[tic-tac-toe](http://codepen.io/lancelou/pen/apaPpz),也是自己在前端组件制作方面的一点小尝试，不足之处，还请各位指导！

Demo
---

* Demo1(Dialog)
![demo1](http://ww3.sinaimg.cn/large/ad5d774bjw1fckhjz7vc0j20f807hdfx.jpg)

* Demo2(SelectDialog)
![demo1](http://ww1.sinaimg.cn/large/ad5d774bjw1fckhjf57rjj20f807jq2z.jpg)


Doc(示例性质[尴尬])
---

* 创建对象

	```JavaScript
		var dialog = new Dialog("标题", "信息");
		
		var selectDialog = new SelectDialog("标题", "信息", ["选项一", "选项二"]);
	```
	
* 添加回调函数
	
	```JavaScript
		dialog.addCallback(dialog, function(value){
			//用户输入反馈， value: true(用户反馈是)  false(用户反馈否)
		});
		
		selectDialog.addCallback(selectDialog, function (value) {
			if (value === "o")
				startGame(1);
			else
				startGame(0);
			this.close();
		});
	```
	
* 弹出dialog
	
	```JavaScript
		dialog.popup();	
		
		selectDialog.popup();
	```
	
* 收起dialog

	```JavaScript
		dialog.close();	
		
		selectDialog.close();
	```
	
	
The end
---
第一次做组件，当然，也不知道能否称为组件。使用ES6编写，babel编译，webpack打包，算是Lance对这些新技术的一些学习之后的局部实验！不足之处，愿各位多多指导。长路漫漫，步步积累，慢慢沉淀！