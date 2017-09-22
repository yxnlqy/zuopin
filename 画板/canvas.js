
	function draw(canvas,mask){
	   this.canvas = canvas;
//	   console.log(this.canvas)
	   this.mask = mask;
//	   console.log(this.mask)
	   this.cvs =this.canvas.getContext('2d');
//	   console.log(this.cvs)
	   this.ow = this.canvas.width;
	   this.oh = this.canvas.height;
//	   console.log(this.ow,this.oh)
       this.lineWidth = 1;
       this.style = 'stroke';
       this.fillStyle = '#000'
       this.strokeStyle = '#000';
       this.lineCap = 'butt';
       this.data = [];
       this.jiao = 5; /*多角型*/
       this.temp = null;
	}
	
	draw.prototype = {
	  /*直线*/
	  line:function(sw,sh,ew,eh){
	  	     this.cvs.beginPath();
	   	  	 this.cvs.moveTo(sw,sh);
	   	  	 this.cvs.lineTo(ew,eh);
//	   	  	 this.cvs.closePath()
	   	  	 this.cvs.strokeStyle=this.strokeStyle;
             this.cvs[this.style]();
	},
	  /*样式*/
	 init:function(){
	 	this.cvs.lineWidth = this.lineWidth;
	 	this.cvs.fillStyle = this.fillStyle;
	 	this.cvs.strokeStyle = this.strokeStyle;
	 	this.cvs.lineCap = this.lineCap;
	 },
	  /*虚线*/
	 dashed:function(sw,sh,ew,eh){
	  	this.cvs.setLineDash([4,6]);
   	    this.cvs.beginPath();
  	    this.cvs.moveTo(sw,sh);
  	    this.cvs.lineTo(ew,eh);
  	    this.cvs.stroke();
        this.cvs[this.style]();
  	    
	},
	/*矩形*/ 
	squery:function(sw,sh,ew,eh){
        this.cvs.beginPath();
	   	this.cvs.rect(sw,sh,ew-sw,eh-sh);
	   	this.cvs.strokeStyle=this.strokeStyle;
	   	this.cvs.fillStyle=this.fillStyle;
        this.cvs[this.style]();
   },
	
	/*圆*/
	
	circle:function(sw,sh,ew,eh){
   	  	  this.cvs.setLineDash([0,0]);
   	  	  this.cvs.beginPath();
   	  	  this.cvs.arc(sw,sh,Math.sqrt(Math.pow(sw-ew,2)+Math.pow(sh-eh,2)),0,2*Math.PI,false);
		  this.cvs.strokeStyle=this.strokeStyle;
		  this.cvs.fillStyle=this.fillStyle;
          this.cvs[this.style]();
   },
	
	/*五边形*/
	five:function(sw,sh,ew,eh){		
	   	  let r =Math.sqrt(Math.pow(sw-ew,2)+Math.pow(sh-eh,2));
	      this.cvs.beginPath();
	      this.cvs.moveTo(r+sw,sh);
	        for(let i=0;i<=this.jiao;i++){
		       let ang = 360/this.jiao/180*Math.PI;
	  	       this.cvs.lineTo(sw+r*Math.cos(ang*i),sh+r*Math.sin(ang*i));
	      }
              this.cvs.strokeStyle=this.strokeStyle;
			  this.cvs.fillStyle=this.fillStyle;
              this.cvs[this.style]();
            
	},
		
	/*铅笔*/
	pencil:function(){
	  	let that = this;
	    this.mask.onmousedown = function(e){
	      that.init();
	   	  let sw =e.offsetX;
	   	  let sh = e.offsetY;
	   	  that.cvs.beginPath();
	   	  that.cvs.moveTo(sw,sh);
//	   	  console.log(sw,sh)
	   	  that.mask.onmousemove = function(e){
             if(that.data.length>0){
	   	  		that.cvs.putImageData(that.data[that.data.length-1],0,0)
	   	  	}
	   	  	 let ew = e.offsetX , eh = e.offsetY;
	   	  	 that.cvs.setLineDash([0,0]);
	   	  	 that.cvs.lineTo(ew,eh);
             that.cvs.strokeStyle=that.strokeStyle;
             that.cvs[that.style]();	   	  	 
	   	  }
	   }
	    this.mask.onmouseup = function(){
             let dates = that.cvs.getImageData(0,0,that.ow,that.oh);
	    	 that.data.push(dates)
	    	 that.mask.onmousemove = null;
	    }
	},
	
	/*擦除*/
	clear:function(era){
		let that = this;
	  	this.mask.onmousedown = function(e){
	  		that.init();
	  		e.preventDefault()
	  		that.mask.onmousemove = function(e){
	  			era.style.display = 'block';
	  			let w = era.offsetWidth;
                let h = era.offsetHeight;
                let lefts =e.offsetX - w/2, tops = e.offsetY - w/2;
	  			if(lefts<0){
	  				lefts = 0;
	  			}
	  			if(lefts>that.ow-w){
	  				lefts = that.ow-w;
	  			}
	  			if(tops<0){
	  				tops = 0;
	  			}
	  			if(tops>that.oh-h){
	  				tops = that.oh-h;
	  			}
	  			era.style.left = `${lefts}px`;
	  			era.style.top = `${tops}px`;
	  			that.cvs.clearRect(lefts,tops,w,h)
	  		}
	  	}
	  	 this.mask.onmouseup = function(){
	  		era.style.display = 'none';
	  		let datas = that.cvs.getImageData(0,0,that.ow,that.oh)
	  		that.data.push(datas)
	  		that.mask.onmousemove = null;
	  	}
	},
	
	/*文字*/
	text:function(){
		let that = this;
	  this.mask.onmousedown = function(e){
	  	 let ow = e.offsetX,oh = e.offsetY;
	  	 let divs = document.createElement('div');
	  	 divs.style.cssText = `
	  	  width:150px;height:30px;border:1px solid #0085d0;
	  	  position: absolute;left:0;top:0;
	  	 `;
	  	 divs.contentEditable = 'true';
	  	 divs.style.left = `${ow}px`;
	  	 divs.style.top = `${oh}px`;
	  	 that.mask.appendChild(divs);
         that.mask.onmousedown = null;	 
	  	 let pleft,ptop;
         divs.onmousedown = function(e){
         	let ox = e.clientX, oy = e.clientY;
         	that.mask.onmousedown = null;
         	let lefts = divs.offsetLeft;
         	let tops = divs.offsetTop;
         	that.mask.onmousemove = function(e){	
         		let ex = e.clientX,ey = e.clientY;
         		 pleft = lefts+ex-ox;
         		 ptop = tops+ey-oy;
         		divs.style.left = `${pleft}px`;
         		divs.style.top = `${ptop}px`;       		
         	}
         	    divs.onmouseup=function(){
         			that.mask.onmousemove=null; 
         			divs.onmouseup = null;
         		}
         	
         }
  
         divs.onblur = function(){
         	that.mask.onmousedown = null;         	
         	let value = divs.innerText;
         	that.cvs.font = '30px sans-serif';
            that.cvs.fillText(value,pleft,ptop)
            that.mask.removeChild(divs)
         }
	  }
	  
	},
	/*反向*/
	reverse:function(){
		let imgdata = this.cvs.getImageData(0,0,this.ow,this.oh);
		let data = imgdata.data;
		for(let i=0;i<data.length;i+=4){
			data[i] = 255 - data[i];
//			console.log(data[i])
			data[i+1] = 255 - data[i+1];
			data[i+2] = 255 - data[i+2]
		}
		this.cvs.putImageData(imgdata,0,0)
	},
	/*五角星*/
	fivestar:function(sw,sh,ew,eh){
	       let ang = 360/(this.jiao*2);
	       let rad=ang/180*Math.PI;
	       let r1 = Math.sqrt(Math.pow(sw-ew,2)+Math.pow(sh-eh,2));
	       let r2 = r1/2;  
	       this.cvs.beginPath();
		   this.cvs.moveTo(r1+sw,sh);
		   for(let i=1;i<=this.jiao*2;i++){
			   if(i%2==0){
			   	  this.cvs.lineTo(sw+r1*Math.cos(rad*i),sh+r1*Math.sin(rad*i));
			   }
			   if(i%2==1){
			   	  this.cvs.lineTo(sw+r2*Math.cos(rad*i),sh+r2*Math.sin(rad*i));
			   }
			}
	   	  	  this.cvs.strokeStyle=this.strokeStyle;
			  this.cvs.fillStyle=this.fillStyle;
              this.cvs[this.style](); 
	},
	/*撤销*/
/*	ctrlz:function(){
       if(this.data.length>0){
       	let img = that.data.pop();
       	this.cvs.putImageData(that.data,0,0) 
       }
	},*/
	drawp:function(type){
		let that = this;
	  this.mask.onmousedown = function(e){
	  	  that.init();
	  	  let sw = e.offsetX , sh = e.offsetY ;
	  	  that.mask.onmousemove = function(e){
	  	  	let ew = e.offsetX , eh = e.offsetY;
	   	  	that.cvs.clearRect(0,0,that.ow,that.oh);
	   	  	if(that.data.length>0){
	   	  		that.cvs.putImageData(that.data[that.data.length-1],0,0)
	   	  	}
	   	  	that.cvs.setLineDash([0,0]);
	  	  	that[type](sw,sh,ew,eh);  
	  	  }
	  	  that.mask.onmouseup = function(){
	  	  	let datas = that.cvs.getImageData(0,0,that.ow,that.oh);
	  	  	that.data.push(datas);
	  	  	that.mask.onmousemove = null;
	  	  }
	  }
	   
       },
	
	/*裁切*/
	 clip:function(cut){
	 	let that = this;
	 	this.mask.onmousedown = function(e){
	 		let w,h,minX,minY;
	 		let ow = e.offsetX,oh = e.offsetY;
	 		that.mask.onmousemove = function(e){
	 			let ew = e.offsetX,eh = e.offsetY;
	 			w = Math.abs(ow - ew);
	 			h = Math.abs(oh - eh);
	 			minX = ow>ew?ew:ow;
	 			minY = oh>eh?eh:oh;
//	 			console.log(minX,minY)
	 			cut.style.cssText = `
	 			  display:block;
	 			  left:${minX}px;top:${minY}px;
	 			  width:${w}px;height:${h}px;
	 			  border:1px dashed #333;
	 			`
	 		}
	 		that.mask.onmouseup = function(){
//	 			console.log(that)
	 			that.temp = that.cvs.getImageData(minX,minY,w,h);
	 			that.cvs.clearRect(minX,minY,w,h);
	 			let datas = that.cvs.getImageData(0,0,that.ow,that.oh);
	  	  	    that.data.push(datas);
	 			that.cvs.putImageData(that.temp,minX,minY)
	 			that.mask.onmousemove=null;
	 			that.mask.onmouseup = null;
	 			that.drag(minX,minY,w,h,cut);
	 		}
	 	}
	 }, 
	drag:function(minX,minY,w,h,cut){
		 let that = this;
		 this.mask.onmousemove = function(e){
		 	let ow = e.offsetX,oh = e.offsetY;
		 	if(ow>minX && ow< minX+w && oh>minY && oh<minY+h){
		 		that.mask.style.cursor = 'move';
		 	}else{
		 		that.mask.style.cursor = 'default';
		 	}

		 }
		 
		 let lefts,tops;
		 that.mask.onmousedown = function(e){
		 	let ow = e.offsetX,oh = e.offsetY;
//		 	let left = this.offsetLeft;
//		 	let top = this.offsetTop;
		 	that.mask.onmousemove = function(e){
		 		let ew = e.offsetX,eh = e.offsetY;
		 		lefts = minX + (ew-ow);
		 		tops = minY+ (eh-oh);
		 		cut.style.left = lefts+'px';
		 		cut.style.top = tops+'px';
		 		that.cvs.clearRect(0,0,that.ow,that.oh);
		 		if(that.data.length>0){
	   	  		that.cvs.putImageData(that.data[that.data.length-1],0,0)
	   	  	    }
		 		that.cvs.putImageData(that.temp,lefts,tops)
		 	}
		 	that.mask.onmouseup = function(){
		 		that.temp=null;
		 		cut.style.display='none';
		 		let datas = that.cvs.getImageData(0,0,that.ow,that.oh);
	  	  	    that.data.push(datas);
	  	  	    
		 		that.mask.onmousemove = null;
		 		that.mask.onmouseup = null;
		 		that.mask.onmousedown=null;
		 		that.mask.style.cursor = 'default';
		 	}
		 }
	}
	 
	
	}

	
	
