var webgl_part01a = function (){
    var canvas;
    var gl;
    
    return {
        start: function() {
            console.log("init");
            canvas = document.getElementById("webgl_part01a");
            gl = canvas.getContext("webgl");

            window.requestAnimationFrame (this.loop.bind(this));
        },

        loop: function(time) {        
            window.requestAnimationFrame (this.loop.bind(this));

            gl.clearColor(Math.abs(Math.sin(time/1000)), Math.abs(Math.sin(time/1333)), Math.abs(Math.sin(time/1777)), 1.0);
            gl.clear(gl.COLOR_BUFFER_BIT);
        }                
    }
}();

document.addEventListener('DOMContentLoaded', function() {
    webgl_part01a.start();
});