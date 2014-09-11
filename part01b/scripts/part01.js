var webgl_part01b = function () {
    var canvas;
    var gl;
    var vertexBuffer;
   
    return {
        start: function() {
            console.log("init");
            canvas = document.getElementById("webgl_part01b");
            gl = canvas.getContext("webgl");
            
            // Create the points for two triangles.
            vertexBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
                // The first triangle.
                -1, -1, 1, -1, -1, 1,
                // The second triangle.
                -1, 1, 1, -1, 1, 1
            ]), gl.STATIC_DRAW);
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