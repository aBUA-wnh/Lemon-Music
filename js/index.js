// 打开登录界面
function openDialog(){
	document.getElementById('sign').style.display='block';
}
function closeDialog(){
	document.getElementById('sign').style.display='none';
}

// 切换QQ微信登录
function switch1(){
	document.getElementById('sign_c1').style.display='block';
	document.getElementById('sign_c2').style.display='none'
}
function switch2(){
	document.getElementById('sign_c1').style.display='none';
	document.getElementById('sign_c2').style.display='block'
}

// 切换快速、账号登录
function zhsignin(){
	document.getElementById('zhsign').style.display='block';
	document.getElementById('sign_c1_l').style.display='none'
}
function kssignin(){
	document.getElementById('zhsign').style.display='none';
	document.getElementById('sign_c1_l').style.display='block'
}

//登录、退出
function Clicklogin(){
	document.getElementById('menu_up_r_a3').style.display='block';
	document.getElementById('sign').style.display='none';
}
function ClickExit(){
	document.getElementById('menu_up_r_a3').style.display='none';
}