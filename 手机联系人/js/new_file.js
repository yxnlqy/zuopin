let datao = [{
		"name": "赵四",
		"phone": "17835395882",
		"pinyin": "zhaosi"
	},
	{
		"name": "赵又廷",
		"phone": "17835395883",
		"pinyin": "zhaoyouting"
	},
	{
		"name": "陆飞",
		"phone": "17835395283",
		"pinyin": "lufei"
	},
	{
		"name": "杨晓娜",
		"phone": "17835395867",
		"pinyin": "yangxiaona"
	},
	{
		"name": "王昭君",
		"phone": "17835395878",
		"pinyin": "wangzhaojun"
	},
	{
		"name": "班小松",
		"phone": "17835395956",
		"pinyin": "banxiaosong"
	},
	{
		"name": "蔡明",
		"phone": "17835395490",
		"pinyin": "caiming"
	},
	{
		"name": "程一一",
		"phone": "17835395623",
		"pinyin": "chengyiyi"
	},
	{
		"name": "陈红建",
		"phone": "13033431115",
		"pinyin": "chenghongjian"
	},
	{
		"name": "巨小飞",
		"phone": "17835395432",
		"pinyin": "juxiaofei"
	},
	{
		"name": "董一一",
		"phone": "17835395643",
		"pinyin": "dongyiyi"
	},
	{
		"name": "冯德",
		"phone": "17835395743",
		"pinyin": "fengde"
	},
	{
		"name": "方一一",
		"phone": "15639987372",
		"pinyin": "fangyiyi"
	},
	{
		"name": "高小倩",
		"phone": "17835395456",
		"pinyin": "gaoxiaoqian"
	},
	{
		"name": "郭邵琦",
		"phone": "17835396790",
		"pinyin": "guoshaoqi"
	},
	{
		"name": "康飞羽",
		"phone": "13033431100",
		"pinyin": "kangfeiyu"
	},
	{
		"name": "韩菲",
		"phone": "13033431115",
		"pinyin": "hanfei"
	},
	{
		"name": "金宇澄",
		"phone": "17835396720",
		"pinyin": "jiyucheng"
	},
	{
		"name": "毛阿敏",
		"phone": "17835391934",
		"pinyin": "maoamin"
	},
	{
		"name": "宁语",
		"phone": "17835396734",
		"pinyin": "ningyu"
	},
	{
		"name": "柯震东",
		"phone": "17835674893",
		"pinyin": "kezhendong"
	},
	{
		"name": "包玉琦",
		"phone": "13033431100",
		"pinyin": "baoyuqi"
	},
	{
		"name": "欧阳语",
		"phone": "13033431115",
		"pinyin": "ouyangyu"
	}
]
let add={
		"name": "陈飞",
		"phone": "17835396745",
		"pinyin": "chenfei"
	}
let odd={
		"name": "宋茜",
		"phone": "17835390909",
		"pinyin": "songqian"
}



let dls = document.querySelector('dl')
let ul = document.querySelector('ul')
localStorage.data = JSON.stringify(datao)
let data = JSON.parse(localStorage.data)
/////////////////////////////////////////添加函数
function plus(obj){
	localStorage.data = JSON.stringify(obj)
	let data2= JSON.parse(localStorage.data)
	data.push(data2)
}
plus(add)
plus(odd)
////////////////////////////////////////添加函数结束
let dataL = {}
let tips = document.querySelector('.tips')
let header = document.querySelector('header')
/////////////////////////////////////////开始
render(data, dataL)

function render(data, dataL) {
	for(let i = 0; i < data.length; i++) {
		let first = data[i].pinyin.charAt(0).toUpperCase()
		if(!dataL[first]) {
			dataL[first] = []
		}
		dataL[first].push(data[i])

	}

}
////////////////////////////////////////结束
let keys = Object.keys(dataL).sort()

keys.forEach(function(element) {
	ul.innerHTML += `
	<li>${element}</li>
	`
	let ult = ul.offsetHeight
	ul.style.marginTop = `-${ult/2}px`
	dls.innerHTML += `
	<dt>${element}</dt>
	`
	dataL[element].forEach(function(value) {
		dls.innerHTML += `
		<dd><a href="tle:${value.phone}" style="display:block;width:100%;height:100%">${value.name}</a></dd>
		`

	})
})
let dhs = []
let dts = document.querySelectorAll('dt')
dts.forEach(function(element) {
	dhs.push(element.offsetTop)
	////////////////////////////////////滚轮事件	
	
})
window.onscroll = function(){
	tips.style.opacity='1'
		let st = document.body.scrollTop
		for(let i = 0; i < dhs.length; i++) {
			if(st + header.offsetHeight + tips.offsetHeight > dhs[i]) {
				tips.innerText = dts[i].innerText
			}
		}

}
/////////////////////////////////////////////滚轮结束
let inputs = document.querySelector('input')
////////////////////////搜索事件
inputs.onkeyup = function() {
	let values=this.value.trim()
	let newarr = data.filter(function(value) {
		return value.name.includes(values)||value.pinyin.includes(values)||value.phone.includes(values)
	})
	ul.innerHTML = ''
	dls.innerHTML = ''
	localStorage.data2 = JSON.stringify(newarr)
	let data2 = JSON.parse(localStorage.data2)
	let dataL2 = {}
	render(newarr, dataL2)
	let keys2 = Object.keys(dataL2).sort()
	keys2.forEach(function(element) {
		ul.innerHTML += `
	<li>${element}</li>
	`
		dls.innerHTML += `
	<dt>${element}</dt>
	`
		dataL2[element].forEach(function(value) {
			dls.innerHTML += `
		<dd><a href="tle:${value.phone}" style="display:block;width:100%;height:100%">${value.name}</a></dd>
		`
			
		})
		tips.style.opacity='0'
	})
	//////////////////////////////搜索结束
	

}