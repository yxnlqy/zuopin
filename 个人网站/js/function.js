/*
* @Author: Lenovo
* @Date:   2017-08-14 09:37:46
* @Last Modified by:   Lenovo
* @Last Modified time: 2017-08-14 16:39:20
*/

'use strict';
function $(select,ranger=document){
	// let ranger=ranger||document;
	if(typeof select=='string'){
		let selector=select.trim();
		let firstChar=selector.charAt(0);
		if(firstChar=='#'){
			return ranger.getElementById(selector.substring(1));
		}else if(firstChar=='.'){
			return ranger.getElementsByClassName(selector.substring(1));
		}else if(/^[a-zA-Z][a-zA-Z1-6]{0,8}$/.test(selector)){
			return ranger.getElementsByTagName(selector);
		}
	}else if(typeof select=='function'){
		window.onload=function(){
			select();
		}
	}
}
	//获取或设置元素内容 通过HTML
	function HTML(element,content){
		if(arguments.length==2){
			element.innerHTML=content;
		}else if(arguments.length==1){
            return element.innerHTML;
		}
	}
	//获取或设置元素内容 通过Text
	function Text(element,content){
		if(arguments.length==2){
			element.innerText=content;
		}else if(arguments.length==1){
            return element.innerText;
		}
	}
	//设置样式
	function css(element,attrObj){
      for(let i in attrObj){
      	element.style[i]=attrObj[i];
      }
	}
	//添加或删除元素
	function on(collection,type,fn){
		for(let i=0;i<collection.length;i++){
			collection[i][type]=fn;
		}
	}
	function off(collection,type,fn){
		for(let i=0;i<collection.length;i++){
			collection[i][type]=null;
		}
	}
	//动画
	/*function(element,attrObj,speed,fn){
		let t=setInterval(function(){
			let start=getComputedStyle(element,null).[i];
			
		},60)
	}*/
	
 