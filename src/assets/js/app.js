import $ from "jquery";
import "what-input";

// Foundation JS relies on a global variable. In ES6, all imports are hoisted
// to the top of the file so if we used `import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
require("foundation-sites");

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

//Wybrano-Wybierz
const payments = document.querySelectorAll(".payments__item");
payments.forEach(function(item) {
  let btn = item.children[0].children[0].children[1].children[1];
  item.addEventListener("click", function() {
    if (item.classList.contains("is-active")) {
      btn.classList.add("green-btn");
      btn.classList.remove("blue-btn");
      btn.innerText = "Wybrano";
      payments.forEach(function(elem) {
        let btn2 = elem.children[0].children[0].children[1].children[1];
        if (item !== elem) {
          btn2.classList.add("blue-btn");
          btn2.classList.remove("green-btn");
          btn2.innerText = "Wybierz";
        }
      });
    } else {
      btn.classList.add("blue-btn");
      btn.classList.remove("green-btn");
      btn.innerText = "Wybierz";
    }
  });
});

$(document).foundation();
