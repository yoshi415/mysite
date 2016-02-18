(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(function () {
  var $main = $('.main');
  var $body = $('body');
  var $up = $('#up');
  var $down = $('#down');
  var $downLabel = $('#downLabel');
  var $good = $('#goodinthisworld');

  $main.onepage_scroll({
    easing: 'ease-in-out',
    animationTime: 1000,
    beforeMove: function beforeMove(index) {
      transition(index);
      $('#down').rotate({ angle: 0, animateTo: 360, duration: 1000 });
      $('#up').rotate({ angle: 0, animateTo: 360, duration: 1000 });
    },
    pagination: true,
    loop: false,
    keyboard: true,
    responsiveFallback: 600
  });

  $up.click(function () {
    $main.moveUp();
  });
  $down.add('#downLabel').click(function () {
    $main.moveDown();
  });

  toggleOverlay('#goodinthisworld', '#project1');
  toggleOverlay('#omnibooks', '#project2');
  toggleOverlay('#djcity', '#project3');
  toggleOverlay('#stock', '#project4');

  var throttledResize = function throttledResize() {
    var last,
        deferTimer,
        threshhold = 75;
    return function () {
      var now = +new Date();
      if (last && now < last + threshhold) {
        clearTimeout(deferTimer);
        deferTimer = setTimeout(function () {
          last = now;
          responsiveResize();
        }, threshhold);
      } else {
        last = now;
        responsiveResize();
      }
    };
  }();

  responsiveResize();
  $(window).resize(throttledResize);

  function responsiveResize() {
    var width = $(document).width();
    if (width < 1000) {
      $(".column").css({ display: 'block', 'margin-left': '25%' });
    } else {
      $(".column").css({ display: 'inline-flex', 'margin-left': 'auto' });
    }
  }

  function toggleOverlay(project, overlay) {
    $(project).mouseenter(function () {
      $(overlay).css({ 'display': 'block' });
    });
    $(overlay).mouseleave(function () {
      $(overlay).css({ 'display': 'none' });
    });
  }

  function transition(page) {
    var direction = page === 1;
    var colors = direction ? ['firstColor', 'secondColor'] : ['secondColor', 'firstColor'];
    var toggleArrow = direction ? ['show', 'hide'] : ['hide', 'show'];
    $body.removeClass(colors[1]).addClass(colors[0]);
    $down[toggleArrow[0]](1200);
    $up[toggleArrow[1]](1200);
  }
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzb3VyY2UvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsRUFBRSxZQUFNO0FBQ04sTUFBTSxRQUFRLEVBQUUsT0FBRixDQUFSLENBREE7QUFFTixNQUFNLFFBQVEsRUFBRSxNQUFGLENBQVIsQ0FGQTtBQUdOLE1BQU0sTUFBTSxFQUFFLEtBQUYsQ0FBTixDQUhBO0FBSU4sTUFBTSxRQUFRLEVBQUUsT0FBRixDQUFSLENBSkE7QUFLTixNQUFNLGFBQWEsRUFBRSxZQUFGLENBQWIsQ0FMQTtBQU1OLE1BQU0sUUFBUSxFQUFFLGtCQUFGLENBQVIsQ0FOQTs7QUFRTixRQUFNLGNBQU4sQ0FBcUI7QUFDbkIsWUFBUSxhQUFSO0FBQ0EsbUJBQWUsSUFBZjtBQUNBLGdCQUFZLG9CQUFDLEtBQUQsRUFBVztBQUNyQixpQkFBVyxLQUFYLEVBRHFCO0FBRXJCLFFBQUUsT0FBRixFQUFXLE1BQVgsQ0FBa0IsRUFBRSxPQUFPLENBQVAsRUFBVSxXQUFXLEdBQVgsRUFBZ0IsVUFBVSxJQUFWLEVBQTlDLEVBRnFCO0FBR3JCLFFBQUUsS0FBRixFQUFTLE1BQVQsQ0FBZ0IsRUFBRSxPQUFPLENBQVAsRUFBVSxXQUFXLEdBQVgsRUFBZ0IsVUFBVSxJQUFWLEVBQTVDLEVBSHFCO0tBQVg7QUFLWixnQkFBWSxJQUFaO0FBQ0EsVUFBTSxLQUFOO0FBQ0EsY0FBVSxJQUFWO0FBQ0Esd0JBQW9CLEdBQXBCO0dBWEYsRUFSTTs7QUFzQk4sTUFBSSxLQUFKLENBQVUsWUFBTTtBQUNkLFVBQU0sTUFBTixHQURjO0dBQU4sQ0FBVixDQXRCTTtBQXlCTixRQUFNLEdBQU4sQ0FBVSxZQUFWLEVBQXdCLEtBQXhCLENBQThCLFlBQU07QUFDbEMsVUFBTSxRQUFOLEdBRGtDO0dBQU4sQ0FBOUIsQ0F6Qk07O0FBNkJOLGdCQUFjLGtCQUFkLEVBQWtDLFdBQWxDLEVBN0JNO0FBOEJOLGdCQUFjLFlBQWQsRUFBNEIsV0FBNUIsRUE5Qk07QUErQk4sZ0JBQWMsU0FBZCxFQUF5QixXQUF6QixFQS9CTTtBQWdDTixnQkFBYyxRQUFkLEVBQXdCLFdBQXhCLEVBaENNOztBQWtDTixNQUFJLGtCQUFrQixTQUFVLGVBQVQsR0FBMkI7QUFDaEQsUUFBSSxJQUFKO1FBQVUsVUFBVjtRQUFzQixhQUFhLEVBQWIsQ0FEMEI7QUFFaEQsV0FBTyxZQUFXO0FBQ2hCLFVBQUksTUFBTSxDQUFFLElBQUksSUFBSixFQUFGLENBRE07QUFFaEIsVUFBSSxRQUFRLE1BQU0sT0FBTyxVQUFQLEVBQW1CO0FBQ25DLHFCQUFhLFVBQWIsRUFEbUM7QUFFbkMscUJBQWEsV0FBVyxZQUFXO0FBQ2pDLGlCQUFPLEdBQVAsQ0FEaUM7QUFFakMsNkJBRmlDO1NBQVgsRUFHckIsVUFIVSxDQUFiLENBRm1DO09BQXJDLE1BTU87QUFDTCxlQUFPLEdBQVAsQ0FESztBQUVMLDJCQUZLO09BTlA7S0FGSyxDQUZ5QztHQUEzQixFQUFuQixDQWxDRTs7QUFtRE4scUJBbkRNO0FBb0ROLElBQUUsTUFBRixFQUFVLE1BQVYsQ0FBaUIsZUFBakIsRUFwRE07O0FBc0ROLFdBQVMsZ0JBQVQsR0FBNEI7QUFDMUIsUUFBSSxRQUFRLEVBQUUsUUFBRixFQUFZLEtBQVosRUFBUixDQURzQjtBQUUxQixRQUFJLFFBQVEsSUFBUixFQUFjO0FBQ2hCLFFBQUUsU0FBRixFQUFhLEdBQWIsQ0FBaUIsRUFBRSxTQUFTLE9BQVQsRUFBa0IsZUFBZSxLQUFmLEVBQXJDLEVBRGdCO0tBQWxCLE1BRU87QUFDTCxRQUFFLFNBQUYsRUFBYSxHQUFiLENBQWlCLEVBQUUsU0FBUyxhQUFULEVBQXdCLGVBQWUsTUFBZixFQUEzQyxFQURLO0tBRlA7R0FGRjs7QUFTQSxXQUFTLGFBQVQsQ0FBdUIsT0FBdkIsRUFBZ0MsT0FBaEMsRUFBeUM7QUFDdkMsTUFBRSxPQUFGLEVBQVcsVUFBWCxDQUFzQixZQUFNO0FBQzFCLFFBQUUsT0FBRixFQUFXLEdBQVgsQ0FBZSxFQUFFLFdBQVcsT0FBWCxFQUFqQixFQUQwQjtLQUFOLENBQXRCLENBRHVDO0FBSXZDLE1BQUUsT0FBRixFQUFXLFVBQVgsQ0FBc0IsWUFBTTtBQUMxQixRQUFFLE9BQUYsRUFBVyxHQUFYLENBQWUsRUFBRSxXQUFXLE1BQVgsRUFBakIsRUFEMEI7S0FBTixDQUF0QixDQUp1QztHQUF6Qzs7QUFTQSxXQUFTLFVBQVQsQ0FBb0IsSUFBcEIsRUFBMEI7QUFDeEIsUUFBSSxZQUFZLFNBQVMsQ0FBVCxDQURRO0FBRXhCLFFBQUksU0FBUyxZQUFZLENBQUMsWUFBRCxFQUFlLGFBQWYsQ0FBWixHQUE0QyxDQUFDLGFBQUQsRUFBZ0IsWUFBaEIsQ0FBNUMsQ0FGVztBQUd4QixRQUFJLGNBQWMsWUFBWSxDQUFDLE1BQUQsRUFBUyxNQUFULENBQVosR0FBK0IsQ0FBQyxNQUFELEVBQVMsTUFBVCxDQUEvQixDQUhNO0FBSXhCLFVBQU0sV0FBTixDQUFrQixPQUFPLENBQVAsQ0FBbEIsRUFBNkIsUUFBN0IsQ0FBc0MsT0FBTyxDQUFQLENBQXRDLEVBSndCO0FBS3hCLFVBQU0sWUFBWSxDQUFaLENBQU4sRUFBc0IsSUFBdEIsRUFMd0I7QUFNeEIsUUFBSSxZQUFZLENBQVosQ0FBSixFQUFvQixJQUFwQixFQU53QjtHQUExQjtDQXhFQSxDQUFGIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIiQoKCkgPT4ge1xuICBjb25zdCAkbWFpbiA9ICQoJy5tYWluJyk7XG4gIGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuICBjb25zdCAkdXAgPSAkKCcjdXAnKTtcbiAgY29uc3QgJGRvd24gPSAkKCcjZG93bicpO1xuICBjb25zdCAkZG93bkxhYmVsID0gJCgnI2Rvd25MYWJlbCcpO1xuICBjb25zdCAkZ29vZCA9ICQoJyNnb29kaW50aGlzd29ybGQnKTtcblxuICAkbWFpbi5vbmVwYWdlX3Njcm9sbCh7XG4gICAgZWFzaW5nOiAnZWFzZS1pbi1vdXQnLFxuICAgIGFuaW1hdGlvblRpbWU6IDEwMDAsXG4gICAgYmVmb3JlTW92ZTogKGluZGV4KSA9PiB7XG4gICAgICB0cmFuc2l0aW9uKGluZGV4KTtcbiAgICAgICQoJyNkb3duJykucm90YXRlKHsgYW5nbGU6IDAsIGFuaW1hdGVUbzogMzYwLCBkdXJhdGlvbjogMTAwMCB9KVxuICAgICAgJCgnI3VwJykucm90YXRlKHsgYW5nbGU6IDAsIGFuaW1hdGVUbzogMzYwLCBkdXJhdGlvbjogMTAwMCB9KVxuICAgIH0sXG4gICAgcGFnaW5hdGlvbjogdHJ1ZSxcbiAgICBsb29wOiBmYWxzZSxcbiAgICBrZXlib2FyZDogdHJ1ZSxcbiAgICByZXNwb25zaXZlRmFsbGJhY2s6IDYwMFxuICB9KTtcblxuICAkdXAuY2xpY2soKCkgPT4ge1xuICAgICRtYWluLm1vdmVVcCgpO1xuICB9KTtcbiAgJGRvd24uYWRkKCcjZG93bkxhYmVsJykuY2xpY2soKCkgPT4ge1xuICAgICRtYWluLm1vdmVEb3duKCk7XG4gIH0pO1xuXG4gIHRvZ2dsZU92ZXJsYXkoJyNnb29kaW50aGlzd29ybGQnLCAnI3Byb2plY3QxJyk7XG4gIHRvZ2dsZU92ZXJsYXkoJyNvbW5pYm9va3MnLCAnI3Byb2plY3QyJyk7XG4gIHRvZ2dsZU92ZXJsYXkoJyNkamNpdHknLCAnI3Byb2plY3QzJyk7XG4gIHRvZ2dsZU92ZXJsYXkoJyNzdG9jaycsICcjcHJvamVjdDQnKTtcblxuICBsZXQgdGhyb3R0bGVkUmVzaXplID0gKGZ1bmN0aW9uIHRocm90dGxlZFJlc2l6ZSgpIHtcbiAgICB2YXIgbGFzdCwgZGVmZXJUaW1lciwgdGhyZXNoaG9sZCA9IDc1O1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBub3cgPSArKG5ldyBEYXRlKCkpO1xuICAgICAgaWYgKGxhc3QgJiYgbm93IDwgbGFzdCArIHRocmVzaGhvbGQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KGRlZmVyVGltZXIpO1xuICAgICAgICBkZWZlclRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICBsYXN0ID0gbm93O1xuICAgICAgICAgIHJlc3BvbnNpdmVSZXNpemUoKTtcbiAgICAgICAgfSwgdGhyZXNoaG9sZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsYXN0ID0gbm93O1xuICAgICAgICByZXNwb25zaXZlUmVzaXplKCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSkoKTtcblxuICByZXNwb25zaXZlUmVzaXplKCk7XG4gICQod2luZG93KS5yZXNpemUodGhyb3R0bGVkUmVzaXplKTtcblxuICBmdW5jdGlvbiByZXNwb25zaXZlUmVzaXplKCkge1xuICAgIHZhciB3aWR0aCA9ICQoZG9jdW1lbnQpLndpZHRoKCk7XG4gICAgaWYgKHdpZHRoIDwgMTAwMCkge1xuICAgICAgJChcIi5jb2x1bW5cIikuY3NzKHsgZGlzcGxheTogJ2Jsb2NrJywgJ21hcmdpbi1sZWZ0JzogJzI1JScgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoXCIuY29sdW1uXCIpLmNzcyh7IGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsICdtYXJnaW4tbGVmdCc6ICdhdXRvJyB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB0b2dnbGVPdmVybGF5KHByb2plY3QsIG92ZXJsYXkpIHtcbiAgICAkKHByb2plY3QpLm1vdXNlZW50ZXIoKCkgPT4ge1xuICAgICAgJChvdmVybGF5KS5jc3MoeyAnZGlzcGxheSc6ICdibG9jaycgfSlcbiAgICB9KTtcbiAgICAkKG92ZXJsYXkpLm1vdXNlbGVhdmUoKCkgPT4ge1xuICAgICAgJChvdmVybGF5KS5jc3MoeyAnZGlzcGxheSc6ICdub25lJyB9KVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhbnNpdGlvbihwYWdlKSB7XG4gICAgbGV0IGRpcmVjdGlvbiA9IHBhZ2UgPT09IDE7XG4gICAgbGV0IGNvbG9ycyA9IGRpcmVjdGlvbiA/IFsnZmlyc3RDb2xvcicsICdzZWNvbmRDb2xvciddIDogWydzZWNvbmRDb2xvcicsICdmaXJzdENvbG9yJ107XG4gICAgbGV0IHRvZ2dsZUFycm93ID0gZGlyZWN0aW9uID8gWydzaG93JywgJ2hpZGUnXSA6IFsnaGlkZScsICdzaG93J11cbiAgICAkYm9keS5yZW1vdmVDbGFzcyhjb2xvcnNbMV0pLmFkZENsYXNzKGNvbG9yc1swXSk7XG4gICAgJGRvd25bdG9nZ2xlQXJyb3dbMF1dKDEyMDApO1xuICAgICR1cFt0b2dnbGVBcnJvd1sxXV0oMTIwMCk7XG4gIH1cbn0pO1xuIl19
