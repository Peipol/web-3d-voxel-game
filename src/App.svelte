<script lang="ts">
  import Title from "./lib/components/Title.svelte";
  import Scene from "./lib/components/Scene.svelte";
  import CreateBox from "./lib/components/CreateBox.svelte";
</script>

<Title />
<Scene let:scene>
  <CreateBox name="box" position={[0,0,0]} scene={scene}/>
</Scene>
