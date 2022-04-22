#version 400
in vec2 pos;
out vec4 fragColor;
uniform sampler2D tex1;

void main()
{
  vec4 texColor = texture(tex1, pos);
  fragColor = texColor;
}
