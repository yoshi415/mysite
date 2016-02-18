$(() => {
  const $main = $('.main');
  const $body = $('body');
  const $up = $('#up');
  const $down = $('#down');
  const $downLabel = $('#downLabel');
  const $good = $('#goodinthisworld');

  $main.onepage_scroll({
    easing: 'ease-in-out',
    animationTime: 1000,
    beforeMove: (index) => {
      transition(index);
      $('#down').rotate({ angle: 0, animateTo: 360, duration: 1000 })
      $('#up').rotate({ angle: 0, animateTo: 360, duration: 1000 })
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

  toggleOverlay('#goodinthisworld', '#project1');
  toggleOverlay('#omnibooks', '#project2');
  toggleOverlay('#djcity', '#project3');
  toggleOverlay('#stock', '#project4');

  let throttledResize = (function throttledResize() {
    var last, deferTimer, threshhold = 75;
    return function() {
      var now = +(new Date());
      if (last && now < last + threshhold) {
        clearTimeout(deferTimer);
        deferTimer = setTimeout(function() {
          last = now;
          responsiveResize();
        }, threshhold);
      } else {
        last = now;
        responsiveResize();
      }
    };
  })();

  responsiveResize();
  $(window).resize(throttledResize);

  function responsiveResize() {
    var width = $(document).width();
    if (width < 700) {
      $(".column").css({ display: 'block', 'margin': 'auto' });
    } else {
      $(".column").css({ display: 'inline-flex', 'margin': 'auto' });
    }
  }

  function toggleOverlay(project, overlay) {
    $(project).mouseenter(() => {
      $(overlay).css({ 'display': 'block' })
    });
    $(overlay).mouseleave(() => {
      $(overlay).css({ 'display': 'none' })
    });
  }

  function transition(page) {
    let direction = page === 1;
    let colors = direction ? ['firstColor', 'secondColor'] : ['secondColor', 'firstColor'];
    let toggleArrow = direction ? ['show', 'hide'] : ['hide', 'show']
    $body.removeClass(colors[1]).addClass(colors[0]);
    $down[toggleArrow[0]](1200);
    $up[toggleArrow[1]](1200);
  }
});
