import { ViewportScroller } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
// import * as THREE from 'three';
import anime from 'animejs/lib/anime.es.js';
import { slideInAnimation } from './animation';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  title = 'ThreePortfolio';
  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {
    // this.main();
    this.scrollDown();
    this.particles();
  }

  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;

  particles() {
    this.myStyle = {
      position: 'fixed',
      width: '100%',
      height: '100%',
      'z-index': 0,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    };

    this.myParams = {
      particles: {
        number: {
          value: 200,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: '#fff',
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#000000',
          },
          polygon: {
            nb_sides: 5,
          },
          image: {
            src: '',
            width: 100,
            height: 100,
          },
        },
        opacity: {
          value: 0.5,
          random: true,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 10,
          random: true,
          anim: {
            enable: true,
            speed: 5,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: false,
          distance: 500,
          color: '#ffffff',
          opacity: 0.4,
          width: 2,
        },
        move: {
          enable: true,
          speed: 10,
          direction: 'bottom',
          random: true,
          straight: true,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: 'window',
        events: {
          onhover: {
            enable: true,
            mode: 'bubble',
          },
          onclick: {
            enable: true,
            mode: 'repulse',
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 371.6075823929928,
            line_linked: {
              opacity: 0.16996754429273284,
            },
          },
          bubble: {
            distance: 243.00549192411756,
            size: 4.1,
            duration: 0.16200366128274507,
            opacity: 1,
            speed: 3,
          },
          repulse: {
            distance: 127.86497458683624,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    };
  }

  // main() {
  //   //Loader
  //   const textureLoader = new THREE.TextureLoader();
  //   const normalTexture = textureLoader.load('/assets/normalMap.png');

  //   //Debug
  //   //const gui = new GUI();

  //   // Canvas
  //   const canvas: any = document.querySelector('#canvas');
  //   // Scene
  //   const scene = new THREE.Scene();

  //   // Objects
  //   const geometry = new THREE.SphereBufferGeometry(0.5, 30, 30);

  //   // Materials

  //   const material = new THREE.MeshStandardMaterial();
  //   material.metalness = 0.9;
  //   material.roughness = 0.2;
  //   // material.color = new THREE.Color(0x292929);
  //   material.normalMap = normalTexture;

  //   // Mesh
  //   const sphere = new THREE.Mesh(geometry, material);
  //   scene.add(sphere);

  //   // Lights

  //   //light1
  //   const pointLight = new THREE.PointLight(0xffffff, 0.1);
  //   pointLight.position.x = 2;
  //   pointLight.position.y = 3;
  //   pointLight.position.z = 4;
  //   scene.add(pointLight);

  //   //Light 2
  //   const pointLight2 = new THREE.PointLight(0xff0000);

  //   pointLight2.position.set(-0.73, 1.4, -0.27);
  //   pointLight2.intensity = 0.4;
  //   scene.add(pointLight2);

  //   //Light3
  //   const pointLight3 = new THREE.PointLight(0x3241df);

  //   pointLight3.position.set(0.73, -1.4, 0.27);
  //   pointLight3.intensity = 0.6;
  //   scene.add(pointLight3);

  //   //GUI helper Setup
  //   // const light2 = gui.addFolder('Light 2');

  //   // light2.add(pointLight3.position, 'x').min(-3).max(3).step(0.01);
  //   // light2.add(pointLight3.position, 'y').min(-6).max(6).step(0.01);
  //   // light2.add(pointLight3.position, 'z').min(-3).max(3).step(0.01);
  //   // light2.add(pointLight3, 'intensity').min(-3).max(3).step(0.01);

  //   // const light2Color = {
  //   //   color: 0xff0000,
  //   // };

  //   // light2
  //   //   .addColor(light2Color, 'color')
  //   //   .onChange(() => pointLight3.color.set(light2Color.color));

  //   // const pointLightHelper2 = new THREE.PointLightHelper(pointLight3, 0.3);
  //   // scene.add(pointLightHelper2);

  //   /**
  //    * Sizes
  //    */
  //   const sizes = {
  //     width: window.innerWidth,
  //     height: window.innerHeight,
  //   };

  //   window.addEventListener('resize', () => {
  //     // Update sizes
  //     sizes.width = window.innerWidth;
  //     sizes.height = window.innerHeight;

  //     // Update camera
  //     camera.aspect = sizes.width / sizes.height;
  //     camera.updateProjectionMatrix();

  //     // Update renderer
  //     renderer.setSize(sizes.width, sizes.height);
  //     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  //   });

  //   /**
  //    * Camera
  //    */
  //   // Base camera
  //   const camera = new THREE.PerspectiveCamera(
  //     75,
  //     sizes.width / sizes.height,
  //     0.1,
  //     100
  //   );
  //   camera.position.x = 0;
  //   camera.position.y = 0;
  //   camera.position.z = 2;
  //   scene.add(camera);

  //   // Controls
  //   // const controls = new OrbitControls(camera, canvas)
  //   // controls.enableDamping = true

  //   /**
  //    * Renderer
  //    */
  //   const renderer = new THREE.WebGL1Renderer({
  //     canvas: canvas,
  //     alpha: true,
  //   });
  //   renderer.setSize(sizes.width, sizes.height);
  //   renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  //   /**
  //    * Animate
  //    */
  //   let mouseX = 0;
  //   let mouseY = 0;

  //   let targetX = 0;
  //   let targetY = 0;

  //   const windowHalfX = window.innerWidth / 2;
  //   const windowHalfY = window.innerHeight / 2;
  //   document.addEventListener('mousemove', onDocumentMouseMove);

  //   function onDocumentMouseMove(event) {
  //     mouseX = event.clientX - windowHalfX;
  //     mouseY = event.clientY - windowHalfY;
  //   }

  //   const updateSphere = (event) => {
  //     sphere.position.y = window.scrollY * 0.004;
  //   };
  //   window.addEventListener('scroll', updateSphere);

  //   const clock = new THREE.Clock();

  //   const tick = () => {
  //     const elapsedTime = clock.getElapsedTime();

  //     targetX = mouseX * 0.001;
  //     targetY = mouseY * 0.001;

  //     // Update objects
  //     sphere.rotation.y = 0.7 * elapsedTime;

  //     sphere.rotation.y += 0.1 * (targetX - sphere.rotation.y);
  //     sphere.rotation.x += 0.21 * (targetY - sphere.rotation.x);
  //     sphere.position.z += -0.16 * (targetY - sphere.rotation.x);

  //     // Update Orbital Controls
  //     // controls.update()

  //     // Render
  //     renderer.render(scene, camera);

  //     // Call tick again on the next frame
  //     window.requestAnimationFrame(tick);
  //   };

  //   tick();
  // }

  scrollDown() {
    anime
      .timeline({ loop: true })
      .add({
        targets: '.scrollDown',
        translateY: 60,
        easing: 'easeInOutQuad',
        duration: 400,
      })

      .add({
        targets: '.scrollDown',
        translateY: 0,

        duration: 1000,
      });
  }
  scroll() {
    this.viewportScroller.scrollToAnchor('first');
  }
}
