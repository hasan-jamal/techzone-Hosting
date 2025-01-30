$(document).ready(function () {
  let hoverTimeout;
  $("#monthly-content .card-pay").hover(
    function () {
      clearTimeout(hoverTimeout);

      $("#monthly-content .card-pay").removeClass("active");
    },
    function () {
      hoverTimeout = setTimeout(function () {
        $("#monthly-content .card-pay:first").addClass("active");
      }, 500);
    }
  );

  $("#monthly-content .card-pay:first").addClass("active");
});

$(document).ready(function () {
  let hoverTimeout;
  $("#yearly-content .card-pay").hover(
    function () {
      clearTimeout(hoverTimeout);

      $("#yearly-content .card-pay").removeClass("active");
    },
    function () {
      hoverTimeout = setTimeout(function () {
        $("#yearly-content .card-pay:first").addClass("active");
      }, 300);
    }
  );

  $("#yearly-content .card-pay:first").addClass("active");
});
//////////////////////////////////////////
$(document).ready(function () {
  $("#monthly-content").show();

  $("#monthly-tab").click(function () {
    $(".btn-red, .font-medium").removeClass("active");

    $(this).addClass("active");

    $(".tab-content").hide();
    $("#monthly-content").show();
  });

  $("#yearly-tab").click(function () {
    $(".btn-red, .font-medium").removeClass("active");

    $(this).addClass("active");

    $(".tab-content").hide();
    $("#yearly-content").show();
  });
});
