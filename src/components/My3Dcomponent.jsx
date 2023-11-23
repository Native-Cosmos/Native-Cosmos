import React, { useEffect } from 'react';
import { Application } from '@splinetool/runtime';

const My3Dcomponent = () => {
  useEffect(() => {

    const canvas = document.getElementById('canvas3d');

    if (canvas) {
      const app = new Application(canvas);
      app.load('https://prod.spline.design/eehaN3kDSPoWISYR/scene.splinecode');
    }
  }, []);

  return (
    <div>
      <canvas id="canvas3d" width="1000" height="1300"></canvas>
    </div>
  );
};

export default My3Dcomponent;
