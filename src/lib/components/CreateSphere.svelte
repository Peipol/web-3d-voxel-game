<script lang="ts">
  import { onMount } from "svelte";
  import { MeshBuilder } from "@babylonjs/core/Meshes/meshBuilder";
  import type { Scene } from "@babylonjs/core/scene";

  export let scene: Scene;
  export let segments: number = 8;
  export let diameter: number = 1;
  export let name: string = "sphere";
  export let position: number[] = [0, 0, 0];

  onMount(() => {
    const sphere = MeshBuilder.CreateSphere(
      `${name}`,
      { segments: segments, diameter: diameter },
      scene
    );
    sphere.position = sphere.position.fromArray(position);
  });
</script>
