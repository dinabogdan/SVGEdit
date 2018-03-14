var currentTool=0;
var sound=new Audio("adriantnt_bubble_clap.mp3");
var begin=0;
var ok = 1;

function svgEditor(){

	document.getElementById('line_tool').onclick=function(e){
		sound.play();
		begin=0;
		currentTool = 1;
		refreshBackgroundColor();
		changeBackgroundColor();
	}

	document.getElementById('rectangular_tool').onclick = function (e) {
		sound.play();
		begin=0;
		currentTool = 2;
		refreshBackgroundColor();
		changeBackgroundColor();
		drawForm(e);
	}

	document.getElementById('ellipse_tool').onclick =function (e) {
		sound.play();
		begin=0;
		currentTool=3;
		refreshBackgroundColor();
		changeBackgroundColor();
	}
}

function changeBackgroundColor(){
	
	if (currentTool == 1) {
		$('#line_tool').css({ 'background-color': '#eafc00'});
	} else
		if(currentTool==2){
			$('#rectangular_tool').css({ 'background-color': '#eafc00'});
		} else
			if(currentTool==3){
				$('#ellipse_tool').css({ 'background-color': '#eafc00'});
			}
}

function refreshBackgroundColor(){
		if(currentTool==1){
			$('#rectangular_tool').css({'background-color' : '#7c7575'});
			$('#ellipse_tool').css({'background-color' : '#7c7575'});
		}else
			if(currentTool==2){
				$('#line_tool').css({'background-color' : '#7c7575'});
				$('#ellipse_tool').css({'background-color' : '#7c7575'});
			}else
				if(currentTool==3){
					$('#line_tool').css({'background-color' : '#7c7575'});
					$('#rectangular_tool').css({'background-color' : '#7c7575'});
				}
}

function drawForm(e){

var mLeft=1, mRight=3, del=46;
//var x1 = e.clientX, y1 = e.clientY;
var selectedObject = null;

var mx=0, my=0, x1=0, y1=0; 

		/*$("#svg")
		.mousedown(function(e){
			if(e.which==mLeft){
				x1=e.pageX-this.getBoundingClientRect().left;
				y1 = e.pageY - this.getBoundingClientRect().top;

				if(currentTool==2){
					$("#rectangular")
						.setCoordinatesForRectangular(x1,y1,x1,y1)
						.show();
						begin=1;
			}
		}
		})
		.mouseup(function(e) {
			if(e.which ==mLeft) {
				x2=e.pageX-this.getBoundingClientRect().left;
				y2=e.pageY-this.getBoundingClientRect().top;

				if(currentTool==2) {
					
					$("#rectangular").hide();
					$(document.createElementNS("htttp://www.w3.org/2000/svg","rect"))
						.setCoordinatesForRectangular(x1,y1,x2,y2)
								
				}
			}
		}).appendTo($("#svg"));*/
		if(e.which==mLeft) {
		
			mx=e.pageX-$("#svg")[0].getBoundingClientRect().left;
			my=e.pageY-$("#svg")[0].getBoundingClientRect().top;
			
			if(currentTool==2){
		$("#svg").on("mousemove", function(e) {
				$("#rectangular").attr(getCoordinates(x1, y1, mx, my));
		
			
	}).on("mousedown", function() {
			x1=mx;
			y1=my;
			$("#rectangular").attr(getCoordinates(mx, my, mx+1, my+1)).show();
			}).on("mouseup", function() {
				var r=document.createElementNS("http://www.w3.org/2000/svg","rect");
				$(r).attr(getCoordinates(x1, y1, mx, my)).appendTo($("#svg"));
				$("#rectangular").hide();
				$(r).on("click", function () {svg=this;});
		})

	function getCoordinates(x1, y1, x2, y2) {
		var x=Math.min(x1,x2);
		var y=Math.min(y1, y2);
		var w=Math.abs(x1-x2);
		var h=Math.abs(y1-y2);
	return {x: x, y: y, width: w, height: h}
			}	
		}
	}
}



$.fn.setCoordinatesForRectangular =function (x1, y1, x2, y2) {
		return this.attr({
		x: Math.min(x1, x2),
		y: Math.min(y1, y2),
	width: Math.abs(x1-x2),
	height: Math.abs(y1-y2)
	});
}
