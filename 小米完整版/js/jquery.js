/*
* @Author: Lenovo
* @Date:   2017-09-06 18:41:20
* @Last Modified by:   Lenovo
* @Last Modified time: 2017-09-13 16:59:21
*/
$(function(){
	//nav的下拉菜单
	/*for(let i=0;i<navLis.length-2;i++){
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
}*/
$('.navli').each(function(i,element){
	$('.navli')[i].hover(function(){
    	$('.navList').css('display','block','borderTop','1px solid #e0e0e0');
    },function(){
    	$('.navList')[i].css('display','none','borderTop','none');
    })
})
// console.log($('.navli'));
	//搜索下拉框
	$(".tex").click(function(){
		$(".naviRight").css({border:'1px solid #ff6700'});
		$(".navirightLeft").css({borderRight:"1px solid #ff6700"});
		$(".wenziLeft").css({height:0});
		$(".wenziRight").css({height:0});
		$(".ssList").css({height:'330px',borderBottom:'1px solid #ff6700'});
	})
	$(".tex").blur(function(){
		$(".naviRight").css({border:'1px solid #e0e0e0'});
		$(".navirightLeft").css({borderRight:"1px solid #e0e0e0"});
		$(".wenziLeft").css({height:'18px'});
		$(".wenziRight").css({height:'18px'});
		$(".ssList").css({height:'0px',borderBottom:'none'});
	})
	//自动轮播
	let t=setInterval(fn, 3000);
	let num=0;//窗口显示的图片
	function fn(){
		num++;
		if(num==5){
			num=0;
		}
        $('.imgBox img').each(function(index,element){
        	element.style.display='none';
        })
        $('.yuandian>li').each(function(index,element){
        	element.style.background= 'rgba(0, 0, 0, 0.46)';
        })
        $('.imgBox img')[num].style.display='block';
        $('.yuandian>li')[num].style.background='rgba(255, 255, 255, 0.46)';
	}
	 // 点击左右按钮更换图片
	    $('.jiantou2').click(function(){
          fn(); 
	})//右边按钮
        $('.jiantou1').click(function(){
        	num--;  
   	        if(num<0){
   		      num=4;
   	        }
   	        $('.imgBox img').each(function(index,element){
        	element.style.display='none';
           })
           $('.yuandian>li').each(function(index,element){
        	element.style.background= 'rgba(0, 0, 0, 0.46)';
           })
           $('.imgBox img')[num].style.display='block';
           $('.yuandian>li')[num].style.background='rgba(255, 255, 255, 0.46)';	
           })
        //鼠标移入自动轮播停止
        $('.banner').mouseover(function(){
        	clearInterval(t);
        })
        $('.banner').mouseout(function(){
        	t=setInterval(fn, 3000);
        })

        //侧导航
        $('.asideli').each(function(i,element){
           $(this).mouseenter(function(){
           	$('.item')[i].style.display='block';
           })
           $(this).mouseleave(function(){
           	$('.item')[i].style.display='none';
           })
        })
        //点击圆点切换图片
          $('.yuandian>li').each(function(i,element){
            
            $('.yuandian>li')[i].click(function(){
            	$('.yuandian>li').each(function(index,element){
            		element.style.background= 'rgba(0, 0, 0, 0.46)';
            	})
		    	$('.imgBox img').each(function(index,element){
		           element.style.display='none';
		        })
		        $('.imgBox img')[i].style.display='block';
                $('.yuandian>li')[i].style.background='rgba(255, 255, 255, 0.46)';	
           })
           
        })   

        //小米明星单品
       let danpinBottom=$('.danpinBottom');
       let dpBox=$('.dpBox')[0];
       let childNum=dpBox.childElementCount;
       let childW=danpinBottom[0].offsetWidth+parseInt(getComputedStyle(danpinBottom[0],null).marginRight);
       dpBox.style.width=`${childNum*childW}px`;
       let num1=0;
        $('.danpintrLeft').click(function(){
          if(num1==3){
		     $('.danpintrLeft').css('border','1px solid #ffac13')
		    return;
		  }
		  num1++;
		  $('.danpintrRight').css('border','1px solid #e0e0e0')
		  $('.dpBox').css({transform:`translateX(${-num1*1240}px)`})
	 })
        $('.danpintrRight').click(function(){
          if(num1==0){
		      $('.danpintrRight').css('border','1px solid #ffac13')
		    return;
		  }
		  num1--;
		  $('.danpintrLeft').css('border','1px solid #e0e0e0')
		  $('.dpBox').css({transform:`translateX(${-num1*1240}px)`})
	 })

     //单品自动轮播
     let flag1=true;
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
	     $('.dpBox').css({transform:`translateX(${-num1*1240}px)`})

	}

     //鼠标移入自动轮播停止
     $('.danpintRight').mouseenter(function(){
     	clearInterval(t0);
     })
     $('.danpintRight').mouseleave(function(){
     	t0=setInterval(move, 3000);
     })
     
     //家电
     /*$('.jiadiantRight>li').each(function(i,element){
     	$('.jiadiantRight>li')[i].mouseenter(function(){
     		$('.jiadiantRight>li').each(function(j,element){
                $('.jadianbRight').css('display','none');
                $('.jiadiantRight').css('borderBottom','none','color','#424242');
     		})
     		$('.jadianbRight').css('display','block');
            $('.jiadiantRight').css('borderBottom','2px solid #ff6700','color','#ff6700');
     	})
     })*/
     // console.log($('.jiadiantRight>li'))
     
     //为你推荐
       let tuijianBottom=$('.tuijianBottom');
       let tjul=$('.tjul')[0];
       let childNum1=tjul.childElementCount;
       let childW1=tuijianBottom[0].offsetWidth+parseInt(getComputedStyle(tuijianBottom[0],null).marginRight);
       tjul.style.width=`${childNum1*childW1}px`;
       let num2=0;
        $('.tuijiantrLeft').click(function(){
          if(num2==3){
		     $('.tuijiantrLeft').css('border','1px solid #ffac13')
		    return;
		  }
		  num2++;
		  $('.tuijiantrRight').css('border','1px solid #e0e0e0')
		  $('.tjul').css({transform:`translateX(${-num2*1240}px)`})
	 })
        $('.tuijiantrRight').click(function(){
          if(num2==0){
		      $('.tuijiantrRight').css('border','1px solid #ffac13')
		    return;
		  }
		  num2--;
		  $('.tuijiantrLeft').css('border','1px solid #e0e0e0')
		  $('.tjul').css({transform:`translateX(${-num2*1240}px)`})
	 })
     //内容
        
})

