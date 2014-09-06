var webgl_part01 = {
    canvas: undefined,
    gl: undefined,
    
    init: function() {
        console.log("init");
    	this.canvas = document.getElementById("webgl_part01");
      	this.gl = this.canvas.getContext("webgl");
        
        this.renderFrame();
    },
    
    renderFrame: function() {
        
        window.requestAnimationFrame (this.renderFrame.bind(webgl_part01));
        this.gl.clearColor(1.0, 0.5, 0, 1.0);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    }
};

document.addEventListener('DOMContentLoaded', function() {
    webgl_part01.init();
});