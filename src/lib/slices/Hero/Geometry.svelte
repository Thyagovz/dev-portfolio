<script lang="ts">
  import { T as Threlte } from "@threlte/core";
  import { createTransition, Float } from "@threlte/extras";
  import * as THREE from "three";
  import gsap from "gsap";
  import { elasticOut } from "svelte/easing";
  import { isInstanceOf } from "@threlte/core";

  let {
    position = [0, 0, 0] as [number, number, number],
    geometry = new THREE.IcosahedronGeometry(3),
    rate = 0.5,
  }: {
    position?: [number, number, number];
    geometry?: THREE.BufferGeometry;
    rate?: number;
  } = $props();

  const soundEffects = [
    new Audio("/sounds/hit1.ogg"),
    new Audio("/sounds/hit2.ogg"),
    new Audio("/sounds/hit3.ogg"),
  ];

  let visible = $state(false);

const materialParams = [
  { color: 0x2ecc71, roughness: 0, metalness: 1 },
  { color: 0xf1c40f, roughness: 0, metalness: 1 }, 
  { color: 0xe74c3c, roughness: 0, metalness: 1 }, 
  { color: 0x8e44ad, roughness: 0, metalness: 1 }, 
  { color: 0x1abc9c, roughness: 0, metalness: 1 },
  { color: 0x2980b9, roughness: 0, metalness: 1 }, 
  { color: 0x2c3e50, roughness: 0, metalness: 1 } 
];

  function getRandomMaterial() {
    return new THREE.MeshStandardMaterial(gsap.utils.random(materialParams));
  }

  function handleClick(event: MouseEvent) {
    gsap.utils.random(soundEffects).play();
    if ("object" in event && event.object instanceof THREE.Mesh) {
      gsap.to(event.object.rotation, {
        x: `+=${gsap.utils.random(0, 3)}`,
        y: `+=${gsap.utils.random(0, 3)}`,
        z: `+=${gsap.utils.random(0, 3)}`,
        duration: 1.3,
        ease: "elastic.out(1,0.3)",
        yoyo: true,
      });

      event.object.material = getRandomMaterial();
    }
  }

  const bounce = createTransition((ref) => {
    if (!isInstanceOf(ref, "Mesh")) return;

    return {
      tick(t) {
        if (t > 0) visible = true;
        ref.scale.setScalar(t);
      },
      easing: elasticOut,
      duration: gsap.utils.random(800, 1200),
      delay: gsap.utils.random(0, 500),
    };
  });
</script>

<Threlte.Group
  position={position.map((p) => p * 2) as [number, number, number]}
>
  <Float
    speed={5 * rate}
    rotationSpeed={5 * rate}
    rotationIntensity={6 * rate}
    floatIntensity={5 * rate}
  >
    <Threlte.Mesh
      {visible}
      {geometry}
      in={bounce}
      material={getRandomMaterial()}
      interactive
      onclick={handleClick}
    ></Threlte.Mesh>
  </Float>
</Threlte.Group>
