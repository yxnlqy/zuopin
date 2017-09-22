/*
* @Author: Lenovo
* @Date:   2017-09-03 23:16:17
* @Last Modified by:   Lenovo
* @Last Modified time: 2017-09-04 00:38:27
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