import * as THREE from "three";
import Stats from "three/examples/jsm/libs/stats.module";
import { MapControls } from "three/examples/jsm/controls/OrbitControls";

let camera: THREE.PerspectiveCamera | null = null;
let scene: THREE.Scene | null = null;
let raycaster: THREE.Raycaster | null = null;
let renderer: THREE.WebGLRenderer | null = null;
let stats: Stats | null = null;
const mouse = new THREE.Vector2();
let INTERSECTED: any = null;
let move = false;
let positionMemory: any = null;
let controls: MapControls | null = null;
const WIDTH = 900;
const HEIGHT = 450;

export async function init(map: React.RefObject<HTMLDivElement>) {
  camera = new THREE.PerspectiveCamera(60, WIDTH / HEIGHT, 1, 1000);
  //   camera.setLens(5);
  camera.position.set(2, 1, 500);

  scene = new THREE.Scene();
  //   scene.background = new THREE.Color(0xf0f0f0);

  const light = new THREE.DirectionalLight(0xfff, 0.35);
  light.position.set(1, 1, 1).normalize();
  scene.add(light);

  const geometry = new THREE.BoxGeometry(20, 20, 10);

  const loader = new THREE.TextureLoader();
  const material = new THREE.MeshBasicMaterial({
    map: loader.load(
      "https://api.muletter.ml/static/mailbox-image-1664944302145.JPG"
    ),
  });

  for (let i = 0; i < 100; i++) {
    const obj = new THREE.Mesh(
      geometry,
      //   new THREE.MeshLambertMaterial({ color: Math.random() * 0xfff })
      material
    );
    obj.position.x = Math.random() * 800 - 400;
    obj.position.y = Math.random() * 800 - 400;
    obj.position.z = Math.random() * 800 - 400;

    scene.add(obj);
  }

  raycaster = new THREE.Raycaster();

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(WIDTH / HEIGHT);
  renderer.setSize(WIDTH, HEIGHT);

  controls = new MapControls(camera, renderer.domElement);
  controls.addEventListener("change", (o) => {
    console.log(o);
    console.log((o.target as MapControls).getDistance());
  });

  controls.enableZoom = true;
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.maxPolarAngle = Math.PI / 2;

  controls.minDistance = WIDTH * 0.2;
  controls.maxDistance = WIDTH;

  stats = new (Stats as any)();

  map.current!.appendChild(renderer.domElement);
  renderer.domElement.addEventListener("mousemove", onDocumentMouseMove);
  renderer.domElement.addEventListener("load", () => {
    console.log("load");
  });
}

function render() {
  raycaster!.setFromCamera(mouse, camera!);

  if (move) {
    const intersects = raycaster?.intersectObjects(scene!.children, false);
    if (intersects!.length > 0) {
      //   const targetDistance = intersects![0].distance;

      // (camera! as any).focusAt(targetDistance);

      // console.log(INTERSECTED);

      if (INTERSECTED !== intersects![0].object) {
        if (INTERSECTED) {
          // INTERSECTED.material.emissive.setHex(INTERSECTED.currentHex);
        }

        INTERSECTED = intersects![0].object;
        // INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
        // INTERSECTED.material.emissive.setHex(0xff0000);
        const { x, y } = intersects![0].object.position;

        // intersects![0].object.position.setX(x + 2);
        // intersects![0].object.position.setY(y + 2);
        intersects![0].object.rotateY(1);

        positionMemory = {
          x,
          y,
        };
      }
    } else {
      if (INTERSECTED) {
        // INTERSECTED.material.emissive.setHex(INTERSECTED.currentHex);
        INTERSECTED.position.x = positionMemory.x;
        INTERSECTED.position.y = positionMemory.y;
      }

      INTERSECTED = null;
      positionMemory = null;
    }

    if (INTERSECTED) document.documentElement.style.cursor = "pointer";
    else document.documentElement.style.cursor = "";

    move = false;
  }

  scene!.overrideMaterial = null;

  controls?.update();
  renderer!.clear();
  renderer!.render(scene!, camera!);
}

export function animate() {
  (requestAnimationFrame as any)(animate, renderer!.domElement);

  render();
  (stats as any).update();
}

// export function eventDecorator(event: MouseEvent) {
//   event.x =
//   return event;
// }

export function onDocumentMouseClick(event: MouseEvent) {
  console.log(INTERSECTED);
  console.log("click");
  event.preventDefault();

  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
}

export function onDocumentMouseMove(event: MouseEvent) {
  const rect = renderer!.domElement.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  move = true;
  // console.log(event);
  event.preventDefault();

  mouse.x = (x / WIDTH) * 2 - 1;
  mouse.y = -(y / HEIGHT) * 2 + 1;
}
