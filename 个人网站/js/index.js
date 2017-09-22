/*
* @Author: Lenovo
* @Date:   2017-08-27 20:09:25
* @Last Modified by:   Lenovo
* @Last Modified time: 2017-09-04 08:42:51
*/
window.onload=function(){
	  //轮播图
    let banner=$('.banner')[0];
	  let imgBox=$('.imgBox')[0];
    let imgs=$('img',imgBox);
    let btn=$('.btn')[0];
    let btns=$('li',btn);
    let btnLeft=$('.anniuLeft')[0];
    let btnRight=$('.anniuRight')[0];
    let num=0;
    //点击变图
    for(let i=0;i<imgs.length;i++){
        btns[i].onclick=function(){
         for(let j=0;j<imgs.length;j++){
            imgs[j].style.display='none';
            btns[j].style.background= 'rgba(0, 0, 0, 0.46)';
         }
         imgs[i].style.display='block';
         btns[i].style.background= 'rgba(254, 255, 255, 0.46)';
        }
    }
    //自动轮播
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
   //移入自动轮播停止
   banner.onmouseover=function(){
    clearInterval(t);
   }
   banner.onmouseout=function(){
    t=setInterval(fn,3000);
   }
   //点击左右按钮切换图片
   btnLeft.onclick=fn;
   btnRight.onclick=function(){
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
   }
   //固定导航
   let gdNav=document.querySelector('.gdNav');
   let flag=true;
   window.onscroll=function(){
     let st=document.body.scrollTop;
     if(st>130){
      if(flag){
        flag=false;
        animate(gdNav,{top:0});
      }
     }else{
        if(!flag){
        flag=true;
        animate(gdNav,{top:-90});
       }
      } 
   }
}