$(document).ready(function () {
  $(".dropdown-FAQ").click(function () {
    console.log("f");
    const index = $(this).data("index");

    $(this).toggleClass("active");

    $(`.content[data-index=${index}]`).slideToggle(300);

    $(".dropdown-FAQ").not(this).removeClass("active");
    $(".content").not(`.content[data-index=${index}]`).slideUp(300);
  });
});
