<script lang="ts">
  import { onMount, tick } from "svelte";
  import { MeshBuilder } from "@babylonjs/core/Meshes/meshBuilder";
  import Game from "../index";

  let game: Game;

  let gameCanvas: HTMLCanvasElement;

  export let debug = false;

  onMount(async () => {
    game = new Game(gameCanvas);
    debug ? game.scene.debugLayer.show() : console.log("Debug off");
  });

  (async () => {
    await tick();
    game.camera.target = game.scene.meshes[0].getAbsolutePosition();
  })();
</script>

<div id="gameContainer" class="full-width-and-height">
  <canvas class="full-width-and-height" bind:this={gameCanvas} />
  {#if game}
    <slot scene={game.scene} />
  {/if}
</div>

<style>
  .full-width-and-height {
    height: 100%;
    width: 100%;
  }
</style>
