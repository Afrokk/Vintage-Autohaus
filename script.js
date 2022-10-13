$(function () {
  $(document).scroll(function () {
      var $nav = $(".navGlobal");
      $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});

$(function () {
  $(document).scroll(function () {
      var $nav = $("#navVenue");
      $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});

$(function () {
  $(document).scroll(function () {
      var $nav = $("#navTickets");
      $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});

$(function () {
  $(document).scroll(function () {
      var $nav = $("#navAbout");
      $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});
