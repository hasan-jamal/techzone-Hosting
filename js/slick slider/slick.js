// StartSlider 2

$(document).ready(function () {
  $(".slider-users").slick({
    prevArrow: $(".box-img1"),
    nextArrow: $(".box-img2"),
    centerMode: true,
    centerPadding: "0px",
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    dots: false,
    responsive: [
      {
        breakpoint: 1025, // Mobile landscape and larger
        settings: {
          slidesToShow: 2, // Number of slides to show at once
          centerMode: true, // Optional: Keep centering on smaller screens
          centerPadding: "0px", // Adjust padding if needed
        },
      },
      {
        breakpoint: 480, // Mobile portrait and smaller
        settings: {
          slidesToShow: 1, // Number of slides to show at once
          centerMode: false, // Optional: Turn off centering for small screens
          centerPadding: "0px", // Adjust padding if needed
        },
      },
    ],
  });
});
//  End Slider 2
