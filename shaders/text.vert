#version 400
in vec2 vp;
out vec2 pos;

void main()
{
  gl_Position = vec4((vp.xy * 2) - 1.0, 0.0, 1.0);
  pos = vp.xy;
}
