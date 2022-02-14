<script lang="ts">
  import { onMount } from "svelte";
  import Game from "./lib/index";
  onMount(() => {
    new Game();
    console.log("the component has mounted");
  });
</script>

<h1>babylon js</h1>
<canvas id="gameCanvas" />

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

  #gameCanvas {
    height: 100%;
    width: 100%;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 400;
    line-height: 1.1;
    margin: 2rem auto;
    max-width: 14rem;
    text-align: center;
  }
</style>
