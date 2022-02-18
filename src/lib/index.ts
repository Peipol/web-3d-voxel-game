import "@babylonjs/core/Debug/debugLayer";
import "@babylonjs/inspector";
import { Engine } from "@babylonjs/core/Engines/engine";
import { Scene } from "@babylonjs/core/scene";
import { ArcRotateCamera } from "@babylonjs/core/Cameras/arcRotateCamera";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import { HemisphericLight } from "@babylonjs/core/Lights/hemisphericLight";
import "@babylonjs/core/Materials/standardMaterial";

export default class Game {
  public canvas: HTMLCanvasElement | undefined;
  public engine: Engine;
  public scene: Scene;
  public camera: ArcRotateCamera;

  constructor(gameCanvas: HTMLCanvasElement) {
    this.canvas = gameCanvas;
    this.engine = new Engine(this.canvas, false);
    this.scene = new Scene(this.engine);
    this.camera = new ArcRotateCamera(
      "Camera",
      Math.PI / 2,
      Math.PI / 6,
      10,
      Vector3.Zero(),
      this.scene
    );

    this.camera.attachControl(this.canvas, true);

    this.setCameraZoomConfig(this.camera, {
      wheelPrecision: 70,
      lowerRadiusLimit: 3,
      upperRadiusLimit: 30,
    });

    const light: HemisphericLight = new HemisphericLight(
      "light",
      new Vector3(1, 1, 0),
      this.scene
    );

    light.intensity = 0.7;

    // const sphere = MeshBuilder.CreateSphere(
    //   "sphere",
    //   { diameter: 1, segments: 16 },
    //   this.scene
    // );

    // const cone = MeshBuilder.CreateCylinder(
    //   "cone",
    //   {
    //     diameterTop: 1.6,
    //     diameterBottom: 1,
    //     height: 0.9,
    //   },
    //   this.scene
    // );
    // cone.position = new Vector3(0, -0.5, 0);
    // cone.scaling.z = 0.6;

    // const n = 0.3;
    // sphere.clone().position.x = n;

    // sphere.position = new Vector3(-n, 0, 0);

    // this.scene.debugLayer.show();

    this.debugModeHotKeys();

    this.resizeReady(this.engine);

    this.engine.runRenderLoop(() => {
      this.scene.render();
    });
  }

  setCameraZoomConfig(
    camera: ArcRotateCamera,
    opt: {
      wheelPrecision: number;
      lowerRadiusLimit: number;
      upperRadiusLimit: number;
    }
  ) {
    Object.assign(camera, opt);
  }

  resizeReady(engine: Engine) {
    window.addEventListener("resize", () => {
      engine.resize();
    });
  }

  debugModeHotKeys() {
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

  getMeshByName(name: string){
    return this.scene.getMeshByName(name);
  }
}
