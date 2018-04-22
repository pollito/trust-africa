$(".single-story img, .single-story .title a").click(function(e) {
  e.preventDefault();
  $(this).parents(".single-story").children(".story-details").fadeIn(200);
});

$(".tag.is-delete").click(function(e) {
  e.preventDefault();
  $(this).parents(".story-details").fadeOut(200);
});

function scrollToDiv(id) {
  $('html,body').animate({
   scrollTop: $("#" + id).offset().top},
   'slow');
}

function lottery() {
  $(".series-banking").hide();
  $("p.series-lottery").fadeIn();
  $("h1.series-lottery, p.series-lottery").fadeIn();
  $(".article.series-lottery").each(function(index) {
      $(this).delay(300*index).fadeIn();
  });
  scrollToDiv("gaming-lottery");
};

function banking() {
  $(".series-lottery").hide();
  $("p.series-banking").fadeIn();
  $("h1.series-banking, p.series-banking").fadeIn();
  $(".article.series-banking").each(function(index) {
      $(this).delay(300*index).fadeIn();
  });
  scrollToDiv("banking-state-capture");
};