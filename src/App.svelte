<script lang="ts">
  import { onMount } from "svelte";
  import CreateBox from "./lib/components/CreateBox.svelte";
  import Game from "./lib/index";
  let gameCanvas: HTMLCanvasElement;
  export let game: Game;
  export const n = 0.1;
  onMount(() => {
    game = new Game(gameCanvas);
    console.log("the component has mounted");
  });
</script>

<h1>Babylon js</h1>
<div class="full-width-and-height">
  <canvas class="full-width-and-height" bind:this={gameCanvas} />
</div>

{#if game}
  <CreateBox
    name={`laBeba`}
    sizeValue={1}
    scene={game.scene}
    position={[0, 0, 0]}
  />
  {#each Array(3) as _, i}
    <CreateBox
      name={`laBeba${i}`}
      sizeValue={1}
      scene={game.scene}
      position={[1 + n + i * (1 + n), 0, 0]}
    />
    <CreateBox
      name={`laBeba${i}-B`}
      sizeValue={1}
      scene={game.scene}
      position={[0, 0, 1 + n + i * (1 + n)]}
    />
    <CreateBox
      name={`laBeba${i}-B`}
      sizeValue={1}
      scene={game.scene}
      position={[-(1 + n + i * (1 + n)), 0, 0]}
    />
    <CreateBox
      name={`laBeba${i}-B`}
      sizeValue={1}
      scene={game.scene}
      position={[0, 0, -(1 + n + i * (1 + n))]}
    />
    <CreateBox
      name={`laBeba${i}-B`}
      sizeValue={1}
      scene={game.scene}
      position={[-(1 + n + i * (1 + n)), 0, -(1 + n + i * (1 + n))]}
    />
    <CreateBox
      name={`laBeba${i}-B`}
      sizeValue={1}
      scene={game.scene}
      position={[1 + n + i * (1 + n), 0, 1 + n + i * (1 + n)]}
    />
    <CreateBox
      name={`laBeba${i}-B`}
      sizeValue={1}
      scene={game.scene}
      position={[-(1 + n + i * (1 + n)), 0, 1 + n + i * (1 + n)]}
    />
    <CreateBox
      name={`laBeba${i}-B`}
      sizeValue={1}
      scene={game.scene}
      position={[1 + n + i * (1 + n), 0, -(1 + n + i * (1 + n))]}
    />
  {/each}
{/if}

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    overflow: hidden;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  :global(body) {
    overflow: hidden;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  :global(#app) {
    overflow: hidden;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  .full-width-and-height {
    height: 100%;
    width: 100%;
  }

  h1 {
    color: #ff3e00;
    position: absolute;
    text-transform: uppercase;
    font-size: 2.5rem;
    font-weight: 400;
    line-height: 1.1;
    margin: 1rem auto;
    text-align: center;
    width: 100%;
  }
</style>
