// var myCarousel = document.querySelector("#adsCarousel");
// var carousel = new bootstrap.Carousel(myCarousel, {
//   interval: 0, // Interval waktu dalam milidetik (2000 = 2 detik)
// });

// // Atur ulang carousel setelah mencapai item terakhir
// myCarousel.addEventListener("slid.bs.carousel", function () {
//   var activeItem = myCarousel.querySelector(".carousel-item.active");

//   if (!activeItem.nextElementSibling) {
//     // Jika ini adalah item terakhir, kembali ke item pertama
//     carousel.to(0);
//   }
// });

// function Marquee(selector, speed) {
//   const parentSelector = document.querySelector(selector);
//   const clone = parentSelector.innerHTML;
//   const firstElement = parentSelector.children[0];
//   let i = 0;
//   console.log(firstElement);
//   parentSelector.insertAdjacentHTML("beforeend", clone);
//   parentSelector.insertAdjacentHTML("beforeend", clone);

//   setInterval(function () {
//     firstElement.style.marginLeft = `-${i}px`;
//     if (i > firstElement.clientWidth) {
//       i = 0;
//     }
//     i = i + speed;
//   }, 0);
// }

//after window is completed load
//1 class selector for marquee
//2 marquee speed 0.2
// window.addEventListener("load", Marquee(".marquee", 0.2));
