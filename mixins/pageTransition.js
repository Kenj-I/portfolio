import { TweenMax, Back } from 'gsap';

function init(el) {
  TweenMax.to(el, 0.8, {
    delay: 0.2,
    y: 0,
    opacity: 1,
    ease: Back.easeOut.config(1.5),
    startAt: {
      y: '80px',
      opacity: 0,
    },
  });
}
// function fadeIn(el, done) {
//   TweenMax.to(el, 0.8, {
//     delay: 0.2,
//     y: 0,
//     opacity: 1,
//     ease: Back.easeOut.config(1.5),
//     startAt: {
//       y: '60px',
//       opacity: 0,
//     },
//     onComplete: done,
//   });
// }

function fadeOut(el, done) {
  TweenMax.to(el, 0.8, {
    y: '-80px',
    opacity: 0,
    ease: Back.easeIn.config(1.5),
    onComplete: done,
  });
}

export default {
  transition: {
    // enter(el, done) {
    //   fadeIn(el, done);
    // },
    leave(el, done) {
      fadeOut(el, done);
    },
  },
  mounted() {
    const target = '.card';
    init(target);
  },
};
