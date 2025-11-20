uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float metaball(vec2 pos, vec2 center, float radius) {
  return radius / distance(pos, center);
}

void main() {
  vec2 st = gl_FragCoord.xy / u_resolution.xy;
  st.x *= u_resolution.x / u_resolution.y;

  float sum = 0.0;

  // Blob 1 (Pink/Red)
  vec2 pos1 = vec2(0.3, 0.3) + vec2(sin(u_time * 0.5) * 0.2, cos(u_time * 0.3) * 0.2);
  sum += metaball(st, pos1, 0.1);

  // Blob 2 (Blue)
  vec2 pos2 = vec2(0.7, 0.8) + vec2(sin(u_time * 0.4) * 0.3, cos(u_time * 0.5) * 0.3);
  sum += metaball(st, pos2, 0.15);

  // Blob 3 (Green/Cyan)
  vec2 pos3 = vec2(0.8, 0.2) + vec2(sin(u_time * 0.3) * 0.25, cos(u_time * 0.6) * 0.25);
  sum += metaball(st, pos3, 0.12);
  
  // Interactive Blob (follows the mouse)
  vec2 mouse_pos = (u_mouse * 0.5 + 0.5);
  mouse_pos.x *= u_resolution.x / u_resolution.y;
  sum += metaball(st, mouse_pos, 0.2);

  if (sum > 0.9) {
    vec3 color = vec3(0.0);
    color = mix(color, vec3(1.0, 0.2, 0.5), metaball(st, pos1, 0.1) / sum);
    color = mix(color, vec3(0.1, 0.5, 1.0), metaball(st, pos2, 0.15) / sum);
    color = mix(color, vec3(0.2, 1.0, 0.8), metaball(st, pos3, 0.12) / sum);
    color = mix(color, vec3(1.0, 1.0, 1.0), metaball(st, mouse_pos, 0.2) / sum);
    gl_FragColor = vec4(color, 1.0);
  } else {
    gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
  }
}