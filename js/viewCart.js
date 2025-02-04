$(document).ready(function () {
  $(".cartButton").click(function () {
    $(".sectionCart").addClass("open");
    $(".cover").addClass("visible");
    $("body").css("overflow", "hidden");
  });

  $(".cover").click(function () {
    $(".sectionCart").removeClass("open");
    $(".cover").removeClass("visible");
    $("body").css("overflow", "auto");
  });
  $(".titleCart img").click(function () {
    $(".sectionCart").removeClass("open");
    $(".cover").removeClass("visible");
    $("body").css("overflow", "auto");
  });

  $(document).on("click", ".btn-outline", function (event) {
    event.stopPropagation();
    let $dropdown = $(this).siblings(".listStep");
    $(".listStep").not($dropdown).hide();
    $dropdown.toggle();
  });

  $(document).on("click", ".listStep span", function () {
    let $dropdownContainer = $(this).closest(".d-flex");
    let $buttonText = $dropdownContainer.find(".btn-outline span");
    $buttonText
      .text($(this).text())
      .removeClass("font-medium")
      .addClass("font-ExtraBold");
    $(this).closest(".listStep").hide();
  });

  $(document).on("click", function () {
    $(".listStep").hide();
  });
});
