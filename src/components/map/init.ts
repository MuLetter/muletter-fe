import { MailboxByMap } from "@store/types";
import _ from "lodash";
import * as THREE from "three";
import { MapControls } from "three/examples/jsm/controls/OrbitControls";

let camera: THREE.PerspectiveCamera | null = null;
let scene: THREE.Scene | null = null;
let raycaster: THREE.Raycaster | null = null;
const mouse = new THREE.Vector2();
let renderer: THREE.WebGLRenderer | null = null;
let controls: MapControls | null = null;
let move = false;
let INTERSECTED: any = null;

const WIDTH = 900;
const HEIGHT = 450;

export async function init(
  map: React.RefObject<HTMLDivElement>,
  datas: MailboxByMap[],
  onClick: (name: string) => void
) {
  camera = new THREE.PerspectiveCamera(60, 1, 1, 1000);
  camera.position.set(0, 0, 10);

  scene = new THREE.Scene();

  const light = new THREE.DirectionalLight(0xfff, 0.35);
  light.position.set(1, 1, 1).normalize();
  scene.add(light);

  const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);

  const loader = new THREE.TextureLoader();

  for (let {
    _id,
    point: { x, y },
    image,
    isMe,
  } of datas) {
    const material = new THREE.MeshBasicMaterial({
      map: loader.load(`${process.env.REACT_APP_API_SERVER}/${image}`),
      opacity: isMe ? 1 : 0.5,
      transparent: true,
    });
    let obj = new THREE.Mesh(geometry, material);
    (obj as any).isMe = isMe;
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

  controls.minDistance = 1;
  controls.maxDistance = 20;

  raycaster = new THREE.Raycaster();

  map.current!.appendChild(renderer.domElement);
  map.current!.addEventListener(
    "mousemove",
    _.debounce(onDocumentMouseMove, 0)
  );
  map.current!.addEventListener("click", () => onDocumentMouseClick(onClick));
}

function render() {
  raycaster!.setFromCamera(mouse, camera!);

  if (move) {
    const intersects = raycaster?.intersectObjects(scene!.children, false);
    if (intersects!.length > 0) {
      if (INTERSECTED !== intersects![0].object) {
        INTERSECTED = intersects![0].object;
      }
    } else {
      if (INTERSECTED) {
        if (!INTERSECTED.isMe) {
          INTERSECTED.material.opacity = 0.5;
          INTERSECTED = null;
        }
      }
    }

    if (INTERSECTED) {
      if (!INTERSECTED.isMe) INTERSECTED.material.opacity = 1;

      document.documentElement.style.cursor = "pointer";
    } else document.documentElement.style.cursor = "";

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
}

export function onDocumentMouseClick(onClick: (name: string) => void) {
  if (INTERSECTED) {
    onClick(INTERSECTED.name);
    document.documentElement.style.cursor = "";
    INTERSECTED = null;
  }
}

export function onDocumentMouseMove(event: MouseEvent) {
  console.log("실행");

  const rect = renderer!.domElement.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  move = true;
  event.preventDefault();

  mouse.x = (x / WIDTH) * 2 - 1;
  mouse.y = -(y / HEIGHT) * 2 + 1;
}
