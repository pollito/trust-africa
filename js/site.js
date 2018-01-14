$(".single-story img, .single-story .title a").click(function(e) {
  e.preventDefault();
  $(this).parents(".single-story").children(".story-details").fadeIn(200);
});

$(".tag.is-delete").click(function(e) {
  e.preventDefault();
  $(this).parents(".story-details").fadeOut(200);
});