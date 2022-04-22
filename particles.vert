#version 400
in vec3 vp;

void main()
{
  gl_PointSize = vp.z;
  gl_Position = vec4(vp.xy, 0.0, 1.0);
}
