var para=document.getElementById("para");

function start(){
	
	res=setInterval(function(){
		var date=new Date();
		var time=date.toLocaleTimeString();
		para.innerHTML=time;
	},1000);
}

function stop(){
	clearInterval(res);		
}


function delay(){
	
	ms=setTimeout(function(){
		alert("Hi I am delay");
	},2000);
}

function delaystop(){
	clearTimeout(ms);
	alert("Hi I am delaystop");
}
