import React, { useEffect } from 'react';
import { Application } from '@splinetool/runtime';

const My3Dcomponent = () => {
  useEffect(() => {


//     import { Application } from '@splinetool/runtime';

// const canvas = document.getElementById('canvas3d');
// const app = new Application(canvas);
// app.load('https://prod.spline.design/FlrXrqNjJ4yaXlhM/scene.splinecode');


    const canvas = document.getElementById('canvas3d');

    if (canvas) {
      const app = new Application(canvas);
      app.load('https://prod.spline.design/FlrXrqNjJ4yaXlhM/scene.splinecode');
    }
  }, []);

  return (
    <div>
      <canvas id="canvas3d" width="1000" height="1300"></canvas>
    </div>
  );
};

export default My3Dcomponent;
