<script lang="ts">
  import Title from "./lib/components/Title.svelte";
  import Scene from "./lib/components/Scene.svelte";
  import CreateBox from "./lib/components/CreateBox.svelte";
  import CreateSphere from "./lib/components/CreateSphere.svelte";
</script>

<Title />
<Scene let:scene>
  <CreateSphere
    name={"ball"}
    segments={8}
    diameter={2}
    position={[0, 0, 0]}
    {scene}
  />
  <CreateBox name={"box"} sizeValue={1} position={[-2, 0, 0]} {scene} />
  <CreateBox name={"box"} sizeValue={1} position={[2, 0, 0]} {scene} />
  <CreateBox name={"box"} sizeValue={1} position={[0, 0, 2]} {scene} />
  <CreateBox name={"box"} sizeValue={1} position={[0, 0, -2]} {scene} />
</Scene>
