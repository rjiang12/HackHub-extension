if(document.querySelector(".popup_div") && document.querySelector(".button") && document.querySelector(".darkToggle")) {
  const darkToggle = document.querySelector(".darkToggle");
  let darkMode = false;
  
  darkToggle.addEventListener("click", function() {
    if(!darkMode) {
      darkMode = true;
      chrome.tabs.executeScript({
        file: "darkModeOn.js"
      }); 
    }
    else {
      darkMode = false;
      chrome.tabs.executeScript({
        file: "darkModeOff.js"
      }); 
    }
  })
}