
- Creamos el contenedor

```javascript
const container = document.querySelector('#game-container');
```

- Crear una escena

```javascript
const scene = new THREE.Scene();
```

- Asignamos un color a la escena

```javascript
scene.background = new THREE.Color('skyblue');
```

- Creamos la camara

```javascript
const camera = new THREE.PerspectiveCamera(
    35,
    container.clientWidth / container.clientHeight,
    0.1,
    1000
);
```

- Posicionar la camara en el espacio

Posiciones X, Y, Z.
X = Izquierda y derecha
Y = Arriba y abajo
Z = Hacia delante y atras(Profundidad)

```javascript
camera.position.set(0, 0, 15);
```
- Vertices en el espacio

Posiciones X, Y, Z
X = Mas ancho o estrecho
Y = Mas alto o mas bajo
Z = Profundidad del objeto

```javascript
const geometry = new THREE.BoxGeometry(2, 2, 2);
```

- Creaccion del material
<strong>color : </strong> Color del material
<strong>wireframe : </strong>  Esqueleto / Estructura
<strong>vertexColors : </strong> Vertices de colores 
<strong>envMaps : </strong> None | reflection | refraction
<strong>map : </strong> none | bricks
<strong>alphaMap : </strong>  fibers
<strong>combine : </strong>  
THREE.MultiplyOpera | THREE.AddOperation | THREE.MixOperation
<strong>reflectivity : </strong> 0 - 1  
<strong>refracionRadio : </strong> 0 - 1

```javascript
const material = new THREE.MeshBasicMaterial({
    color: 'teal',
    wireframe: true,
    vertexColors: false,
    envMaps: 'refraction',
    map: 'bricks',
    alphaMap: 'fibers',
    combine: 'THREE.MultiplyOpera',
    reflectivity: 1,
    refractionRadio: 1,
});
```

- Creamos una malla en la que dentro tendrá:
Posicion del objeto y material del que se conforma.
```javascript
const box_mesh = new THREE.Mesh(geometry, material);
```

- Agregamos la malla a la escena

```javascript
scene.add(box_mesh);
```

- Creamos un render

```javascript
const renderer = new THREE.WebGLRenderer();
```

- Creamos el tamaño del renderer

```javascript
renderer.setSize(container.clientWidth, container.clientHeight);
```

- Se define el pixelRatio (<strong> no todos los dispositivos tienen el mismo pixelRatio </strong>)

```javascript
renderer.setPixelRatio(window.devicePixelRatio);
```

- Introducimos el canvas dentro del contenedor

```javascript
container.appendChild(renderer.domElement);
```

- Por último creamos una funcion update() la cual ejecuta:

box_mesh.rotateX(0.01) <strong>=</strong> Girara de arriba hacia abajo  
 
box_mesh.rotateY(0.01) <strong>=</strong> Girara de derecha a izquierda  

box_mesh.rotateZ(0.01) <strong>=</strong> Girara sobre si mismo ( como una rueda )  

renderer.render(scene, camera) <strong>=</strong>  Renderizar la escena y la camara en nuestra pantalla

renderer.setAnimationLoop(() => update());
} <strong>=</strong> Ejecuccion repetitiva (loop) de nuestra funcion

```javascript
const update = () => {
    box_mesh.rotateX(0.01);
    box_mesh.rotateY(0.01);
    // box_mesh.rotateZ(0.01);
    renderer.render(scene, camera);
    renderer.setAnimationLoop(() => update());
}
update();
```
