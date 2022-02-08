// import "@babylonjs/core/Debug/debugLayer";
import "@babylonjs/inspector";
import { Engine } from "@babylonjs/core/Engines/engine";
import { Scene } from "@babylonjs/core/scene";
import { ArcRotateCamera } from "@babylonjs/core/Cameras/arcRotateCamera";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import { HemisphericLight } from "@babylonjs/core/Lights/hemisphericLight";
import { MeshBuilder } from "@babylonjs/core/Meshes/meshBuilder";

export default class Game {

  public canvas: HTMLCanvasElement | undefined;
  public engine: Engine;
  public scene: Scene;

  constructor() {
    this.canvas = this.getCanvas();
    
    this.engine = new Engine(this.canvas, false);
    this.scene = new Scene(this.engine);

    const camera: ArcRotateCamera = new ArcRotateCamera(
      "Camera",
      Math.PI / 2,
      Math.PI / 2,
      2,
      Vector3.Zero(),
      this.scene
    );

    camera.attachControl(this.canvas, true);

    const light: HemisphericLight = new HemisphericLight(
      "light",
      new Vector3(1, 1, 0),
      this.scene
    );

    light.intensity = 0.7;

    const sphere = MeshBuilder.CreateSphere(
      "sphere",
      { diameter: 1, segments: 16 },
      this.scene
    );

    sphere.position = new Vector3(0, 0, 0);

    // this.scene.debugLayer.show();

    this.debugMode();

    this.resizeReady(this.engine);

    this.engine.runRenderLoop(() => {
      this.scene.render();
    });
  }

  resizeReady(engine: Engine) {
    window.addEventListener("resize", () => {
      engine.resize();
    });
  }

  getCanvas() {
    const canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
    return canvas;
  }

  debugMode() {
    window.addEventListener("keydown", (ev) => {
      // Shift+Ctrl+Alt+I
      if (ev.shiftKey && ev.ctrlKey && ev.altKey && ev.code === "KeyI") {
        if (this.scene.debugLayer.isVisible()) {
          this.scene.debugLayer.hide();
        } else {
          this.scene.debugLayer.show();
        }
      }
    });
  }
}
