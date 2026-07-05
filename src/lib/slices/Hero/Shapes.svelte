<script lang="ts">
  import { T as Threlte } from "@threlte/core";
  import * as THREE from "three";
  import Geometry from "./Geometry.svelte";
  import { ContactShadows, Environment, interactivity, transitions } from "@threlte/extras";

  interactivity();
  transitions();
</script>

<Threlte.PerspectiveCamera
  makeDefault
  position={[0, 0, 25]}
  aspect={1}
  fov={30}
  near={1}
  far={40}
/>

<Environment url="/smallroom.hdr" />

<ContactShadows
  position={[0, -3.5, 0]}
  opacity={0.65}
  scale={40}
  blur={1}
  far={9}
/>

<!-- Gem -->
<Geometry
  position={[0, 0, 0]}
  rate={0.3}
  geometry={new THREE.IcosahedronGeometry(3)}
/>

<!-- Torus Knot -->
<Geometry
  position={[1, -0.75, 4]}
  rate={0.45}
  geometry={new THREE.TorusKnotGeometry(0.45, 0.18, 120, 16)}
/>

<!-- Poliedro -->
<Geometry
  position={[-1.4, 2, -4]}
  rate={0.6}
  geometry={new THREE.DodecahedronGeometry(1.5)}
/>

<!-- Pyramid -->
<Geometry
  position={[-0.8, -0.75, 5]}
  rate={0.5}
  geometry={new THREE.TetrahedronGeometry(1.1)}
/>

<!-- Diamond -->
<Geometry
  position={[1.6, 1.6, -4]}
  rate={0.3}
  geometry={new THREE.OctahedronGeometry(1.5)}
/>
