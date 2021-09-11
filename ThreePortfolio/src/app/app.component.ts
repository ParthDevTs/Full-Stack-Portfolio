import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GUI } from 'three/examples/jsm/libs/dat.gui.module';
import anime from 'animejs/lib/anime.es.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ThreePortfolio';

  ngOnInit(): void {
    this.main();
    this.animeMethod();
  }
  main() {
    //Loader
    const textureLoader = new THREE.TextureLoader();
    const normalTexture = textureLoader.load('/assets/normalMap.png');

    //Debug
    //const gui = new GUI();

    // Canvas
    const canvas: any = document.querySelector('#canvas');
    // Scene
    const scene = new THREE.Scene();

    // Objects
    const geometry = new THREE.SphereBufferGeometry(0.5, 64, 64);

    // Materials

    const material = new THREE.MeshStandardMaterial();
    material.metalness = 0.7;
    material.roughness = 0.2;
    // material.color = new THREE.Color(0x292929);
    material.normalMap = normalTexture;

    // Mesh
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Lights

    //light1
    const pointLight = new THREE.PointLight(0xffffff, 0.1);
    pointLight.position.x = 2;
    pointLight.position.y = 3;
    pointLight.position.z = 4;
    scene.add(pointLight);

    //Light 2
    const pointLight2 = new THREE.PointLight(0xff0000);

    pointLight2.position.set(-0.73, 1.4, -0.27);
    pointLight2.intensity = 0.4;
    scene.add(pointLight2);

    //Light3
    const pointLight3 = new THREE.PointLight(0x3241df);

    pointLight3.position.set(0.73, -1.4, 0.27);
    pointLight3.intensity = 0.6;
    scene.add(pointLight3);

    //GUI helper Setup
    // const light2 = gui.addFolder('Light 2');

    // light2.add(pointLight3.position, 'x').min(-3).max(3).step(0.01);
    // light2.add(pointLight3.position, 'y').min(-6).max(6).step(0.01);
    // light2.add(pointLight3.position, 'z').min(-3).max(3).step(0.01);
    // light2.add(pointLight3, 'intensity').min(-3).max(3).step(0.01);

    // const light2Color = {
    //   color: 0xff0000,
    // };

    // light2
    //   .addColor(light2Color, 'color')
    //   .onChange(() => pointLight3.color.set(light2Color.color));

    // const pointLightHelper2 = new THREE.PointLightHelper(pointLight3, 0.3);
    // scene.add(pointLightHelper2);

    /**
     * Sizes
     */
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    window.addEventListener('resize', () => {
      // Update sizes
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      // Update camera
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      // Update renderer
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    /**
     * Camera
     */
    // Base camera
    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 2;
    scene.add(camera);

    // Controls
    // const controls = new OrbitControls(camera, canvas)
    // controls.enableDamping = true

    /**
     * Renderer
     */
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    /**
     * Animate
     */

    document.addEventListener('mousemove', onDocumentMouseMove);

    let mouseX = 0;
    let mouseY = 0;

    let targetX = 0;
    let targetY = 0;

    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    function onDocumentMouseMove(event) {
      mouseX = event.clientX - windowHalfX;
      mouseY = event.clientY - windowHalfY;
    }

    const updateSphere = (event) => {
      sphere.position.y = window.scrollY * 0.004;
    };
    window.addEventListener('scroll', updateSphere);

    const clock = new THREE.Clock();

    const tick = () => {
      const elapsedTime = clock.getElapsedTime();

      targetX = mouseX * 0.001;
      targetY = mouseY * 0.001;

      // Update objects
      sphere.rotation.y = 0.7 * elapsedTime;

      sphere.rotation.y += 0.1 * (targetX - sphere.rotation.y);
      sphere.rotation.x += 0.21 * (targetY - sphere.rotation.x);
      sphere.position.z += -0.16 * (targetY - sphere.rotation.x);

      // Update Orbital Controls
      // controls.update()

      // Render
      renderer.render(scene, camera);

      // Call tick again on the next frame
      window.requestAnimationFrame(tick);
    };

    tick();
  }
  animeMethod() {
    anime
      .timeline({ loop: true })
      .add({
        targets: '.ml15 .word',
        scale: [14, 1],
        opacity: [0, 1],
        easing: 'easeOutCirc',
        duration: 800,
        delay: (el, i) => 800 * i,
      })
      .add({
        targets: '.ml15',
        opacity: 0,
        duration: 1000,
        easing: 'easeOutExpo',
        delay: 5000,
      });
  }
}
