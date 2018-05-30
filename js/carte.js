function Route(svg, nb, direction) {
	this.svg = svg;
	this.nb = nb;
	this.direction = direction // 0 = horisontal 1 = vertical
	
	this.setColor = function (color) {
		this.svg.style.fill = color;
	}
}

$( document ).ready(function() {
    var svgObject = document.getElementById('carte').contentDocument;
	
	var matrix = [];
	var horison = 13;
	var vertical = 0;
	for (var i = 0; i < 7; i++) {
		matrix[i] = [];
		for(var j=0; j<7; j++) {
			if (i % 2 != 1) {
				if (j % 2 != 1) { // intersection
					 matrix[i][j] = undefined;
				} else {
					matrix[i][j] = new Route(svgObject.getElementById('route'+horison), horison, 0);
					horison++;
				}
			} else {
				if (j % 2 != 1) {
					var e = (vertical + (j/2) * 3)
					matrix[i][j] = new Route(svgObject.getElementById('route'+e), e, 1);
				} else {
					matrix[i][j] = null;
				}
			}
		}
		if (i % 2 == 0) {
			vertical++;
		}
	}
	console.log(matrix);
	
	//matrix[3][0].setColor("red");
});