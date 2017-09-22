/*
* @Author: Lenovo
* @Date:   2017-08-23 10:00:32
* @Last Modified by:   Lenovo
* @Last Modified time: 2017-08-24 00:26:26
*/
/*
属性（描述）
  哪些字符
  个数
  速度 
  得分
  关卡
  生命
  减分
方法（功能）
  开始
  消除
  产生字符
     个数length、哪些charSheet
  下一关
  重新开始
  */
 
function Game(){
   this.charSheet=[
   ['Q','img/Q.png'],
   ['W','img/W.png'],
   ['E','img/E.png'],
   ['R','img/R.png'],
   ['T','img/T.png'],
   ['Y','img/Y.png'],
   ['U','img/U.png'],
   ['I','img/I.png'],
   ['O','img/O.png'],
   ['P','img/P.png'],
   ['A','img/A.png'],
   ['S','img/S.png'],
   ['D','img/D.png'],
   ['F','img/F.png'],
   ['G','img/G.png'],
   ['H','img/H.png'],
   ['J','img/J.png'],
   ['K','img/K.png'],
   ['L','img/L.png'],
   ['Z','img/Z.png'],
   ['X','img/X.png'],
   ['C','img/C.png'],
   ['V','img/V.png'],
   ['B','img/B.png'],
   ['N','img/N.png'],
   ['M','img/M.png']];
   this.length=5;
   this.speed=10;
   this.elements=[];
   this.position=[];
   this.score=0;//得分
   this.vital=100;//生命值
   this.scoreObj=document.querySelector('div.score>span');
   this.vitalObj=document.querySelector('div.vital>span');
   this.gq=10;
   console.log(this.vitalObj);
   }
 Game.prototype={
 	start:function(){
 		this.getChars(this.length);
 		this.drop();
 		this.key();
 		// this.next();
 	},
 	getChars:function(length){
 		for(let i=0;i<length;i++){
          this.getChar();
 		}
 	},
 	checkRepeat:function(num){
 		return this.elements.some(value=>value.innerText==this.charSheet[num][0]);
 	},
 	checkLefts:function(lefts){
 	  let that=this;
      return that.position.some(function(value){
       	return Math.abs(value-lefts)<60; 
       })
 	},
 	getChar:function(){
       let num;
       let divs=document.createElement('div');//创建div存放字母
       let lefts=(innerWidth-200)*Math.random()+100;
       let tops=Math.random()*100;
       do{
          num=Math.floor(Math.random()*this.charSheet.length);//获取随机字母下标
       }while(this.checkRepeat(num))
       do{
          lefts=(innerWidth-400)*Math.random()+200;
       }while(this.checkLefts(lefts))
       divs.classList.add('char');//给div添加样式
       divs.style.cssText=`
       left:${lefts}px;
       top:${tops}px;
       background-image:url(${this.charSheet[num][1]})
       `//字母的随机位置  
       //去重复
       
       
       divs.innerText=this.charSheet[num][0];
       document.body.appendChild(divs);
       this.elements.push(divs);
       this.position.push(lefts);
 	},
   //下落
   drop:function(){
 	let that=this;
 	this.t=setInterval(function(){
 	 for(i=0;i<that.elements.length;i++){
       let tops=that.elements[i].offsetTop;
       that.elements[i].style.top=`${tops+that.speed}px`;
       if(tops>=450){
       	that.vital-=10;
        that.vitalObj.innerText=that.vital;
        if(that.vital==0){
    		clearInterval(that.t);
    		alert('很遗憾，闯关失败！');
    		window.close();
    		
    	} 
    	document.body.removeChild(that.elements[i]);//去除桌面的元素
    	that.elements.splice(i, 1);//删除元素所占空间
    	that.position.splice(i, 1);//删除元素所占空间
    	// that.getChar();
       }     
    }
    if(that.elements.length<that.length){
   	that.getChar();
    }
    }, 200)
  },
  key:function(){
    let that=this;
    document.onkeydown=function(e){
    	for(i=0;i<that.elements.length;i++){
    	   let str=String.fromCharCode(e.keyCode);
           if(str==that.elements[i].innerText){
           	that.score++;
           	that.scoreObj.innerText=that.score;
           	document.body.removeChild(that.elements[i]);//去除桌面的元素
    	    that.elements.splice(i,1);//删除元素所占空间
    	    that.position.splice(i,1);//删除元素所占空间
    	    if(that.score==that.gq){
    	    	let c=confirm('是否继续闯关');
    	    	if(c==true){
    	    		that.next();
    	    	}else{
    	    		window.close();
    	    	}
    	    	
    	    }
           }
    	}
    }
  },
  next:function(){
  	clearInterval(this.t);
  	for(i=0;i<this.elements.length;i++){
      document.body.removeChild(this.elements[i]);
  	}
  	this.elements=[];
  	this.position=[];
  	this.length++;
  	this.gq+=10;
  	this.start();
  }
 }
 