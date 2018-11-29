function fadeIn(){
	console.log('hello');
	marker.style.opacity = "0";
	hover_marker.style.opacity = "1"
	hover_text.style.opacity = "1";		

	}
function fadeOut(){
	console.log('hello');
	marker.style.opacity = "1";
	hover_marker.style.opacity = "0"
	hover_text.style.opacity = "0";		
}
	let marker = document.getElementById('asha'); // black icon
	let hover_marker = document.getElementById('asha-hover') // green icon
	let hover_text = document.getElementById('asha-text') // text

	marker.style.transition = "0.2s";
	hover_marker.style.transition = "0.2s";
	hover_text.style.transition = "0.2s";

	hover_marker.onmouseover = fadeIn;
	hover_marker.onmouseleave = fadeOut;

function fadeIn2(){
	console.log('hello');
	marker2.style.opacity = "0";
	hover_marker2.style.opacity = "1"
	hover_text2.style.opacity = "1";		

	}

function fadeOut2(){
	console.log('hello');
	marker2.style.opacity = "1";
	hover_marker2.style.opacity = "0"
	hover_text2.style.opacity = "0";	

}
	let marker2 = document.getElementById('ucha'); // black icon
	let hover_marker2 = document.getElementById('ucha-hover') // green icon
	let hover_text2 = document.getElementById('ucha-text') // text

	marker2.style.transition = "0.2s";
	hover_marker2.style.transition = "0.2s";
	hover_text2.style.transition = "0.2s";

	hover_marker2.onmouseover = fadeIn2;
	hover_marker2.onmouseleave = fadeOut2;

function fadeIn3(){
	console.log('hello');
	marker3.style.opacity = "0";
	hover_marker3.style.opacity = "1"
	hover_text3.style.opacity = "1";		

	}

function fadeOut3(){
	console.log('hello');
	marker3.style.opacity = "1";
	hover_marker3.style.opacity = "0"
	hover_text3.style.opacity = "0";	

}
	let marker3 = document.getElementById('sharetea'); // black icon
	let hover_marker3 = document.getElementById('sharetea-hover') // green icon
	let hover_text3 = document.getElementById('sharetea-text') // text

	marker3.style.transition = "0.2s";
	hover_marker3.style.transition = "0.2s";
	hover_text3.style.transition = "0.2s";

	hover_marker3.onmouseover = fadeIn3;
	hover_marker3.onmouseleave = fadeOut3;

function fadeIn4(){
	console.log('hello');
	marker4.style.opacity = "0";
	hover_marker4.style.opacity = "1"
	hover_text4.style.opacity = "1";		

	}

function fadeOut4(){
	console.log('hello');
	marker4.style.opacity = "1";
	hover_marker4.style.opacity = "0"
	hover_text4.style.opacity = "0";	

}
	let marker4 = document.getElementById('yifang'); // black icon
	let hover_marker4 = document.getElementById('yifang-hover') // green icon
	let hover_text4 = document.getElementById('yifang-text') // text

	marker4.style.transition = "0.2s";
	hover_marker4.style.transition = "0.2s";
	hover_text4.style.transition = "0.2s";

	hover_marker4.onmouseover = fadeIn4;
	hover_marker4.onmouseleave = fadeOut4;