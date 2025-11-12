// src/components/ThreeBackground.jsx (Simpler Version)
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true 
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Create 3 big white circles
    const circles = [];
    
    // Circle 1 - Large, slow moving right to left
    const geometry1 = new THREE.RingGeometry(3, 3.3, 64);
    const material1 = new THREE.MeshBasicMaterial({
      color: 0xf5f5f5,
      transparent: true,
      opacity: 0.05,
      side: THREE.DoubleSide
    });
    const circle1 = new THREE.Mesh(geometry1, material1);
    circle1.position.z = -15;
    circle1.position.x = 20; // Start from right
    scene.add(circle1);
    circles.push({ mesh: circle1, speed: 0.15, direction: -1 });

    // Circle 2 - Medium, medium speed left to right
    const geometry2 = new THREE.RingGeometry(2, 2.2, 64);
    const material2 = new THREE.MeshBasicMaterial({
      color: 0xf5f5f5,
      transparent: true,
      opacity: 0.04,
      side: THREE.DoubleSide
    });
    const circle2 = new THREE.Mesh(geometry2, material2);
    circle2.position.z = -20;
    circle2.position.x = -20; // Start from left
    scene.add(circle2);
    circles.push({ mesh: circle2, speed: 0.25, direction: 1 });

    // Circle 3 - Small, fast moving right to left
    const geometry3 = new THREE.RingGeometry(1.5, 1.7, 64);
    const material3 = new THREE.MeshBasicMaterial({
      color: 0xf5f5f5,
      transparent: true,
      opacity: 0.03,
      side: THREE.DoubleSide
    });
    const circle3 = new THREE.Mesh(geometry3, material3);
    circle3.position.z = -25;
    circle3.position.x = 25; // Start from right
    scene.add(circle3);
    circles.push({ mesh: circle3, speed: 0.35, direction: -1 });

    camera.position.z = 5;

    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      
      // Animate circles
      circles.forEach((circle) => {
        // Move circles horizontally
        circle.mesh.position.x += circle.speed * circle.direction;
        
        // Reset position when out of view
        if (circle.direction > 0 && circle.mesh.position.x > 25) {
          circle.mesh.position.x = -25;
        } else if (circle.direction < 0 && circle.mesh.position.x < -25) {
          circle.mesh.position.x = 25;
        }
        
        // Gentle floating motion
        circle.mesh.position.y = Math.sin(Date.now() * 0.001 + circle.mesh.position.z) * 2;
        
        // Slow rotation
        circle.mesh.rotation.z += 0.001;
      });
      
      renderer.render(scene, camera);
    };
    
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none" />;
};

export default ThreeBackground;