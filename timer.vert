#version 400
in vec2 vp;
out vec2 pos;
uniform float xscale = 1;
uniform float xoffset = 0;
uniform float yscale = 1;
uniform float yoffset = 0;

void main()
{
  gl_Position = vec4((vp.x * xscale + xoffset) * 2, (vp.y * yscale + yoffset) * 2, 0.0, 1.0);
  pos = vp * 0.5 + 0.5;
}
