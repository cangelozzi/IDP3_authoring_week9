(()=> {

  console.log('Javascript is running.');

  //! VARIABLES
  const topEl = document.querySelector('#beer1');

  // define waypoint
  var waypoint = new Waypoint({
    element: document.querySelector('#beer2').querySelector('.svg-graphic'),
    handler: function (direction) {
      console.log('Scrolled to waypoint!');
      runAnimation(this.element, ["rGlass", "cGlass", "lGlass"]);
    },
    offset: 100
  }
  );
  var waypoint = new Waypoint({
    element: document.querySelector('#beer3').querySelector('.svg-graphic'),
    handler: function (direction) {
      runAnimation(this.element, ["cBarrel", "lBarrel", "rBarrel"]);
    },
    offset: 100
  }
  );

  //! FUNCTIONS

  function  runAnimation(parent, elements) {
    console.log("run animation here");

    let innerSVG = parent.contentDocument;
    let animProps = {};

    switch(parent.id) {
      case 'bottle':
        animProps = { scaleX: 1.2, scaleY: 1.2, rotation: 360, transformOrigin: "50% 50%"};
        break;

        case 'barrels':
        animProps = { scaleX: 2.2, scaleY: 2.2};
        break;

        case 'glasses':
        animProps = { scaleX: 3.2, scaleY: 3.2};
        break;

        default:
        // do nothing
        break;
    }

    // simple vector animation with greensock
    elements.forEach(item => {
      let target = innerSVG.querySelector(`#${item}`);
      TweenMax.to(target, 0.6, animProps);
    });

  }

  //! EVENTS
topEl.addEventListener("mouseover", function() {
  runAnimation(this.querySelector('.svg-graphic'), ["lStar", "rStar"]);
});


})();