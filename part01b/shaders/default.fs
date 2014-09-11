
precision mediump float;
uniform vec2 canvasSize;

void main() {
	gl_FragColor = vec4(0, gl_FragCoord.x / canvasSize[0] * 1.0, 0, 1);
}
