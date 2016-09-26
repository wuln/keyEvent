var data=['Phone5','Ipad','三星笔记本','佳能相机','惠普打印机','谢谢参与','50元充值卡','1000元超市购物券'];

window.onload=function() {
	var title=document.getElementById('title'),
		play=document.getElementById('play'),
		stop=document.getElementById('stop');
	var timer,
		flag=0;

	function playFun() {
		clearInterval(timer);
		if (!flag) {
			timer=setInterval(function() {
				var random=Math.floor(Math.random()*data.length);
				title.innerHTML=data[random];
			},50);
			play.style.background='#999';
			flag=1;
		} else{
			clearInterval(timer);
			play.style.background='#036';
			flag=0;
		}
	}

	function stopFun() {
		clearInterval(timer);
		play.style.background='#036';
		flag=0;
	}

	//DOM0级事件处理
	play.onclick=playFun;
	stop.onclick=stopFun;

	document.onkeyup=function(e){
		e=e||window.event;
		if (e.keyCode==13) {
			playFun();	
		} 
	}

}