/*
* @Author: Lenovo
* @Date:   2017-08-10 12:03:17
* @Last Modified by:   Lenovo
* @Last Modified time: 2017-09-11 14:19:41
*/

'use strict';
/*for(i=0;i<lis.length;i++){
	lis[i].onmouseenter=function(){
		let item=this.document.getElementsByClassName('item')[0];
		item.style.display='block';
	}
	lis[i].onmouseleave=function(){
		let item=this.document.getElementsByClassName('item')[0];
		item.style.display='none';
	}
}*/
window.onload=function(){
	let gwc=document.getElementsByClassName('hr-right')[0];
	let listshop=document.getElementsByClassName('list-shop')[0];
	let aside=document.getElementsByTagName('aside')[0];
	let lis=aside.getElementsByClassName('asideli');
	let item=document.getElementsByClassName('item');
	//轮播图
	let imgbox=document.getElementsByClassName('imgBox')[0];
	let imgs=imgbox.getElementsByTagName('img');
	let btnbox=document.getElementsByClassName('yuandian')[0];
	let btns=btnbox.getElementsByTagName('li');
	let num=0;//当前窗口显示的图片
	//后退、前进
	let back=document.getElementsByClassName('jiantou1')[0];
	let forward=document.getElementsByClassName('jiantou2')[0];
    //获取banner
    let banner=document.getElementsByClassName('banner')[0];
    //获取导航
    let nav=document.getElementsByTagName('nav')[0];
    let navLis=nav.getElementsByClassName('navli');
    let navList=document.getElementsByClassName('navList');
    // let navLists=navList.getElementsByTagName('li');
    console.log(navLis);
    //获取搜索
    let naviRight=document.getElementsByClassName('naviRight')[0];
    let navirightLeft=document.getElementsByClassName('navirightLeft')[0];
    let wenziLeft=document.getElementsByClassName('wenziLeft')[0];
    let wenziRight=document.getElementsByClassName('wenziRight')[0];
    let tex=document.getElementsByClassName('tex')[0];
    let ssList=document.getElementsByClassName('ssList')[0];
    let body=document.getElementsByTagName('body')[0];
    //明星单品
    
    // console.log(body);
    gwc.onmouseenter=function(){
    	
    	listshop.style.height='98px';

    }
    gwc.onmouseleave=function(){
    	listshop.style.height='0px';
    }
    /*//第一种方法
	for(let i=0;i<lis.length;i++){
		lis[i].onmouseenter=function(){
			let item=this.getElementsByClassName('item')[0];
		    item.style.display='block';
		}
		lis[i].onmouseleave=function(){
			let item=this.getElementsByClassName('item')[0];
		    item.style.display='none';
		}
	}*/
	//第二种方法
	/*for(var i=0;i<lis.length;i++){
		lis[i].index=i;//给对象添加属性，将i绑定到对象上；
		lis[i].onmouseenter=function(){
			// let item=this.getElementsByClassName('item')[0];
		    item[this.index].style.display='block';
		}
		lis[i].onmouseleave=function(){
			// let item=this.getElementsByClassName('item')[0];
		    item[this.index].style.display='none';
		}
	}*/
	//闭包方法
	for(var i=0;i<lis.length;i++){
		lis[i].onmouseover = (function(i){
			return function(){
            item[i].style.display = 'block';
			}
		})(i)
		lis[i].onmouseout = (function(i){
			return function(){
            item[i].style.display = 'none';
			}
		})(i)
	}
  console.log(lis);
	//点击轮播图
    for(let i=0;i<imgs.length;i++){
       btns[i].onclick=function(){
       	 for(let j=0;j<imgs.length;j++){
       	 	imgs[j].style.display='none';
          btns[j].style.background= 'rgba(0, 0, 0, 0.46)';
       	 }
         imgs[i].style.display='block';
         btns[i].style.background= 'rgba(255, 255, 255, 0.46)';
       }
	}
   //自动轮播图
   let t=setInterval(fn,3000);
   function fn(){
   	num++;  
   	if(num==imgs.length){
   		 num=0;
   	}	
   	for(let i=0;i<imgs.length;i++){
   		imgs[i].style.display='none';
   		// btns[i].classList.remove('hot');
    btns[i].style.background= 'rgba(0, 0, 0, 0.46)';
   		
   	}
    imgs[num].style.display='block';
   	// btns[num].classList.add('hot'); 
    btns[num].style.background= 'rgba(255, 255, 255, 0.46)';

   }
   //前进、后退箭头
   forward.onclick=fn;
   back.onclick=function(){
   	num--;  
   	if(num<0){
   		 num=imgs.length-1;
   	}	
   	for(let i=0;i<imgs.length;i++){
   		imgs[i].style.display='none';
      btns[i].style.background= 'rgba(0, 0, 0, 0.46)';
   				
   	}
    imgs[num].style.display='block';
    btns[num].style.background= 'rgba(255, 255, 255, 0.46)';
   
   	// btns[num].classList.add('hot');    
   }
   //鼠标移入轮播停止
   banner.onmouseenter=function(){
   	clearInterval(t);
   }
   banner.onmouseleave=function(){
   t=setInterval(fn,3000);
   }
   //nav的下拉菜单
   for(let i=0;i<navLis.length-2;i++){
    navLis[i].onmouseover=function(){
   	navList[i].style.height='230px';
    // navLists[i].style.height='230px';
   	navList[i].style.borderTop='1px solid #e0e0e0';
    // navList[i].style.transition=`0.3s`;
   }
   navLis[i].onmouseout=function(){
   	navList[i].style.height='0';
   	navList[i].style.borderTop='0px solid #e0e0e0';
    navList[i].style.transition=`none`;

   }
}
   //搜索下拉菜单
   
   tex.onclick=function(){
      naviRight.style.border='1px solid #ff6700';
      navirightLeft.style.borderRight= '1px solid #ff6700';
      wenziLeft.style.height='0';
      wenziRight.style.height='0';
      ssList.style.height='330px';
      ssList.style.borderBottom='1px solid #ff6700';
   }
   /*tex.onmouseout=function(){
      naviRight.style.border='1px solid #e0e0e0';
      navirightLeft.style.borderRight= '1px solid #e0e0e0';
      wenziLeft.style.height='18px';
      wenziRight.style.height='18px';
      ssList.style.height='0px';
      ssList.style.borderBottom='1px solid #e0e0e0';
   }*/
   tex.onblur=function(){
      naviRight.style.border='1px solid #e0e0e0';
      navirightLeft.style.borderRight= '1px solid #e0e0e0';
      wenziLeft.style.height='18px';
      wenziRight.style.height='18px';
      ssList.style.height='0px';
      ssList.style.borderBottom='0px solid #e0e0e0';
   }
   //小米明星单品
   /*
    小米明星单品
    1.计算box的宽度：childnum*childWidth
   */
   let xmbtns=$('.danpintRight')[0];
   // console.log(xmbtns);
   let btnL=$('.danpintrLeft')[0];
   let btnR=$('.danpintrRight')[0];
   let dpBox=$('.dpBox')[0];
   let childNum=dpBox.childElementCount;
   let danpinBottom=$('.danpinBottom')[0];
   let flag1=true;
   let childW=danpinBottom.offsetWidth+parseInt(getComputedStyle(danpinBottom,null).marginRight)
   // console.log(danpinBottom.offsetWidth);
   dpBox.style.width=`${childNum*childW}px`;
   let num1=0;
   btnL.onclick=function(){
      if(num1==3){
         this.classList.add('disabled');
        return;
      }
      num1++;
      btnR.classList.remove('disabled');
      dpBox.style.transform=`translateX(${-num1*1240}px)`;
   }
   btnR.onclick=function(){
      if(num1==0){
        this.classList.add('disabled');
        return;
      }
      num1--;
      btnL.classList.remove('disabled');
      dpBox.style.transform=`translateX(${-num1*1240}px)`;
   }
  //自动轮播
   let t0=setInterval(move, 3000);
   function move(){
    if(flag1){
     if(num1==3){
        flag1=false;
        return;
    }
    num1++;
  }
     else{
     if(num1==0){
        flag1=true;
        return;
     }
     num1--;
    }
      dpBox.style.transform=`translateX(${-num1*1240}px)`;

}
 xmbtns.onmouseover=function(){
      clearInterval(t0);
}
xmbtns.onmouseout=function(){
      t0=setInterval(move, 3000);
}
   /*
   为你推荐
    */
let tjul=$('.tjul')[0];
let childCount=tjul.childElementCount;
let childOne=$('.tuijianBottom')[0];
let childoneW=childOne.offsetWidth+parseInt(getComputedStyle(childOne,null).marginRight);
// let tuijian1=$('.tuijain1')[0];
let btnL1=$('.tuijiantrLeft')[0];
let btnR1=$('.tuijiantrRight')[0];
let tuijiantRight=$('.tuijiantRight')[0];
tjul.style.width=`${childCount*childoneW}px`;
// console.log(tuijian1);
let numa=0;
let flag2=true;
   btnL1.onclick=function(){
      if(numa==3){
         this.classList.add('disabled');
        return;
      }
      numa++;
      btnR1.classList.remove('disabled');
      tjul.style.transform=`translateX(${-numa*1240}px)`;
   }
   btnR1.onclick=function(){
      if(numa==0){
        this.classList.add('disabled');
        return;
      }
      numa--;
      btnL1.classList.remove('disabled');
      tjul.style.transform=`translateX(${-numa*1240}px)`;
   }
  
   /*let t1=setInterval(move1, 3000);
   function move1(){
    if(flag2){
     if(numa==3){
        flag2=false;
        return;
    }
    numa++;
  }
     else{
     if(numa==0){
        flag2=true;
        return;
     }
     numa--;
    }
       tjul.style.transform=`translateX(${-numa*1240}px)`;

}
 tuijiantRight.onmouseover=function(){
      clearInterval(t1);
}
tuijiantRight.onmouseout=function(){
      t1=setInterval(move1, 3000);
}*/
// console.log(tujian1.style.width);

//家电
let jdbtns=$('.jiadiantRight')[0];
let btnsli=$('li',jdbtns);
let module=$('.jiadianBottom')[0];
let jduls=$('.jadianbRight');
// console.log(jduls);
 for(let i=0;i<jduls.length;i++){
       btnsli[i].onmouseover=function(){
         for(let j=0;j<jduls.length;j++){
          jduls[j].style.display='none';
          btnsli[j].classList.remove('hot1');
         }
         jduls[i].style.display='block';
         btnsli[i].classList.add('hot1');
       }
      /* btnsli[i].onmouse=function(){
         for(let j=0;j<jduls.length;j++){
          jduls[j].style.display='none';
          // btnsli[j].style.background= 'rgba(0, 0, 0, 0.46)';
         }
         jduls[i].style.display='block';
         // btnsli[i].style.background= 'rgba(255, 255, 255, 0.46)';
       }*/
  }
  //内容
  let nrul=$('.neirongbTushu')[0];
  let nrs=$('.nrBox')
  let nrs1=$('.nrBox1')
  let nrs2=$('.nrBox2')
  let nrs3=$('.nrBox3')
  let nrbtn=$('.yuandian1')[0];
  let nrbtns=$('li',nrbtn);
  let nrbtn2=$('.yuandian2')[0];
  let nrbtns2=$('li',nrbtn2);
  let nrbtn3=$('.yuandian3')[0];
  let nrbtns3=$('li',nrbtn3);
  let nrbtn4=$('.yuandian4')[0];
  let nrbtns4=$('li',nrbtn4);
  let numnr=0;
  let numnr1=0;
  let numnr2=0;
  let numnr3=0;
  // console.log(nrs);
  //点击原点切换内容
   for(let i=0;i<nrs.length;i++){
       nrbtns[i].onclick=function(){
         for(let j=0;j<nrs.length;j++){
          nrs[j].style.display='none';
          nrbtns[j].style.background= '#B0B0B0';
          nrbtns[j].style.border= '0px solid #ff6700';
          nrbtns[j].style.marginTop= '3px';
         }
         nrs[i].style.display='block';
         nrbtns[i].style.background= '#fff';
         nrbtns[i].style.border= '2px solid #ff6700';
         nrbtns[i].style.marginTop= '1px';
       }
  }
  //点击箭头切换内容
  let jtL=$('.jiantouLeft')[0];
  let jtR=$('.jiantouRight')[0];
  // console.log(jtR);
  jtL.onclick=function(){
    numnr--;
      if(numnr<0){
        numnr=nrs.length-1;
      }
    for(i=0;i<nrs.length;i++){
          nrs[i].style.display='none';
          nrbtns[i].style.background= '#B0B0B0';
          nrbtns[i].style.border= '0px solid #ff6700';
          nrbtns[i].style.marginTop= '3px';
    }
    nrs[numnr].style.display='block';
    nrbtns[numnr].style.background= '#fff';
    nrbtns[numnr].style.border= '2px solid #ff6700';
    nrbtns[numnr].style.marginTop= '1px';
  }
  jtR.onclick=function(){
    numnr++;
      if(numnr>2){
        numnr=0;
      }
    for(i=0;i<nrs.length;i++){
          nrs[i].style.display='none';
          nrbtns[i].style.background= '#B0B0B0';
          nrbtns[i].style.border= '0px solid #ff6700';
          nrbtns[i].style.marginTop= '3px';
    }
    nrs[numnr].style.display='block';
    nrbtns[numnr].style.background= '#fff';
    nrbtns[numnr].style.border= '2px solid #ff6700';
    nrbtns[numnr].style.marginTop= '1px';
  }
  //2
  //点击原点切换内容
   for(let i=0;i<nrs1.length;i++){
       nrbtns2[i].onclick=function(){
         for(let j=0;j<nrs1.length;j++){
          nrs1[j].style.display='none';
           nrbtns2[j].style.background= '#B0B0B0';
           nrbtns2[j].style.border= '0px solid #ff6700';
           nrbtns2[j].style.marginTop= '3px';
         }
         nrs1[i].style.display='block';
          nrbtns2[i].style.background= '#fff';
          nrbtns2[i].style.border= '2px solid #ff6700';
          nrbtns2[i].style.marginTop= '1px';
       }
  }
  //点击箭头切换内容
  let jtL1=$('.jiantouLeft1')[0];
  let jtR1=$('.jiantouRight1')[0];
  jtL1.onclick=function(){
    numnr1--;
      if(numnr1<0){
        numnr1=nrs1.length-1;
      }
    for(i=0;i<nrs1.length;i++){
          nrs1[i].style.display='none';
           nrbtns2[i].style.background= '#B0B0B0';
           nrbtns2[i].style.border= '0px solid #ff6700';
           nrbtns2[i].style.marginTop= '3px';
    }
    nrs1[numnr1].style.display='block';
     nrbtns2[numnr1].style.background= '#fff';
     nrbtns2[numnr1].style.border= '2px solid #ff6700';
     nrbtns2[numnr1].style.marginTop= '1px';
  }
  jtR1.onclick=function(){
    numnr1++;
      if(numnr1>2){
        numnr1=0;
      }
    for(i=0;i<nrs1.length;i++){
          nrs1[i].style.display='none';
           nrbtns2[i].style.background= '#B0B0B0';
           nrbtns2[i].style.border= '0px solid #ff6700';
           nrbtns2[i].style.marginTop= '3px';
    }
    nrs1[numnr1].style.display='block';
     nrbtns2[numnr1].style.background= '#fff';
     nrbtns2[numnr1].style.border= '2px solid #ff6700';
     nrbtns2[numnr1].style.marginTop= '1px';
  }
   //3
  //点击原点切换内容
   for(let i=0;i<nrs2.length;i++){
       nrbtns3[i].onclick=function(){
         for(let j=0;j<nrs2.length;j++){
          nrs2[j].style.display='none';
           nrbtns3[j].style.background= '#B0B0B0';
           nrbtns3[j].style.border= '0px solid #ff6700';
           nrbtns3[j].style.marginTop= '3px';
         }
         nrs2[i].style.display='block';
          nrbtns3[i].style.background= '#fff';
          nrbtns3[i].style.border= '2px solid #ff6700';
          nrbtns3[i].style.marginTop= '1px';
       }
  }
  //点击箭头切换内容
  let jtL2=$('.jiantouLeft2')[0];
  let jtR2=$('.jiantouRight2')[0];
  jtL2.onclick=function(){
    numnr2--;
      if(numnr2<0){
        numnr2=nrs2.length-1;
      }
    for(i=0;i<nrs2.length;i++){
          nrs2[i].style.display='none';
           nrbtns3[i].style.background= '#B0B0B0';
           nrbtns3[i].style.border= '0px solid #ff6700';
           nrbtns3[i].style.marginTop= '3px';
    }
    nrs2[numnr2].style.display='block';
     nrbtns3[numnr2].style.background= '#fff';
     nrbtns3[numnr2].style.border= '2px solid #ff6700';
     nrbtns3[numnr2].style.marginTop= '1px';
  }
  jtR2.onclick=function(){
    numnr2++;
      if(numnr2>2){
        numnr2=0;
      }
    for(i=0;i<nrs2.length;i++){
          nrs2[i].style.display='none';
           nrbtns3[i].style.background= '#B0B0B0';
           nrbtns3[i].style.border= '0px solid #ff6700';
           nrbtns3[i].style.marginTop= '3px';
    }
    nrs2[numnr2].style.display='block';
     nrbtns3[numnr2].style.background= '#fff';
     nrbtns3[numnr2].style.border= '2px solid #ff6700';
     nrbtns3[numnr2].style.marginTop= '1px';
  }
  //4
  //点击原点切换内容
   for(let i=0;i<nrs3.length;i++){
       nrbtns4[i].onclick=function(){
         for(let j=0;j<nrs3.length;j++){
          nrs3[j].style.display='none';
           nrbtns4[j].style.background= '#B0B0B0';
           nrbtns4[j].style.border= '0px solid #ff6700';
           nrbtns4[j].style.marginTop= '3px';
         }
         nrs3[i].style.display='block';
          nrbtns4[i].style.background= '#fff';
          nrbtns4[i].style.border= '2px solid #ff6700';
          nrbtns4[i].style.marginTop= '1px';
       }
  }
  //点击箭头切换内容
  let jtL3=$('.jiantouLeft3')[0];
  let jtR3=$('.jiantouRight3')[0];
  jtL3.onclick=function(){
    numnr3--;
      if(numnr3<0){
        numnr3=nrs3.length-1;
      }
    for(i=0;i<nrs3.length;i++){
          nrs3[i].style.display='none';
           nrbtns4[i].style.background= '#B0B0B0';
           nrbtns4[i].style.border= '0px solid #ff6700';
           nrbtns4[i].style.marginTop= '3px';
    }
    nrs3[numnr3].style.display='block';
     nrbtns4[numnr3].style.background= '#fff';
     nrbtns4[numnr3].style.border= '2px solid #ff6700';
     nrbtns4[numnr3].style.marginTop= '1px';
  }
  jtR3.onclick=function(){
    numnr3++;
      if(numnr3>2){
        numnr3=0;
      }
    for(i=0;i<nrs3.length;i++){
          nrs3[i].style.display='none';
           nrbtns4[i].style.background= '#B0B0B0';
           nrbtns4[i].style.border= '0px solid #ff6700';
           nrbtns4[i].style.marginTop= '3px';
    }
    nrs3[numnr3].style.display='block';
     nrbtns4[numnr3].style.background= '#fff';
     nrbtns4[numnr3].style.border= '2px solid #ff6700';
     nrbtns4[numnr3].style.marginTop= '1px';
  }
  //智能
  let znbtn=$('.zhinengt-right')[0];
  let znbtns=$('li',znbtn);
  let znnr=$('.znBottom');
  // let znnes=$('.same',znnr);
  // console.log(znnes);
  for(let i=0;i<znbtns.length;i++){
     znbtns[i].onmouseover=function(){
      for(let j=0;j<znbtns.length;j++){
        znnr[j].style.display='none';
        znbtns[j].classList.remove('hot2');
      }
      znnr[i].style.display='block';
      znbtns[i].classList.add('hot2');
     }
  }
  //搭配
  let dpbtn=$('.zhinengt-right2')[0];
  let dpbtns=$('li',dpbtn);
  let dpnr=$('.dpBottom');
  // console.log(dpnr)
   for(let i=0;i<dpbtns.length;i++){
     dpbtns[i].onmouseover=function(){
      for(let j=0;j<dpbtns.length;j++){
        dpnr[j].style.display='none';
        dpbtns[j].classList.remove('hot3');
      }
      dpnr[i].style.display='block';
      dpbtns[i].classList.add('hot3');
     }
  }
  //配件
  let pjbtn=$('.zhinengt-right4')[0];
  let pjbtns=$('li',pjbtn);
  let pjnr=$('.pjBottom');
  console.log(pjnr)
   for(let i=0;i<pjbtns.length;i++){
     pjbtns[i].onmouseover=function(){
      for(let j=0;j<pjbtns.length;j++){
        pjnr[j].style.display='none';
        pjbtns[j].classList.remove('hot4');
      }
      pjnr[i].style.display='block';
      pjbtns[i].classList.add('hot4');
     }
  }
  //周边
  let zbbtn=$('.zhinengt-right1')[0];
  let zbbtns=$('li',zbbtn);
  let zbnr=$('.zbBottom');
  console.log(zbnr)
   for(let i=0;i<zbbtns.length;i++){
     zbbtns[i].onmouseover=function(){
      for(let j=0;j<zbbtns.length;j++){
        zbnr[j].style.display='none';
        zbbtns[j].classList.remove('hot5');
      }
      zbnr[i].style.display='block';
      zbbtns[i].classList.add('hot5');
     }
  }
}

   
/*
banner部分轮播图
1.手型：cursor:pointer;
2.//当前窗口中[num]的消失，点击对用的图片[i]显示
3.自动轮播：
 */

