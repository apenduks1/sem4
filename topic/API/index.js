const imageObvserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((enry) => {
    if (enry.isIntersecting) {
      enry.target.src = enry.target.dataset.src;
      observer.unobserve(enry.target);
    }
  });
});

const options = {
  root: null,
  threshold: 0.4,
};

const images = document.querySelectorAll(".img");
images.forEach((image) => imageObvserver.observe(image));

setTimeout(() => {
  images.forEach((image) => imageObvserver.disconnect(image));
console.log("Припинено спостереження за всіма елементами");
}, 2000);


const element = document.querySelector(".element")
const observeElement = (enties, observer) => {
  enties.forEach ( entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
    } else {
      entry.target.classList.remove('visible')
    }
})
}
const optionsElement = {
  root: null,

threshold:0.5 

};
 const observerForElement = new IntersectionObserver(observeElement,optionsElement)
observerForElement.observe(element)


const video = document.querySelector('.video')

const videoCallback = (enties, observer){
  
  if( video.currentTime != 0){
    if(!enties.isIntersecting || enties.isIntersectingRatio <=0.2){
      video.pause()
    } else {
      video.play()
    }
  } 
}

const videoOptins = {
  root: null,
  threshold:0.3

}

const videoObserver = new IntersectionObserver(videoCallback, videoOptins)
videoObserver.observe(VideoEncoder)