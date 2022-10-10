import { MailboxByMap } from "@store/types";
import * as THREE from "three";
import { MapControls } from "three/examples/jsm/controls/OrbitControls";

let camera: THREE.PerspectiveCamera | null = null;
let scene: THREE.Scene | null = null;
let renderer: THREE.WebGLRenderer | null = null;
let controls: MapControls | null = null;
const WIDTH = 900;
const HEIGHT = 450;

export async function init(
  map: React.RefObject<HTMLDivElement>,
  datas: MailboxByMap[]
) {
  camera = new THREE.PerspectiveCamera(60, 1, 1, 1000);
  camera.position.set(0, 0, 10);

  scene = new THREE.Scene();

  const light = new THREE.DirectionalLight(0xfff, 0.35);
  light.position.set(1, 1, 1).normalize();
  scene.add(light);

  const geometry = new THREE.BoxGeometry(1, 1, 1);

  const loader = new THREE.TextureLoader();

  for (let {
    _id,
    point: { x, y },
    image,
  } of datas) {
    const material = new THREE.MeshBasicMaterial({
      map: loader.load(`${process.env.REACT_APP_API_SERVER}/${image}`),
    });
    let obj = new THREE.Mesh(geometry, material);
    obj.position.x = (x * 10) / 100;
    obj.position.y = (y * 10) / 100;
    obj.position.z = 0;

    obj.name = _id;
    scene.add(obj);
  }

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(WIDTH / HEIGHT);
  renderer.setSize(WIDTH, HEIGHT);

  controls = new MapControls(camera, renderer.domElement);

  controls.enableZoom = true;
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.maxPolarAngle = Math.PI / 2;

  controls.minDistance = 4;
  controls.maxDistance = 20;

  map.current!.appendChild(renderer.domElement);
}

function render() {
  controls?.update();
  renderer!.clear();
  renderer!.render(scene!, camera!);
}

export function animate() {
  (requestAnimationFrame as any)(animate, renderer!.domElement);

  render();
}
