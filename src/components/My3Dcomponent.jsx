import React, { useEffect } from "react";
import { Application } from "@splinetool/runtime";

const My3Dcomponent = () => {
  // useEffect(() => {
  //   const canvas = document.getElementById("canvas3d");

  //   if (canvas) {
  //     const app = new Application(canvas);
  //     app.load("https://prod.spline.design/lI0Ti84haSYtQMvM/scene.splinecode");
  //     // https://prod.spline.design/lI0Ti84haSYtQMvM/scene.splinecode foam
  //     // app.load('https://prod.spline.design/xMg2fmy-xOz2dZLG/scene.splinecode'); // wave
  //     // app.load('https://prod.spline.design/o90mkX-7JF9wGltL/scene.splinecode'); Earth
  //     // app.load('https://prod.spline.design/eehaN3kDSPoWISYR/scene.splinecode'); // first one

  //     return () => {
  //       if (app && typeof app.unload === "function") {
  //         app.unload();
  //       }

  //       app.dispose();
  //     };
  //   }
  // }, []);

  useEffect(() => {
    const canvas = document.getElementById("canvas3d");

    if (canvas) {
      let app;

      const load3DModel = async () => {
        try {
          app = new Application(canvas);
          await app.load(
            "https://prod.spline.design/lI0Ti84haSYtQMvM/scene.splinecode"
          );
        } catch (error) {
          console.error("Error loading 3D model:", error);
        }
      };

      load3DModel();

      return () => {
        if (app && typeof app.unload === "function") {
          app.unload();
        }

        if (app) {
          app.dispose();
        }
      };
    }
  }, []);

  return (
    <div>
      <canvas id="canvas3d" width="800" height="600"></canvas>
    </div>
  );
};

export default My3Dcomponent;
