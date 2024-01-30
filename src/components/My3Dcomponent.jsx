import React from "react";

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

  // useEffect(() => {
  //   const canvas = document.getElementById("canvas3d");

  //   if (canvas) {
  //     let app;

  //     const load3DModel = async () => {
  //       try {
  //         app = new Application(canvas);
  //         await app.load(
  //           "https://prod.spline.design/lI0Ti84haSYtQMvM/scene.splinecode"
  //         );
  //       } catch (error) {
  //         console.error("Error loading 3D model:", error);
  //       }
  //     };

  //     load3DModel();

  //     return () => {
  //       if (app && typeof app.unload === "function") {
  //         app.unload();
  //       }

  //       if (app) {
  //         app.dispose();
  //       }
  //     };
  //   }
  // }, []);

  // const videoRef = useRef(null);

  // useEffect(() => {
  //   const video = videoRef.current;
  //   const canvas = document.createElement("canvas");
  //   const ctx = canvas.getContext("2d");

  //   document.body.appendChild(canvas);

  //   const resizeCanvas = () => {
  //     canvas.width = window.innerWidth;
  //     canvas.height = window.innerHeight;
  //   };

  //   resizeCanvas();

  //   window.addEventListener("resize", resizeCanvas);

  //   const drawFrame = () => {
  //     ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  //     requestAnimationFrame(drawFrame);
  //   };

  //   video.addEventListener("play", drawFrame);

  //   video.play();

  //   return () => {
  //     window.removeEventListener("resize", resizeCanvas);
  //     video.removeEventListener("play", drawFrame);
  //   };
  // }, []);

  return (
    <div>
      {/* <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          objectFit: "cover",
          height: "100%",
          zIndex: -1,
        }}
      >
        <source src={Vid} type="video/mp4" />
      </video> */}
      <img
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          opacity: 0.5,
          width: "100%",
          objectFit: "cover",
          height: "100%",
          zIndex: -1,
        }}
        // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBQ_YtDzWrVffoICL48qjhLGqOKLb8b_R-fQ&usqp=CAU"
        src="https://cdn.wallpapersafari.com/58/28/b8mlCR.jpg"
        // src="https://i.pinimg.com/originals/5b/fa/c6/5bfac6a727971be0fb3f4012afae0302.jpg"
        // src="https://wallpapercrafter.com/sizes/2560x1440/5380-lines-waves-abstraction-dark-purple-4k.jpg"
        alt=""
      />
      {/* <canvas id="canvas3d" width="800" height="600"></canvas> */}
    </div>
  );
};

export default My3Dcomponent;
