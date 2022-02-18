<script lang="ts">
  import { onMount } from "svelte";
  import { MeshBuilder } from "@babylonjs/core/Meshes/meshBuilder";
  import type { Scene } from "@babylonjs/core/scene";
  import { Vector3 } from "@babylonjs/core/Maths/math.vector";

  export let scene: Scene ;
  export let sizeValue: number = 0.5;
  export let name: string = "box";
  export let position: number[] = [0, 0, 0];

  onMount(() => {
    const box = MeshBuilder.CreateBox(
      `${name}`,
      { height: sizeValue, width: sizeValue, depth: sizeValue },
      scene
    );
    box.position = new Vector3(position[0], position[1], position[2]);
  });
</script>
