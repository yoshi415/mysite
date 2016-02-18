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
    if (width < 700) {
      $('.column').css({ display: 'block' });
      $('.projectOverlay').css({ 'margin-left': '98px' });
    } else {
      $('.column').css({ display: 'inline-flex' });
      $('.projectOverlay').css({ 'margin-left': '22px' });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzb3VyY2UvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsRUFBRSxZQUFNO0FBQ04sTUFBTSxRQUFRLEVBQUUsT0FBRixDQUFSLENBREE7QUFFTixNQUFNLFFBQVEsRUFBRSxNQUFGLENBQVIsQ0FGQTtBQUdOLE1BQU0sTUFBTSxFQUFFLEtBQUYsQ0FBTixDQUhBO0FBSU4sTUFBTSxRQUFRLEVBQUUsT0FBRixDQUFSLENBSkE7QUFLTixNQUFNLGFBQWEsRUFBRSxZQUFGLENBQWIsQ0FMQTtBQU1OLE1BQU0sUUFBUSxFQUFFLGtCQUFGLENBQVIsQ0FOQTs7QUFRTixRQUFNLGNBQU4sQ0FBcUI7QUFDbkIsWUFBUSxhQUFSO0FBQ0EsbUJBQWUsSUFBZjtBQUNBLGdCQUFZLG9CQUFDLEtBQUQsRUFBVztBQUNyQixpQkFBVyxLQUFYLEVBRHFCO0FBRXJCLFFBQUUsT0FBRixFQUFXLE1BQVgsQ0FBa0IsRUFBRSxPQUFPLENBQVAsRUFBVSxXQUFXLEdBQVgsRUFBZ0IsVUFBVSxJQUFWLEVBQTlDLEVBRnFCO0FBR3JCLFFBQUUsS0FBRixFQUFTLE1BQVQsQ0FBZ0IsRUFBRSxPQUFPLENBQVAsRUFBVSxXQUFXLEdBQVgsRUFBZ0IsVUFBVSxJQUFWLEVBQTVDLEVBSHFCO0tBQVg7QUFLWixnQkFBWSxJQUFaO0FBQ0EsVUFBTSxLQUFOO0FBQ0EsY0FBVSxJQUFWO0FBQ0Esd0JBQW9CLEdBQXBCO0dBWEYsRUFSTTs7QUFzQk4sTUFBSSxLQUFKLENBQVUsWUFBTTtBQUNkLFVBQU0sTUFBTixHQURjO0dBQU4sQ0FBVixDQXRCTTtBQXlCTixRQUFNLEdBQU4sQ0FBVSxZQUFWLEVBQXdCLEtBQXhCLENBQThCLFlBQU07QUFDbEMsVUFBTSxRQUFOLEdBRGtDO0dBQU4sQ0FBOUIsQ0F6Qk07O0FBNkJOLGdCQUFjLGtCQUFkLEVBQWtDLFdBQWxDLEVBN0JNO0FBOEJOLGdCQUFjLFlBQWQsRUFBNEIsV0FBNUIsRUE5Qk07QUErQk4sZ0JBQWMsU0FBZCxFQUF5QixXQUF6QixFQS9CTTtBQWdDTixnQkFBYyxRQUFkLEVBQXdCLFdBQXhCLEVBaENNOztBQWtDTixNQUFNLGtCQUFrQixTQUFVLGVBQVQsR0FBMkI7QUFDbEQsUUFBSSxJQUFKO1FBQVUsVUFBVjtRQUFzQixhQUFhLEVBQWIsQ0FENEI7QUFFbEQsV0FBTyxZQUFXO0FBQ2hCLFVBQUksTUFBTSxDQUFFLElBQUksSUFBSixFQUFGLENBRE07QUFFaEIsVUFBSSxRQUFRLE1BQU0sT0FBTyxVQUFQLEVBQW1CO0FBQ25DLHFCQUFhLFVBQWIsRUFEbUM7QUFFbkMscUJBQWEsV0FBVyxZQUFXO0FBQ2pDLGlCQUFPLEdBQVAsQ0FEaUM7QUFFakMsNkJBRmlDO1NBQVgsRUFHckIsVUFIVSxDQUFiLENBRm1DO09BQXJDLE1BTU87QUFDTCxlQUFPLEdBQVAsQ0FESztBQUVMLDJCQUZLO09BTlA7S0FGSyxDQUYyQztHQUEzQixFQUFuQixDQWxDQTs7QUFtRE4scUJBbkRNO0FBb0ROLElBQUUsTUFBRixFQUFVLE1BQVYsQ0FBaUIsZUFBakIsRUFwRE07O0FBc0ROLFdBQVMsZ0JBQVQsR0FBNEI7QUFDMUIsUUFBSSxRQUFRLEVBQUUsUUFBRixFQUFZLEtBQVosRUFBUixDQURzQjtBQUUxQixRQUFJLFFBQVEsR0FBUixFQUFhO0FBQ2YsUUFBRSxTQUFGLEVBQWEsR0FBYixDQUFpQixFQUFFLFNBQVMsT0FBVCxFQUFuQixFQURlO0FBRWYsUUFBRSxpQkFBRixFQUFxQixHQUFyQixDQUF5QixFQUFFLGVBQWUsTUFBZixFQUEzQixFQUZlO0tBQWpCLE1BR087QUFDTCxRQUFFLFNBQUYsRUFBYSxHQUFiLENBQWlCLEVBQUUsU0FBUyxhQUFULEVBQW5CLEVBREs7QUFFTCxRQUFFLGlCQUFGLEVBQXFCLEdBQXJCLENBQXlCLEVBQUUsZUFBZSxNQUFmLEVBQTNCLEVBRks7S0FIUDtHQUZGOztBQVdBLFdBQVMsYUFBVCxDQUF1QixPQUF2QixFQUFnQyxPQUFoQyxFQUF5QztBQUN2QyxNQUFFLE9BQUYsRUFBVyxVQUFYLENBQXNCLFlBQU07QUFDMUIsUUFBRSxPQUFGLEVBQVcsR0FBWCxDQUFlLEVBQUUsV0FBVyxPQUFYLEVBQWpCLEVBRDBCO0tBQU4sQ0FBdEIsQ0FEdUM7QUFJdkMsTUFBRSxPQUFGLEVBQVcsVUFBWCxDQUFzQixZQUFNO0FBQzFCLFFBQUUsT0FBRixFQUFXLEdBQVgsQ0FBZSxFQUFFLFdBQVcsTUFBWCxFQUFqQixFQUQwQjtLQUFOLENBQXRCLENBSnVDO0dBQXpDOztBQVNBLFdBQVMsVUFBVCxDQUFvQixJQUFwQixFQUEwQjtBQUN4QixRQUFJLFlBQVksU0FBUyxDQUFULENBRFE7QUFFeEIsUUFBSSxTQUFTLFlBQVksQ0FBQyxZQUFELEVBQWUsYUFBZixDQUFaLEdBQTRDLENBQUMsYUFBRCxFQUFnQixZQUFoQixDQUE1QyxDQUZXO0FBR3hCLFFBQUksY0FBYyxZQUFZLENBQUMsTUFBRCxFQUFTLE1BQVQsQ0FBWixHQUErQixDQUFDLE1BQUQsRUFBUyxNQUFULENBQS9CLENBSE07QUFJeEIsVUFBTSxXQUFOLENBQWtCLE9BQU8sQ0FBUCxDQUFsQixFQUE2QixRQUE3QixDQUFzQyxPQUFPLENBQVAsQ0FBdEMsRUFKd0I7QUFLeEIsVUFBTSxZQUFZLENBQVosQ0FBTixFQUFzQixJQUF0QixFQUx3QjtBQU14QixRQUFJLFlBQVksQ0FBWixDQUFKLEVBQW9CLElBQXBCLEVBTndCO0dBQTFCO0NBMUVBLENBQUYiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJCgoKSA9PiB7XG4gIGNvbnN0ICRtYWluID0gJCgnLm1haW4nKTtcbiAgY29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG4gIGNvbnN0ICR1cCA9ICQoJyN1cCcpO1xuICBjb25zdCAkZG93biA9ICQoJyNkb3duJyk7XG4gIGNvbnN0ICRkb3duTGFiZWwgPSAkKCcjZG93bkxhYmVsJyk7XG4gIGNvbnN0ICRnb29kID0gJCgnI2dvb2RpbnRoaXN3b3JsZCcpO1xuXG4gICRtYWluLm9uZXBhZ2Vfc2Nyb2xsKHtcbiAgICBlYXNpbmc6ICdlYXNlLWluLW91dCcsXG4gICAgYW5pbWF0aW9uVGltZTogMTAwMCxcbiAgICBiZWZvcmVNb3ZlOiAoaW5kZXgpID0+IHtcbiAgICAgIHRyYW5zaXRpb24oaW5kZXgpO1xuICAgICAgJCgnI2Rvd24nKS5yb3RhdGUoeyBhbmdsZTogMCwgYW5pbWF0ZVRvOiAzNjAsIGR1cmF0aW9uOiAxMDAwIH0pXG4gICAgICAkKCcjdXAnKS5yb3RhdGUoeyBhbmdsZTogMCwgYW5pbWF0ZVRvOiAzNjAsIGR1cmF0aW9uOiAxMDAwIH0pXG4gICAgfSxcbiAgICBwYWdpbmF0aW9uOiB0cnVlLFxuICAgIGxvb3A6IGZhbHNlLFxuICAgIGtleWJvYXJkOiB0cnVlLFxuICAgIHJlc3BvbnNpdmVGYWxsYmFjazogNjAwXG4gIH0pO1xuXG4gICR1cC5jbGljaygoKSA9PiB7XG4gICAgJG1haW4ubW92ZVVwKCk7XG4gIH0pO1xuICAkZG93bi5hZGQoJyNkb3duTGFiZWwnKS5jbGljaygoKSA9PiB7XG4gICAgJG1haW4ubW92ZURvd24oKTtcbiAgfSk7XG5cbiAgdG9nZ2xlT3ZlcmxheSgnI2dvb2RpbnRoaXN3b3JsZCcsICcjcHJvamVjdDEnKTtcbiAgdG9nZ2xlT3ZlcmxheSgnI29tbmlib29rcycsICcjcHJvamVjdDInKTtcbiAgdG9nZ2xlT3ZlcmxheSgnI2RqY2l0eScsICcjcHJvamVjdDMnKTtcbiAgdG9nZ2xlT3ZlcmxheSgnI3N0b2NrJywgJyNwcm9qZWN0NCcpO1xuXG4gIGNvbnN0IHRocm90dGxlZFJlc2l6ZSA9IChmdW5jdGlvbiB0aHJvdHRsZWRSZXNpemUoKSB7XG4gICAgdmFyIGxhc3QsIGRlZmVyVGltZXIsIHRocmVzaGhvbGQgPSA3NTtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgbm93ID0gKyhuZXcgRGF0ZSgpKTtcbiAgICAgIGlmIChsYXN0ICYmIG5vdyA8IGxhc3QgKyB0aHJlc2hob2xkKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChkZWZlclRpbWVyKTtcbiAgICAgICAgZGVmZXJUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgbGFzdCA9IG5vdztcbiAgICAgICAgICByZXNwb25zaXZlUmVzaXplKCk7XG4gICAgICAgIH0sIHRocmVzaGhvbGQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGFzdCA9IG5vdztcbiAgICAgICAgcmVzcG9uc2l2ZVJlc2l6ZSgpO1xuICAgICAgfVxuICAgIH07XG4gIH0pKCk7XG5cbiAgcmVzcG9uc2l2ZVJlc2l6ZSgpO1xuICAkKHdpbmRvdykucmVzaXplKHRocm90dGxlZFJlc2l6ZSk7XG5cbiAgZnVuY3Rpb24gcmVzcG9uc2l2ZVJlc2l6ZSgpIHtcbiAgICB2YXIgd2lkdGggPSAkKGRvY3VtZW50KS53aWR0aCgpO1xuICAgIGlmICh3aWR0aCA8IDcwMCkge1xuICAgICAgJCgnLmNvbHVtbicpLmNzcyh7IGRpc3BsYXk6ICdibG9jaycgfSk7XG4gICAgICAkKCcucHJvamVjdE92ZXJsYXknKS5jc3MoeyAnbWFyZ2luLWxlZnQnOiAnOThweCcgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoJy5jb2x1bW4nKS5jc3MoeyBkaXNwbGF5OiAnaW5saW5lLWZsZXgnIH0pO1xuICAgICAgJCgnLnByb2plY3RPdmVybGF5JykuY3NzKHsgJ21hcmdpbi1sZWZ0JzogJzIycHgnIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZU92ZXJsYXkocHJvamVjdCwgb3ZlcmxheSkge1xuICAgICQocHJvamVjdCkubW91c2VlbnRlcigoKSA9PiB7XG4gICAgICAkKG92ZXJsYXkpLmNzcyh7ICdkaXNwbGF5JzogJ2Jsb2NrJyB9KVxuICAgIH0pO1xuICAgICQob3ZlcmxheSkubW91c2VsZWF2ZSgoKSA9PiB7XG4gICAgICAkKG92ZXJsYXkpLmNzcyh7ICdkaXNwbGF5JzogJ25vbmUnIH0pXG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFuc2l0aW9uKHBhZ2UpIHtcbiAgICBsZXQgZGlyZWN0aW9uID0gcGFnZSA9PT0gMTtcbiAgICBsZXQgY29sb3JzID0gZGlyZWN0aW9uID8gWydmaXJzdENvbG9yJywgJ3NlY29uZENvbG9yJ10gOiBbJ3NlY29uZENvbG9yJywgJ2ZpcnN0Q29sb3InXTtcbiAgICBsZXQgdG9nZ2xlQXJyb3cgPSBkaXJlY3Rpb24gPyBbJ3Nob3cnLCAnaGlkZSddIDogWydoaWRlJywgJ3Nob3cnXVxuICAgICRib2R5LnJlbW92ZUNsYXNzKGNvbG9yc1sxXSkuYWRkQ2xhc3MoY29sb3JzWzBdKTtcbiAgICAkZG93blt0b2dnbGVBcnJvd1swXV0oMTIwMCk7XG4gICAgJHVwW3RvZ2dsZUFycm93WzFdXSgxMjAwKTtcbiAgfVxufSk7XG4iXX0=
