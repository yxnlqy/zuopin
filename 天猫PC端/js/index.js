/*
* @Author: Lenovo
* @Date:   2017-08-13 15:57:25
* @Last Modified by:   Lenovo
* @Last Modified time: 2017-09-20 23:12:12
*/
window.onload=function(){
	//我的淘宝
	let li1=document.getElementsByClassName('li1')[0];
	let wdtbList=document.getElementsByClassName('wdtbList')[0];
	//收藏夹
	let li4=document.getElementsByClassName('li4')[0];
	let scjList=document.getElementsByClassName('scjList')[0];
    //手机版
    let sjb=document.querySelector('.sjb1');
    let xsj=document.querySelector('.xsj');
    let ewm=document.querySelector('.sjb1List');
    //商家支持
    let sjzc=document.querySelector('.sjb4');
    let sjzcli=document.querySelector('.sjzcli');
    //网站导航
    let sjb5=document.querySelector('.sjb5');
    let navmaue=document.querySelector('.navmaue');
    //轮播图
    let imgBox=$('.imgBox')[0];
    let imgs=$('img',imgBox);
    let btn=$('.dian')[0];
    let btns=$('li',btn);
    let banner=$('.main-buttom')[0];
    let bjColor=$('.bjColor')[0];
    let bjlis=$('.bjli',bjColor);
   
    let num=0;
    // console.log(btns);
    // 侧导航列表
    let items=$('.item');
    let aside=$('.aside')[0];
    let alis=$('.asideli',aside);
     // console.log(alis);
    //固定搜索与导航
    let ch=window.innerHeight;
    // console.log(ch)
    let floor=document.querySelectorAll('.floor');
    let aSide=document.querySelector('.aSide');
    let lis=aSide.querySelectorAll('.aSideli1');
    let seachBox=document.querySelector('.seachBox');
    let flag1=true;
    // console.log(seachBox);
    let arr=[];
    let nthF=0;
	//我的淘宝
    li1.onmouseover=function(){
    	wdtbList.style.height='55px';
    	wdtbList.style.borderBottom='1px solid #eee';
    }
    li1.onmouseout=function(){
    	wdtbList.style.height='0px';
    	wdtbList.style.borderBottom='0px solid #eee';
    }
	//收藏夹
    li4.onmouseover=function(){
    	scjList.style.height='55px';
    	scjList.style.borderBottom='1px solid #eee';
    }
    li4.onmouseout=function(){
    	scjList.style.height='0px';
    	scjList.style.borderBottom='0px solid #eee';
    }
    //手机版
    sjb.onmouseover=function(){
        xsj.style.display='block';
        ewm.style.display='block';
    }
     sjb.onmouseout=function(){
        xsj.style.display='none';
        ewm.style.display='none';
    }
    //商家支持
    sjzc.onmouseover=function(){
        sjzcli.style.display='block';
    }
    sjzc.onmouseout=function(){
        sjzcli.style.display='none';
    }
    //网站导航
    sjb5.onmouseenter=function(){
        navmaue.style.display='block';
    }
    sjb5.onmouseleave=function(){
        navmaue.style.display='none';
    }
    //轮播图
    
    //自动轮播
   let t=setInterval(fn,3000);
   function fn(){
    num++;  
    if(num==imgs.length){
         num=0;
    }   
    for(let i=0;i<imgs.length;i++){
        imgs[i].style.display='none';
        bjlis[i].style.display='none';
        // btns[i].classList.remove('hot');
    btns[i].style.background= 'rgba(0, 0, 0, 0.46)';
        
    }
    imgs[num].style.display='block';
     bjlis[num].style.display='block';
    // btns[num].classList.add('hot'); 
    btns[num].style.background= 'rgba(255, 255, 255, 0.46)';

   }
   //点击变图
    for(let i=0;i<imgs.length;i++){
        btns[i].onclick=function(){
         for(let j=0;j<imgs.length;j++){
            imgs[j].style.display='none';
            bjlis[j].style.display='none';
            btns[j].style.background= 'rgba(0, 0, 0, 0.46)';
         }
         imgs[i].style.display='block';
         bjlis[i].style.display='block';
         btns[i].style.background= 'rgba(255, 255, 255, 0.46)';
        }
    }
   //移入自动轮播停止
   banner.onmouseover=function(){
    clearInterval(t);
   }
   banner.onmouseout=function(){
    t=setInterval(fn,3000);
   }
   // 侧导航列表
   for(var i=0;i<alis.length;i++){
        alis[i].index=i;//给对象添加属性，将i绑定到对象上；
        alis[i].onmouseenter=function(){
            // let item=this.getElementsByClassName('item')[0];
            items[this.index].style.display='block';
        }
        alis[i].onmouseleave=function(){
            // let item=this.getElementsByClassName('item')[0];
            items[this.index].style.display='none';
        }
    }
    //固定搜索与导航
    //let ch=window.innerHeight;
    /*let floor=document.querySelectorAll('.floor');
    let aSide=document.querySelector('.aSide');
    let lis=aSide.querySelectorAll('li');
    let seachBox=document.querySelector('.seachBox');
    let flag1=true;
    // console.log(seachBox);
    let arr=[];
    let nthF=0;*/
    floor.forEach((element)=>{
    arr.push(element.offsetTop);
    })
    lis.forEach(function(element,index){
        element.onclick=function(){
            lis[nthF].classList.remove('active');
            lis[index].classList.add('active');
            if(index==0){
              lis[nthF].style.background='#626262';
              lis[index].style.background='#EA5F8D';
            }else if(index==1){
              lis[index].style.background='#0AA6E8';
              lis[nthF].style.background='#626262';
            }else if(index==2){
              lis[index].style.background='#64C333';
              lis[nthF].style.background='#626262';      
            }else if(index==3){
              lis[index].style.background='#F15453';
              lis[nthF].style.background='#626262';
            }else if(index==4){
              lis[index].style.background='#19C8A9';
              lis[nthF].style.background='#626262';      
           }
            else if(index==5){
              lis[index].style.background='#F7A945';
              lis[nthF].style.background='#626262';
           }else if(index==6){
              lis[index].style.background='#FF0036';
              lis[nthF].style.background='#626262';      
           }
            nthF=index;
            animate(document.body,{scrollTop:arr[index]-48});
            console.log(document.body);
        }
    })
   window.onscroll=function(){
    let st=document.body.scrollTop;
    // console.log(st)
    arr.forEach((element,index)=>{
        if(ch+st>=element+300){
            lis[nthF].classList.remove('hot1');
            lis[index].classList.add('hot1');
            if(index==0){
              lis[nthF].style.background='#626262';
              lis[index].style.background='#EA5F8D';
            }else if(index==1){
              lis[index].style.background='#0AA6E8';
              lis[nthF].style.background='#626262';
            }else if(index==2){
              lis[index].style.background='#64C333';
              lis[nthF].style.background='#626262';      
            }else if(index==3){
              lis[index].style.background='#F15453';
              lis[nthF].style.background='#626262';
            }else if(index==4){
              lis[index].style.background='#19C8A9';
              lis[nthF].style.background='#626262';      
           }
            else if(index==5){
              lis[index].style.background='#F7A945';
              lis[nthF].style.background='#626262';
           }else if(index==6){
              lis[index].style.background='#FF0036';
              lis[nthF].style.background='#626262';      
           }
            nthF=index;
        }
    })
//搜索框
  if(st>500){
    if(flag1){
        flag1=false;
        animate(seachBox,{top:0});
        animate(aSide,{left:1});
    }
  }else{
    if(!flag1){
        flag1=true;
        animate(seachBox,{top:-50});
        animate(aSide,{left:-35});
    }
    }
  }
}