var webgl_part01b = function() {
    var canvas;
    var gl;
    var vertexBuffer;
	var positionAttribute;

    function loadShader(name) {
        var shaderElem = document.getElementById(name);
        if(shaderElem) {
            var shader = null;

            if(shaderElem.type == "x-shader/x-fragment") {
                shader = gl.createShader(gl.FRAGMENT_SHADER);
            } else if(shaderElem.type == "x-shader/x-vertex") {
                shader = gl.createShader(gl.VERTEX_SHADER);
            } else {
                return null;
            }

            gl.shaderSource(shader, shaderElem.text);
            gl.compileShader(shader);

            if(gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                return shader;
            } else {
                alert("Failed to compile shader: [" + name + "] " + gl.getShaderInfoLog(shader));
            }
        }

        return null;
    }

    return {
        start: function() {
            console.log("init");
            canvas = document.getElementById("webgl_part01b");
            gl = canvas.getContext("webgl");

            var vs = loadShader("vertex-shader");
            var fs = loadShader("fragment-shader");

            var shaderProgram = gl.createProgram();

            gl.attachShader(shaderProgram, vs);
            gl.attachShader(shaderProgram, fs);
            gl.linkProgram(shaderProgram);

            if(!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
                alert("Unable to initialize the shader program.");
                return false;
            }

            gl.useProgram(shaderProgram);

            positionAttribute = gl.getAttribLocation(shaderProgram, "position");
            gl.enableVertexAttribArray(positionAttribute);


            vertexBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);

            var vertices = [
                0.5, 0.5, 0.0, 
				-0.5, 0.5, 0.0,
                0.5, -0.5, 0.0, 
				-0.5, -0.5, 0.0
            ];

            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

            window.requestAnimationFrame(this.loop.bind(this));

            return true;
        },

        loop: function(time) {
            window.requestAnimationFrame(this.loop.bind(this));
            gl.clearColor(Math.abs(Math.sin(time / 1000)), Math.abs(Math.sin(time / 1333)), Math.abs(Math.sin(time / 1777)), 1.0);
            gl.clear(gl.COLOR_BUFFER_BIT);
			
			gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  			gl.vertexAttribPointer(positionAttribute, 3, gl.FLOAT, false, 0, 0);
			gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        }
    };
}();

document.addEventListener('DOMContentLoaded', function() {
    webgl_part01b.start();
});