/*
* @Author: Lenovo
* @Date:   2017-09-04 08:45:29
* @Last Modified by:   Lenovo
* @Last Modified time: 2017-09-18 18:24:40
*/

   window.onload=function(){
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

   //列表页
   let lis=document.querySelectorAll('.lbul>li');
   let nrlis=document.querySelectorAll('.listR>.lrul');
   for(i=0;i<nrlis.length;i++){
    lis[i].onmouseenter=function(){
       for(j=0;j<nrlis.length;j++){
        nrlis[j].display='none';
       }
       nrlis[i].display='block';
    }
   }
}