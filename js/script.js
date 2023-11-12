( ()=>{
  //variables
  const earbuds = document.querySelector ("#earbuds");
  const hotSpots = document.querySelectorAll (".Hotspot");
  const infoBoxes = [
    {
      title:'Toggle Sensor',
      text: 'Control your device without needing your device in your hand. Tap once to pause the song or video, tap twice to skip to next song.',
      },
      {
        title: 'Earpiece',
        text: 'Available in 3 sizes to create the most comfortable seal. Created  to isolate as much noise as possible.',
        },
        {
          title: 'Earpiece',
          text: 'Available in 3 sizes to create the most comfortable seal. Created to isolate as much noise as possible'
          },
          {
            title: 'Volume Down Button',
            text: 'Decreases the volume of any media playing on your device'
            },
            {
              title:'Volume Up Button',
              text:  'Increases the volume of any media playing on your device'
              },

  ]

  let imageCon = document.querySelector('#imageContainer'),
  drag = document.querySelector ('.image-drag'),
  left =    document.querySelector ('.image-left'),
  dragging = false,
  min = 0, 
  max = imageCon.offsetWidth;

//animation variables
  const canvas = document.querySelector("#animation");
  const context = canvas.getContext("2d");
  canvas.width = 1920;
  canvas.height = 1080;
  const frameCount = 90; //how many still frames do we have?
  const images = [];

  const alto = {
    frame: 0
};

for (let i=0; i<frameCount; i++) {
  //console.log(i);
  //const img = new Image();
  const img = document.createElement("img");
  //need to recreate a string: images/explode_0001.webp
  img.src = `img/Ohene_Jesica-EarbudsVideo${(i+1).toString().padStart(4, '0')}.jpg`;
  images.push(img);
}

gsap.to(alto, {
  frame: 90,
  snap: "frame",
  scrollTrigger: {
      trigger: "#animation",
      pin: true,
      scrub: 1,
      start: "top top",
      markers: true
  },
  onUpdate: render
})

//functions
function earbudsLoaded() {
  hotSpots.forEach(hotspot => {
    hotspot.style.display = "block";
  });
}
function loadInfo() {
  infoBoxes.forEach((infoBox, index) => {
    let selected = document.querySelector(`#hotspot-${index+1}`);
   
    const titleElement = document.createElement('h4');
    titleElement.textContent = infoBox.title;
    
    const textElement = document.createElement('p');
        textElement.textContent = infoBox.text;

    const imgElement = document.createElement('img');
    imgElement.src = infoBox.image;

    selected.appendChild(titleElement);
    selected.appendChild(textElement);
        selected.appendChild(imgElement);

  });
}
loadInfo();

function showInfo(e){
  //e.currentTarget.slot
  console.log(e.currentTarget.slot);
  let selected = document.querySelector(`#${this.slot}`);
  //button{slot ="hotspot-2"}>div
  gsap.to(selected, 1, {autoAlpha:1});
}
function hideInfo(e){
  console.log (e.currentTarget.slot);
  let selected = document.querySelector(`#${this.slot}`);
  gsap.to(selected, 1, {autoAlpha:0});
  
}

function onDown() {
  dragging = true;
  console.log ("set to true")
}

function onUp(){
  dragging = false;
  console.log("Set to false")
}

function onMove (event) {
//console.log("on move called")//;
if (dragging===true) {
//console.log("dragging");
let x = event.clientX - imageCon.getBoundingClientRect().left;
console.log(x);
if (x < min) {
  x = min; 
} else if (x > max){
  x = max-12;
//look to css for bar width and subtract it 

}

drag.style.left = x + "px";
left.style.width = x + "px";

}
}
//animation
function render() {
  // console.log(alto.frame);
  //console.log(images[alto.frame]);
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(images[alto.frame], 4, 0);
}
//event listeners
earbuds.addEventListener("load", earbudsLoaded);

hotSpots.forEach(function (hotspot) {
hotspot.addEventListener("mouseenter", showInfo);
hotspot.addEventListener("mouseleave", hideInfo);
//xray evntlisteners
drag.addEventListener('mousedown', onDown);
document.body.addEventListener('mouseup',onUp);
document.body.addEventListener('mousemove', onMove);  

//animation event listener
images[0].addEventListener("onload", render);

});
})();


