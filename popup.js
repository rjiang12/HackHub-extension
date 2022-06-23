if(document.querySelector(".popup_div") && document.querySelector(".button") && document.querySelector(".darkToggle")) {
  if(localStorage.getItem("list-items")) document.querySelector('.to-do-list').innerHTML = localStorage.getItem("list-items");

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
  });

  document.querySelector('#add-task').addEventListener("click", function(){
      document.querySelector('.to-do-list').innerHTML += `
          <div class="task">
              <span id="taskname">
                  <p>${document.querySelector('#my-input').value}</p>
              </span>
              <button class="delete">x</button>
          </div>
      `;
      localStorage.setItem("list-items", document.querySelector('.to-do-list').innerHTML);
      document.querySelector('#my-input').value = "";
      const all_tasks = document.querySelectorAll(".delete");
      for(let i = 0; i < all_tasks.length; i++){
          all_tasks[i].addEventListener("click", function(){
            this.parentNode.remove();
            localStorage.setItem("list-items", document.querySelector('.to-do-list').innerHTML);
        });
      }
  });

  document.addEventListener("keydown", (e) => {
    if(e.code === 'Enter') {
      document.querySelector('.to-do-list').innerHTML += `
        <div class="task">
            <span id="taskname">
                <p>${document.querySelector('#my-input').value}</p>
            </span>
            <button class="delete">x</button>
        </div>
      `;
      localStorage.setItem("list-items", document.querySelector('.to-do-list').innerHTML);
      document.querySelector('#my-input').value = "";
      const all_tasks = document.querySelectorAll(".delete");
      for(let i = 0; i < all_tasks.length; i++){
          all_tasks[i].addEventListener("click", function(){
            this.parentNode.remove();
            localStorage.setItem("list-items", document.querySelector('.to-do-list').innerHTML);
        });
      }
    }
});

  const all_tasks = document.querySelectorAll(".delete");
  for(let i = 0; i < all_tasks.length; i++){
      all_tasks[i].addEventListener("click", function(){
        this.parentNode.remove();
        localStorage.setItem("list-items", document.querySelector('.to-do-list').innerHTML);
    });
  }
  
  document.querySelector("#github").addEventListener("click", function(e) {
    e.preventDefault();
    chrome.tabs.create({url: 'https://github.com/', active: true});
  })

  document.querySelector("#stackof").addEventListener("click", function(e) {
    e.preventDefault();
    chrome.tabs.create({url: 'https://stackoverflow.com/', active: true});
  })

  document.querySelector("#leetcode").addEventListener("click", function(e) {
    e.preventDefault();
    chrome.tabs.create({url: 'https://leetcode.com/problemset/all/', active: true});
  })

}