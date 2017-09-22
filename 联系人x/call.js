window.onload = function() {
	//获取数据
	let lxr = [{
			'name': '张三丰',
			'phone': '1234567',
			'pinyin': 'zhangsan'
		}, {
			'name': '李四',
			'phone': '1234568',
			'pinyin': 'lisi'
		}, {
			'name': '赵五',
			'phone': '1234569',
			'pinyin': 'zhaowu'
		}, {
			'name': '陆六',
			'phone': '1234561',
			'pinyin': 'luliu'
		}, {
			'name': '王七',
			'phone': '1234562',
			'pinyin': 'wangqi'
		}, {
			'name': '陈八',
			'phone': '1234563',
			'pinyin': 'chenba'
		}, {
			'name': '张九',
			'phone': '1234564',
			'pinyin': 'zhangjiu'
		}, {
			'name': '张四',
			'phone': '1234567',
			'pinyin': 'zhangsi'
		}, {
			'name': '郭五',
			'phone': '1234568',
			'pinyin': 'guowu'
		}, {
			'name': '赵一',
			'phone': '1234569',
			'pinyin': 'zhaoyi'
		}, {
			'name': '陆四',
			'phone': '1234561',
			'pinyin': 'lusi'
		}, {
			'name': '王三',
			'phone': '1234562',
			'pinyin': 'wangsan'
		}, {
			'name': '刘九',
			'phone': '1234563',
			'pinyin': 'liujiu'
		}, {
			'name': '陈七',
			'phone': '1234564',
			'pinyin': 'chenqi'
		}]
	//获取数据   有-》初始化  
	let dl = document.querySelector('dl');
	let slide = document.querySelector('.slide');
	let data = getData();
	function getData() {
		//获取lxr在本地存储的值，并进行判断，如果有，则保存下来，如果没有，则返回false
		let data = localStorage.getItem('lxr') ? JSON.parse(localStorage.lxr) : false;
		if (!data) {
			//将lxr转换为JSON字符串，并且保存到lxr中
			localStorage.setItem('lxr', JSON.stringify(lxr));
			data = JSON.parse(localStorage.lxr);
		}
		return data;
	}
	//搜索
	let inputs=document.querySelector('input');
    inputs.onkeyup=function(){
    	let val=this.value.trim();
    	let newData=data.filter(element=>{
    		return element.name.includes(val)||element.phone.includes(val)||element.pinyin.includes(val)
    		
    	});
    	render(newData);
    }
    // let dls=document.querySelector('dl');
    // let slide=document.querySelector('.slide');


	render(data);
	function render(data) {
		let dataObj = {};
		data.forEach(element => {
			let first = element.pinyin.charAt(0).toUpperCase();
			if (!dataObj[first]) {
				dataObj[first]= [];
			}
			dataObj[first].push(element);
		})
		let keys = Object.keys(dataObj).sort();
		slide.innerHTML='';//筛选时清空原有的
    	dl.innerHTML='';
		keys.forEach(element => {
			dl.innerHTML += `
				<dt>${element}</dt>
			`;
			dataObj[element].forEach(value => {
				dl.innerHTML += `
					<dd><a href="tel:${value.phone}">${value.name}</a></dd>
				`;
			})
			//右侧滑条
    		slide.innerHTML+=`<li>${element}</li>`
		})


    	let slideHeight=slide.offsetHeight;
        slide.style.marginTop=`-${slideHeight/2}px`; 
        //固定
        let fix=document.querySelector('.fix');
        let arr=[];
        let dt=document.querySelectorAll('dt');
        dt.forEach(value=>{
        	 arr.push(value.offsetTop)
        })
        let header=document.querySelector('header');
        let h=header.offsetHeight+fix.offsetHeight;
        // fix.innerText=dt[0].innerText;
        window.onscroll=function(){
        	let st=document.documentElement.scrollTop;
        	arr.forEach(function(element,index){
        		if(element+dt[index].offsetHeight<st+h){
        			fix.innerText=`${dt[index].innerText}`;
        		}
        	})
        } 
	}

	//slide
	
	//	localStorage.lxr=JSON.stringify(lxr);
	//	let data=JSON.parse(localStorage.lxr);
	//	render(data)
	//	function render(data){
	//		//data 处理 按照拼音首字母
	//		//dataObj={'A':[{},{},{}],'Z':[{},{},{}]}
	//		let dataObj={};
	//		for(let i=0;i<data.length;i++){
	//			let first=data[i].pinyin.charAt(0).toUpperCase();
	//			if(!dataObj[first]){
	//				dataObjfirst=[];
	//			}
	//			dataObj[first].push(data[i]);
	//		}
	//		let keys=Object.keys(dataObj).sort();
	//		keys.forEach(element=>{
	//			dl.innerHTML+=`
	//				<dt><a href="tel:${value.phone}">${value.name}></a></dt>
	//			`;
	//		})
	//	}
}