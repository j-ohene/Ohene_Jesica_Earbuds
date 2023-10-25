// Handles loading the events for <model-viewer>'s slotted progress bar


( ()=>{
  console.log("IIFE Fired");
  //variables
  const earbuds = document.querySelector ("#earbuds");
  const hotSpots = document.querySelectorAll (".Hotspot");
//functions
function loaded() {
  console.log(hotSpots);
  hotSpots.forEach (hotSpot =>{
    hotSpot.style.display = "block";
  });
}
function showInfo(e){
  //e.currentTarget.slot
  console.log(e.currentTarget.slot);
  let selected = document.querySelector(`button[slot="${e.currentTarget.slot}"] > div`);
  //button{slot ="hotspot-2"}>div
  gsap.to(selected, 1, {autoAlpha:1});
}
function hideInfo(e){
  console.log (e.currentTarget.slot);
  let selected = document.querySelector(`button[slot="${e.currentTarget.slot}"] > div`);
  gsap.to(selected, 1, {autoAlpha:0});
  
}
//event listeners
earbuds.addEventListener("load", loaded);
hotSpots.addEventListener("mouseover", showInfo);
hotSpots.addEventListener("mouseout", hideInfo);
});