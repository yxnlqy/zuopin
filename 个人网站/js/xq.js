/*
* @Author: Lenovo
* @Date:   2017-09-13 16:19:25
* @Last Modified by:   Lenovo
* @Last Modified time: 2017-09-18 00:27:21
*/
//固定导航
   window.onload=function(){
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