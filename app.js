const sineOut = gsap.parseEase("sine.out");
const expoOut = gsap.parseEase("expo.out");
const elasticOut = gsap.parseEase("elastic.out");
const sineIn = gsap.parseEase("sine.in");
const expoInOut = gsap.parseEase("expo.inOut");
const expoIn = gsap.parseEase("expo.in");
const elasticInOut = gsap.parseEase("elastic.inOut");

//sine.out * sine.out
const ease1 = (i) => {
  return sineOut(sineOut(i));
};
//elasticOut * elasticOut
const ease2 = (i) => {
  return elasticOut(elasticOut(i));
};
// sine.in * expo.out;
const ease3 = (i) => {
  return expoOut(sineIn(i));
};
// expo.inOut -> elastic.inOut;
const ease4 = (i) => {
  return i < 0.5 ? expoInOut(i) : elasticInOut(i);
};
// sine.in -> expo.out ;
const ease5 = (i) => {
  return sineIn(i) * (1 - i) + expoOut(i) * i;
};
const ease6 = (i) => {
  return i < 0.5 ? expoOut(i / 0.5) * 0.5 : 0.5 + expoIn((i - 0.5) / 0.5) * 0.5;
};
gsap.to(".box01", {
  x: 600,
  ease: ease1,
  repeat: -1,
  repeatDelay: 0.5,
  duration: 1,
});
gsap.to(".box02", {
  x: 600,
  ease: ease2,
  repeat: -1,
  repeatDelay: 0.5,
  duration: 5,
});
gsap.to(".box03", {
  x: 600,
  ease: ease3,
  repeat: -1,
  repeatDelay: 0.5,
  duration: 1,
});
gsap.to(".box04", {
  x: 600,
  ease: ease4,
  repeat: -1,
  repeatDelay: 0.5,
  duration: 1,
});
gsap.to(".box05", {
  x: 600,
  ease: ease5,
  repeat: -1,
  repeatDelay: 0.5,
  duration: 1,
});
gsap.to(".box06", {
  x: 600,
  ease: ease6,
  repeat: -1,
  repeatDelay: 0.5,
  duration: 1,
});
