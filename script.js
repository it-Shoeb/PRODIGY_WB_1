
const header = document.querySelector('.navbar')
const hamburger = document.querySelector('.hamburger')
const navLink = document.querySelector('.nav-links')
const link = document.querySelectorAll('.link')

// hamburger.addEventListener('click', () => {
//     console.log('open');
//     navLink.style.left=0;
//     navLink.style.borderRadius = 0;
//     link.forEach(element => {
//         element.addEventListener('click', (e) => {
//             navLink.style.left=200+'%';
//             navLink.style.borderTopLeftRadius = 999+'px';
//             navLink.style.borderBottomLeftRadius = 999+'px';
//             console.log('close');
//         })
//     });
// })

document.addEventListener('scroll', (e) => {
    console.log(e.body);
})