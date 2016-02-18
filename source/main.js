$(() => {
  const $main = $('.main');
  const $body = $('body');
  let direction = false;

  $main.onepage_scroll({
        easing: 'ease-in-out',
        animationTime: 1000,
        // beforeMove: changeColor,
        afterMove: changeColor,
        pagination: true,
        loop: false,
        keyboard: true,
        responsiveFallback: 600
  });

  $('#up').click(() => {
      $main.moveUp();
  });
  $('#down').click(() => {
      $main.moveDown();
  });

  function changeColor() {
    direction = !direction;
    let colors = direction ? ['firstColor', 'secondColor'] : [ 'secondColor', 'firstColor' ];
    $body.removeClass(colors[0]).addClass(colors[1]);
  }


});