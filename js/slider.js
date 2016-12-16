var count=1;
function Slide() {
	count%=3;
	count++;
	var name="slider"+count;
	var slider=document.getElementById(name);
	slider.click();
}
window.onload=function() {
	var t=setInterval("Slide()",3000);
	var stop=document.getElementsByClassName("stop");
	var next=document.getElementsByClassName("next");
	for (var i=0;i<stop.length;i++) {
		stop[i].onmouseover=function() {
			clearInterval(t);
		};
	}
	for (var i=0;i<next.length;i++) {
		next[i].onclick = function() {
			clearInterval(t);
		};
	}
};