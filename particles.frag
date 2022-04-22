#version 400
out vec4 fragColor;
// in vec2 pos;
uniform vec4 color;

void main()
{
  vec2 position = 2 * gl_PointCoord - 1;
  float scale = length(position) < 1 ? 1.0 : 0.0;
  fragColor = color * scale;
}
