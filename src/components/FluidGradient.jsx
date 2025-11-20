import React, { useEffect } from 'react';
import * as THREE from 'three';
import vertexShader from './shaders/fluidVertex.glsl';
import fragmentShader from './shaders/fluidFragment.glsl';

const FluidGradient = () => {
  useEffect(() => {
    // --- SETUP ---
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    const renderer = new THREE.WebGLRenderer();
    
    // --- CORRECTION ---
    // Style and append the canvas directly to the document body
    renderer.domElement.style.position = 'fixed';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.width = '100vw';
    renderer.domElement.style.height = '100vh';
    renderer.domElement.style.zIndex = '-1';
    document.body.appendChild(renderer.domElement);
    // ------------------

    const onResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      material.uniforms.u_resolution.value.set(window.innerWidth, window.innerHeight);
    };

    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        u_time: { value: 0.0 },
        u_resolution: { value: new THREE.Vector2() },
        u_mouse: { value: new THREE.Vector2() },
      },
    });
    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);
    
    onResize(); // Set initial size
    window.addEventListener('resize', onResize);

    const onMouseMove = (event) => {
      material.uniforms.u_mouse.value.set(
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1
      );
    };
    window.addEventListener('mousemove', onMouseMove);

    const clock = new THREE.Clock();
    const animate = () => {
      material.uniforms.u_time.value = clock.getElapsedTime();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    // --- CLEANUP ---
    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
      
      // Safely remove the canvas from the body
      if (document.body.contains(renderer.domElement)) {
        document.body.removeChild(renderer.domElement);
      }
      
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  // The component now renders nothing into the React tree
  return null;
};

export default FluidGradient;