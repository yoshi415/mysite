$(() => {
  const $main = $('.main');
  const $body = $('body');
  const $up = $('#up');
  const $down = $('#down');
  const $downLabel = $('#downLabel');

  $main.onepage_scroll({
        easing: 'ease-in-out',
        animationTime: 1000,
        beforeMove: (index) => {
          transition(index);
        },
        pagination: true,
        loop: false,
        keyboard: true,
        responsiveFallback: 600
  });

  $up.click(() => {
      $main.moveUp();
  });
  $down.add('#downLabel').click(() => {
      $main.moveDown();
  });


  function transition(page) {
    let direction = page === 1;
    let colors = direction ? ['firstColor', 'secondColor'] : [ 'secondColor', 'firstColor'];
    let toggleArrow = direction ? ['show', 'hide'] : ['hide', 'show']
    $body.removeClass(colors[1]).addClass(colors[0]);
    $down[toggleArrow[0]](1200);
    $up[toggleArrow[1]](1200);
  }
});