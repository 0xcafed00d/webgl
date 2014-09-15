var webgl_part01b = function () {
    var canvas;
    var gl;
    var vertexBuffer;
   
    function loadShader (name) {
        var shaderElem = document.getElementById(name);
        if (shaderElem) {
            var shader = null;
            
            if (shaderElem.type == "x-shader/x-fragment") {
    			shader = gl.createShader(gl.FRAGMENT_SHADER);
  			} else if (shaderElem.type == "x-shader/x-vertex") {
    			shader = gl.createShader(gl.VERTEX_SHADER);
  			} else {
			     return null;
  			}
            
            gl.shaderSource(shader, shaderElem.text);
		  	gl.compileShader(shader);  
    
  			if (gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                return shader; 
            } else {
      			alert("Failed to compile shader: [" + name +"] " + gl.getShaderInfoLog(shader));  
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
            
            window.requestAnimationFrame(this.loop.bind(this));
        },
    
        loop: function(time) {
            window.requestAnimationFrame(this.loop.bind(this));
            gl.clearColor(Math.abs(Math.sin(time / 1000)), Math.abs(Math.sin(time / 1333)), Math.abs(Math.sin(time / 1777)), 1.0);
            gl.clear(gl.COLOR_BUFFER_BIT);
        }
                
    };
}();

document.addEventListener('DOMContentLoaded', function() {
    webgl_part01b.start();
});