import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  build:{
    rollupOptions:{
      output:{
        manualChunks:{
          "babylonjs-engine":["@babylonjs/core/Engines/engine"],
          "babylonjs-scene": ["@babylonjs/core/scene"],
          "babylonjs-arcRotateCamera": ["@babylonjs/core/Cameras/arcRotateCamera"],
          "babylonjs-vector": ["@babylonjs/core/Maths"],
          "babylonjs-hemisphericLight": ["@babylonjs/core/Lights/hemisphericLight"],
          "babylonjs-standar-mat": ["@babylonjs/core/Materials/standardMaterial"],
          "babylonjs-meshBuilder": ["@babylonjs/core/Meshes/meshBuilder"],
          "babylonjs-debugLayer": ["@babylonjs/core/Debug/debugLayer"],
          "babylonjs-inspector": ["@babylonjs/inspector"],
        }
      }
    }
  }
})
