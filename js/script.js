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
//event listeners
earbuds.addEventListener("load", earbudsLoaded);

hotSpots.forEach(function (hotspot) {
hotspot.addEventListener("mouseenter", showInfo);
hotspot.addEventListener("mouseleave", hideInfo);
});
})();