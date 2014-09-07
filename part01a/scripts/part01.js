var webgl_part01 = {
    canvas: undefined,
    gl: undefined,
    
    start: function() {
        console.log("init");
    	this.canvas = document.getElementById("webgl_part01");
      	this.gl = this.canvas.getContext("webgl");
        
        window.requestAnimationFrame (this.loop.bind(this));
    },
    
    loop: function(time) {        
        window.requestAnimationFrame (this.loop.bind(this));
        
        this.gl.clearColor(Math.abs(Math.sin(time/1000)), Math.abs(Math.sin(time/1333)), Math.abs(Math.sin(time/1777)), 1.0);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    }
};

document.addEventListener('DOMContentLoaded', function() {
    webgl_part01.start();
});