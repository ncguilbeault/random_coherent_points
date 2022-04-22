#version 400
in vec2 pos;
out vec4 fragColor;
uniform sampler2D tex0;

void main()
{
  vec4 texColor = texture(tex0, pos);
  fragColor = (texColor.x == texColor.y) && (texColor.y == texColor.z) && (texColor.z == 0) ? vec4(texColor.xyz, 0) : texColor;
}
