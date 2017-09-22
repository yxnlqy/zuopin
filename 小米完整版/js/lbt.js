/*
* @Author: Lenovo
* @Date:   2017-08-10 12:03:17
* @Last Modified by:   Lenovo
* @Last Modified time: 2017-08-15 23:54:56
*/

'use strict';
$(function(){
	let banner=$('.banner')[0];
	let imgBox=$('.imgBox')[0];
	let imgs=$('li',imgBox);
	let widths=imgBox.offsetWidth;
	let now=0,next=0;
	let flag=true;
	//获取原点
	let yuandian=$('.yuandian')[0];
	let btns=$('li',yuandian);
	// alert(widths);
	// 获取箭头
	let zuo=$('.jiantou1')[0];
	let you=$('.jiantou2')[0];

	console.log(btns);
/*
now:(当前窗口)
next:(下一张)
1.就位 next（右边）: ->widths 0
2.动画 move: 
  now:0 0 ->-width 0
  next:width 0 ->0 0
3.更新 next=now
*/
	let t=setInterval(move,3000);
	function move(){
       next++;
       if(next==imgs.length){
       	next=0;
       }
       imgs[next].style.left=`${widths}px`;
       animate(imgs[now],{left:-widths});
       animate(imgs[next],{left:0},function(){
       	flag=true;
       });
       btns[now].style.background= 'rgba(0, 0, 0, 0.46)';
       btns[next].style.background= 'rgba(255, 255, 255, 0.46)';      
       now=next;
	}
	//点击显示图片
	for(let i=0;i<btns.length;i++){
	   
       btns[i].onclick=function(){
       	if(i==now){
				return;
			}
		if(now<i){
       imgs[i].style.left=`${widths}px`;
       btns[now].classList.remove('hot');
	   btns[i].classList.add('hot');
       animate(imgs[now],{left:-widths});
       animate(imgs[i],{left:0});
       now=i;
    }
    if(now>i){
       imgs[i].style.left=`${-widths}px`;
       btns[now].classList.remove('hot');
	   btns[i].classList.add('hot');
       animate(imgs[now],{left:widths});
       animate(imgs[i],{left:0});
       now=i;
    }   
     
    /*for(let j=0;j<imgs.length;j++){             	  
          btns[j].style.background= 'rgba(0, 0, 0, 0.46)';
       	 }         
         btns[i].style.background= 'rgba(255, 255, 255, 0.46)';
       }*/
	}
	
}
	//左右按钮
	zuo.onclick=function(){
		if(!flag){
			return;
		}
		flag=false;
		move();
	}

	function move1(){
       next--;
       if(next==-1){
       	next=imgs.length-1;
       }
       imgs[next].style.left=`${-widths}px`;
       animate(imgs[now],{left:widths});
       animate(imgs[next],{left:0},function(){
       	flag=true;
       });
       btns[now].style.background= 'rgba(0, 0, 0, 0.46)';
       btns[next].style.background= 'rgba(255, 255, 255, 0.46)';      
       now=next;
	}
	you.onclick=function(){
		if(!flag){
			return;
		}
		flag=false;
		move1();
	}
	//鼠标移入自动轮播停止
	banner.onmouseover=function(){
		clearInterval(t);
	}
	banner.onmouseout=function(){
		t=setInterval(move,3000);
	}
})