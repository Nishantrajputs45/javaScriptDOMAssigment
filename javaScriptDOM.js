//# Dom Manipulation Assignment

//1. Webiste Name: [Dev To](https://dev.to/)

document.querySelector(
  ".crayons-layout .sidebar-wrapper .side-bar .crayons-card .crayons-subtitle-2"
).innerHTML = "iNeuron";

document.querySelector(
  ".crayons-layout .sidebar-wrapper .side-bar .crayons-card .color-base-70"
).innerHTML = "I Write Code";

//2. Website Name: [Apple](https://support.apple.com/en-in)

let appleProductArray = [];

window.document.querySelectorAll(".as-imagegrid-item").forEach((data) => {
  appleProductArray.push(
    data.firstElementChild.dataset.analyticsLinkComponent_name
  );
});

console.log(appleProductArray);

//3. Webiste Name: [Youtube Support](https://support.google.com/youtube/)

const textNode = document.createTextNode("My New FAQ");

const h3 = document.createElement("h3");

h3.appendChild(textNode);

const section = document.createElement("section");

section.classList.add("parent");

section.appendChild(h3);

document.querySelectorAll(".accordion-homepage").appendChild(section);

//4. Webiste Name: [OnePlus](https://www.oneplus.in/support)

document.querySelector(".one-tel-number").innerText = "+916366256689";

//5. Webiste Name: [Samsung](https://www.samsung.com/in/offer/online/samsung-fest/)

document
  .querySelectorAll(".mytabs")
  .forEach(
    (ele) => (ele.firstElementChild.children[1].innerHTML = "check out")
  );

//6. Webiste Name: [Adidas](https://www.adidas.co.in/)

document
  .querySelector(".searchinput___19uW0")
  .addEventListener("mouseover", function () {
    document.querySelector(".searchinput___19uW0").style.backgroundColor =
      "red";
  });

//7. Webiste Name: [MDN Web Docs](https://developer.mozilla.org/en-US/) (not completed)

document.getElementById("top-nav-search-input").value = "css selector";
document.getElementById("top-nav-search-form").submit();

//8. Webiste Name: [Google](https://www.google.com/)

var language = document.querySelector("#SIvCob").children;
for (let lang of language) {
  lang.remove();
}

//9. Webiste Name: [Code Wars](https://www.codewars.com/)

var text = document.querySelector(".display-heading-1");
text.style.fontFamily = "monospace";
text.style.color = "#b1361e";

//10. Webiste Name: [Freecodecamp](https://www.freecodecamp.org/)

document
  .querySelector(".btn-cta-big .login-btn-text")
  .addEventListener("mouseenter", (ele) => {
    document.querySelector(
      ".btn-cta-big .login-btn-text"
    ).style.backgroundColor = "red";
  });

//11. Webiste Name: [realme](https://www.realme.com/in/)

let imageLogo = document.querySelector(".logo .icon");
imageLogo.style.backgroundImage =
  "url(https://ineuron.ai/images/ineuron-logo.png)";

// 12. Webiste Name: [Github](https://github.com/)

document.querySelector(".js-repos-container .f4 .btn").style.backgroundColor =
  "Blue";

//13. Webiste Name: [Hackerrank](https://www.hackerrank.com/)

document.querySelector(".fl-heading-text").innerHTML = "JSBOOTCAMP";

//14. Webiste Name: [Asus](https://www.asus.com/in/)

document.querySelector(".HotDealsAll__Heading__2fIbe").style.fontSize = "80px";

//15. Webiste Name: [Dell](https://www.dell.com/en-in/shop/deals/laptop-deals?gacd=10415953-9016-5761040-285981356-0&dgc
//=ST&gclid=Cj0KCQjwguGYBhDRARIsAHgRm4-XUDMhhVNyHXb3s1gY4ZBzORr_d9Se-buhJwy7asyUe7YdqEA11eEaAt6UEALw_wcB&gclsrc=aw.ds&nclid=
//BxjBlpBQsX6pjSHh-L8YYSU77EpfXRkG1AGMB5Wbeu386ykspfrPDnfx_DdFau20)

document
  .querySelectorAll(".ps-title")
  .forEach((ele) => (ele.style.textAlign = "right"));

// 16. Webiste Name: [Vercel](https://vercel.com/)

document.querySelector(".section-title_title__VEDfK").innerHTML =
  "Start with Scratch";

// 17. Webiste Name: [Sony](https://www.sony.co.in/)

document.querySelector(".btn-container").innerHTML = Date();

//18. Webiste Name: [Philips](https://www.philips.co.in/)

document.querySelector(".p-f03-footer-container ").style.backgroundColor =
  "orange";

//19. Webiste Name: [Canon](https://in.canon/)

document.querySelector(".navbar-brand .logo").src;

//20. Webiste Name: [Oppo](https://www.oppo.com/in/)

document.querySelector(".desc").style.color = "orange";
