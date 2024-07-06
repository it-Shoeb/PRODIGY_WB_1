const header = document.querySelector(".navbar");
const hamburger = document.querySelector(".hamburger");
const navLink = document.querySelector(".nav-links");
const link = document.querySelectorAll(".link");

hamburger.addEventListener('click', () => {
    console.log('open');
    navLink.style.left=0;
    navLink.style.borderRadius = 0;
    link.forEach(element => {
        element.addEventListener('click', (e) => {
            navLink.style.left=200+'%';
            navLink.style.borderTopLeftRadius = 999+'px';
            navLink.style.borderBottomLeftRadius = 999+'px';
            console.log('close');
        })
    });
})

window.addEventListener("scroll", (e) => {
  let vAxis = window.scrollY;
  const features = document.querySelector(".features_section");
  const products = document.querySelector(".products_section");
  const contact = document.querySelector(".contact_section");
  const about = document.querySelector(".about_section");

  console.log(vAxis);

  if (vAxis > 5 && vAxis < 681) {
    features.style.background = "#7A4EAB";
  } else {
    features.style.background = "#304f64";
  }
  if (vAxis > 681 && vAxis < 1243) {
    products.style.background = "#4332CF";
  } else {
    products.style.background = "#304f64";
  }
  if (vAxis > 1243 && vAxis < 1865) {
    contact.style.background = "#2F8FED";
  } else{
    contact.style.background = "#304f64";
  }
  if (vAxis > 1865 && vAxis < 2474) {
    about.style.background = "#F2293A";
  } else {
    about.style.background = "#304f64";
  }

});
