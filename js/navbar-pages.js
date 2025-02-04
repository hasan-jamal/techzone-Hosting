function toggleSidenav() {
  document.body.classList.toggle("sidenav-active");
}

function closeSidenav() {
  document.body.classList.remove();
}
// const interval = setInterval(toggleSidenav, 1500);
document.addEventListener("mousemove", removeInterval);
document.addEventListener("click", removeInterval);

function removeInterval() {
  document.removeEventListener("mousemove", removeInterval);
  document.removeEventListener("click", removeInterval);
}
// //////////////////////////////////////////////////////////////////////////////////////
document.querySelectorAll(".box-link").forEach((boxLink) => {
  const link = boxLink.querySelector(".link");
  const targetId = link.getAttribute("data-target");
  const list = document.getElementById(targetId);

  if (list) {
    const showList = () => list.classList.add("active");

    const hideList = () => list.classList.remove("active");

    boxLink.addEventListener("mouseenter", showList);
    boxLink.addEventListener("mouseleave", (event) => {
      hideList();
    });
  }
});
////////////////////////////////////////////////////////////
// Dropdown FAQ
$(document).ready(function () {
  $(".btn-list").on("click", function () {
    const parent = $(this).closest(".dropdown-navbar-mb");
    parent.toggleClass("active");
    parent.find(".list-link").slideToggle(200);
  });
});
////////////////////////////////////////////
$(".cartButton").click(function () {
  document.body.classList.remove("sidenav-active");
});
