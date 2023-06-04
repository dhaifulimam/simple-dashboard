$(".sidebar ul li").on("click", function () {
  $(".sidebar ul li.active").removeClass("active");
  $(this).addClass("active");
});

$(".open-btn").on("click", function () {
  $("#side-nav").addClass("active");
  $("#closeBtn").removeClass("btnVisible");
});

$(".close-btn").on("click", function () {
  $("#closeBtn").addClass("btnVisible");
  $("#side-nav").removeClass("active");
});
