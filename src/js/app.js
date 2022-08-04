const container = document.querySelector('#game-container');

// escena
const scene = new THREE.Scene();
scene.background = new THREE.Color('skyblue');

// Cámara
const camera = new THREE.PerspectiveCamera(
    35,
    container.clientWidth / container.clientHeight,
    0.1,
    1000
);
camera.position.set(0, 0, 15);

// Mesh
const geometry = new THREE.BoxBufferGeometry(2, 2, 2);
const material = new THREE.MeshBasicMaterial({
    color: 'teal'
});
const box_mesh = new THREE.Mesh(geometry, material);
scene.add(box_mesh);

// Render
const renderer = new THREE.WebGLRenderer({
    antialias: true,
    canvas: container
});
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);

const update = () => {
    box_mesh.rotateX(0.01);
    box_mesh.rotateY(0.01);
    renderer.render(scene, camera);
    renderer.setAnimationLoop(() => update());
}
update();
