import { CSS3DObject } from './tbw/libs/three.js-r132/examples/jsm/renderers/CSS3DRenderer.js';
const THREE = window.MINDAR.IMAGE.THREE;


document.addEventListener('DOMContentLoaded', () => {
  const start = async() => {
    const mindarThree = new window.MINDAR.IMAGE.MindARThree({
      container: document.body,
      imageTargetSrc: './tbw/assets/targets/TBW7.mind',
    });
    const {renderer, cssRenderer, scene, cssScene, camera} = mindarThree;

    const obj = new CSS3DObject(document.querySelector("#ar-div"));
    const cssAnchor = mindarThree.addCSSAnchor(0);
    cssAnchor.group.add(obj);
    await mindarThree.start();
    renderer.setAnimationLoop(() => {
      cssRenderer.render(cssScene, camera);
    });
  }

   //play button attempt
   var player = new Vimeo.Player(document.querySelector('iframe'));

   document.querySelector('button').addEventListener('click', function() {
     player.play();
   });
      
   //pause button attempt
   //var player = new Vimeo.Player(document.querySelector('iframe'));
   
   document.querySelector('button2').addEventListener('click', function() {
     player.pause();
   });



  start();
});