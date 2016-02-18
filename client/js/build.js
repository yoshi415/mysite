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
      $(".column").css({ display: 'block', 'margin': 'auto' });
    } else {
      $(".column").css({ display: 'inline-flex', 'margin': 'auto' });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzb3VyY2UvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsRUFBRSxZQUFNO0FBQ04sTUFBTSxRQUFRLEVBQUUsT0FBRixDQUFSLENBREE7QUFFTixNQUFNLFFBQVEsRUFBRSxNQUFGLENBQVIsQ0FGQTtBQUdOLE1BQU0sTUFBTSxFQUFFLEtBQUYsQ0FBTixDQUhBO0FBSU4sTUFBTSxRQUFRLEVBQUUsT0FBRixDQUFSLENBSkE7QUFLTixNQUFNLGFBQWEsRUFBRSxZQUFGLENBQWIsQ0FMQTtBQU1OLE1BQU0sUUFBUSxFQUFFLGtCQUFGLENBQVIsQ0FOQTs7QUFRTixRQUFNLGNBQU4sQ0FBcUI7QUFDbkIsWUFBUSxhQUFSO0FBQ0EsbUJBQWUsSUFBZjtBQUNBLGdCQUFZLG9CQUFDLEtBQUQsRUFBVztBQUNyQixpQkFBVyxLQUFYLEVBRHFCO0FBRXJCLFFBQUUsT0FBRixFQUFXLE1BQVgsQ0FBa0IsRUFBRSxPQUFPLENBQVAsRUFBVSxXQUFXLEdBQVgsRUFBZ0IsVUFBVSxJQUFWLEVBQTlDLEVBRnFCO0FBR3JCLFFBQUUsS0FBRixFQUFTLE1BQVQsQ0FBZ0IsRUFBRSxPQUFPLENBQVAsRUFBVSxXQUFXLEdBQVgsRUFBZ0IsVUFBVSxJQUFWLEVBQTVDLEVBSHFCO0tBQVg7QUFLWixnQkFBWSxJQUFaO0FBQ0EsVUFBTSxLQUFOO0FBQ0EsY0FBVSxJQUFWO0FBQ0Esd0JBQW9CLEdBQXBCO0dBWEYsRUFSTTs7QUFzQk4sTUFBSSxLQUFKLENBQVUsWUFBTTtBQUNkLFVBQU0sTUFBTixHQURjO0dBQU4sQ0FBVixDQXRCTTtBQXlCTixRQUFNLEdBQU4sQ0FBVSxZQUFWLEVBQXdCLEtBQXhCLENBQThCLFlBQU07QUFDbEMsVUFBTSxRQUFOLEdBRGtDO0dBQU4sQ0FBOUIsQ0F6Qk07O0FBNkJOLGdCQUFjLGtCQUFkLEVBQWtDLFdBQWxDLEVBN0JNO0FBOEJOLGdCQUFjLFlBQWQsRUFBNEIsV0FBNUIsRUE5Qk07QUErQk4sZ0JBQWMsU0FBZCxFQUF5QixXQUF6QixFQS9CTTtBQWdDTixnQkFBYyxRQUFkLEVBQXdCLFdBQXhCLEVBaENNOztBQWtDTixNQUFJLGtCQUFrQixTQUFVLGVBQVQsR0FBMkI7QUFDaEQsUUFBSSxJQUFKO1FBQVUsVUFBVjtRQUFzQixhQUFhLEVBQWIsQ0FEMEI7QUFFaEQsV0FBTyxZQUFXO0FBQ2hCLFVBQUksTUFBTSxDQUFFLElBQUksSUFBSixFQUFGLENBRE07QUFFaEIsVUFBSSxRQUFRLE1BQU0sT0FBTyxVQUFQLEVBQW1CO0FBQ25DLHFCQUFhLFVBQWIsRUFEbUM7QUFFbkMscUJBQWEsV0FBVyxZQUFXO0FBQ2pDLGlCQUFPLEdBQVAsQ0FEaUM7QUFFakMsNkJBRmlDO1NBQVgsRUFHckIsVUFIVSxDQUFiLENBRm1DO09BQXJDLE1BTU87QUFDTCxlQUFPLEdBQVAsQ0FESztBQUVMLDJCQUZLO09BTlA7S0FGSyxDQUZ5QztHQUEzQixFQUFuQixDQWxDRTs7QUFtRE4scUJBbkRNO0FBb0ROLElBQUUsTUFBRixFQUFVLE1BQVYsQ0FBaUIsZUFBakIsRUFwRE07O0FBc0ROLFdBQVMsZ0JBQVQsR0FBNEI7QUFDMUIsUUFBSSxRQUFRLEVBQUUsUUFBRixFQUFZLEtBQVosRUFBUixDQURzQjtBQUUxQixRQUFJLFFBQVEsR0FBUixFQUFhO0FBQ2YsUUFBRSxTQUFGLEVBQWEsR0FBYixDQUFpQixFQUFFLFNBQVMsT0FBVCxFQUFrQixVQUFVLE1BQVYsRUFBckMsRUFEZTtLQUFqQixNQUVPO0FBQ0wsUUFBRSxTQUFGLEVBQWEsR0FBYixDQUFpQixFQUFFLFNBQVMsYUFBVCxFQUF3QixVQUFVLE1BQVYsRUFBM0MsRUFESztLQUZQO0dBRkY7O0FBU0EsV0FBUyxhQUFULENBQXVCLE9BQXZCLEVBQWdDLE9BQWhDLEVBQXlDO0FBQ3ZDLE1BQUUsT0FBRixFQUFXLFVBQVgsQ0FBc0IsWUFBTTtBQUMxQixRQUFFLE9BQUYsRUFBVyxHQUFYLENBQWUsRUFBRSxXQUFXLE9BQVgsRUFBakIsRUFEMEI7S0FBTixDQUF0QixDQUR1QztBQUl2QyxNQUFFLE9BQUYsRUFBVyxVQUFYLENBQXNCLFlBQU07QUFDMUIsUUFBRSxPQUFGLEVBQVcsR0FBWCxDQUFlLEVBQUUsV0FBVyxNQUFYLEVBQWpCLEVBRDBCO0tBQU4sQ0FBdEIsQ0FKdUM7R0FBekM7O0FBU0EsV0FBUyxVQUFULENBQW9CLElBQXBCLEVBQTBCO0FBQ3hCLFFBQUksWUFBWSxTQUFTLENBQVQsQ0FEUTtBQUV4QixRQUFJLFNBQVMsWUFBWSxDQUFDLFlBQUQsRUFBZSxhQUFmLENBQVosR0FBNEMsQ0FBQyxhQUFELEVBQWdCLFlBQWhCLENBQTVDLENBRlc7QUFHeEIsUUFBSSxjQUFjLFlBQVksQ0FBQyxNQUFELEVBQVMsTUFBVCxDQUFaLEdBQStCLENBQUMsTUFBRCxFQUFTLE1BQVQsQ0FBL0IsQ0FITTtBQUl4QixVQUFNLFdBQU4sQ0FBa0IsT0FBTyxDQUFQLENBQWxCLEVBQTZCLFFBQTdCLENBQXNDLE9BQU8sQ0FBUCxDQUF0QyxFQUp3QjtBQUt4QixVQUFNLFlBQVksQ0FBWixDQUFOLEVBQXNCLElBQXRCLEVBTHdCO0FBTXhCLFFBQUksWUFBWSxDQUFaLENBQUosRUFBb0IsSUFBcEIsRUFOd0I7R0FBMUI7Q0F4RUEsQ0FBRiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIkKCgpID0+IHtcbiAgY29uc3QgJG1haW4gPSAkKCcubWFpbicpO1xuICBjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcbiAgY29uc3QgJHVwID0gJCgnI3VwJyk7XG4gIGNvbnN0ICRkb3duID0gJCgnI2Rvd24nKTtcbiAgY29uc3QgJGRvd25MYWJlbCA9ICQoJyNkb3duTGFiZWwnKTtcbiAgY29uc3QgJGdvb2QgPSAkKCcjZ29vZGludGhpc3dvcmxkJyk7XG5cbiAgJG1haW4ub25lcGFnZV9zY3JvbGwoe1xuICAgIGVhc2luZzogJ2Vhc2UtaW4tb3V0JyxcbiAgICBhbmltYXRpb25UaW1lOiAxMDAwLFxuICAgIGJlZm9yZU1vdmU6IChpbmRleCkgPT4ge1xuICAgICAgdHJhbnNpdGlvbihpbmRleCk7XG4gICAgICAkKCcjZG93bicpLnJvdGF0ZSh7IGFuZ2xlOiAwLCBhbmltYXRlVG86IDM2MCwgZHVyYXRpb246IDEwMDAgfSlcbiAgICAgICQoJyN1cCcpLnJvdGF0ZSh7IGFuZ2xlOiAwLCBhbmltYXRlVG86IDM2MCwgZHVyYXRpb246IDEwMDAgfSlcbiAgICB9LFxuICAgIHBhZ2luYXRpb246IHRydWUsXG4gICAgbG9vcDogZmFsc2UsXG4gICAga2V5Ym9hcmQ6IHRydWUsXG4gICAgcmVzcG9uc2l2ZUZhbGxiYWNrOiA2MDBcbiAgfSk7XG5cbiAgJHVwLmNsaWNrKCgpID0+IHtcbiAgICAkbWFpbi5tb3ZlVXAoKTtcbiAgfSk7XG4gICRkb3duLmFkZCgnI2Rvd25MYWJlbCcpLmNsaWNrKCgpID0+IHtcbiAgICAkbWFpbi5tb3ZlRG93bigpO1xuICB9KTtcblxuICB0b2dnbGVPdmVybGF5KCcjZ29vZGludGhpc3dvcmxkJywgJyNwcm9qZWN0MScpO1xuICB0b2dnbGVPdmVybGF5KCcjb21uaWJvb2tzJywgJyNwcm9qZWN0MicpO1xuICB0b2dnbGVPdmVybGF5KCcjZGpjaXR5JywgJyNwcm9qZWN0MycpO1xuICB0b2dnbGVPdmVybGF5KCcjc3RvY2snLCAnI3Byb2plY3Q0Jyk7XG5cbiAgbGV0IHRocm90dGxlZFJlc2l6ZSA9IChmdW5jdGlvbiB0aHJvdHRsZWRSZXNpemUoKSB7XG4gICAgdmFyIGxhc3QsIGRlZmVyVGltZXIsIHRocmVzaGhvbGQgPSA3NTtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgbm93ID0gKyhuZXcgRGF0ZSgpKTtcbiAgICAgIGlmIChsYXN0ICYmIG5vdyA8IGxhc3QgKyB0aHJlc2hob2xkKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChkZWZlclRpbWVyKTtcbiAgICAgICAgZGVmZXJUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgbGFzdCA9IG5vdztcbiAgICAgICAgICByZXNwb25zaXZlUmVzaXplKCk7XG4gICAgICAgIH0sIHRocmVzaGhvbGQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGFzdCA9IG5vdztcbiAgICAgICAgcmVzcG9uc2l2ZVJlc2l6ZSgpO1xuICAgICAgfVxuICAgIH07XG4gIH0pKCk7XG5cbiAgcmVzcG9uc2l2ZVJlc2l6ZSgpO1xuICAkKHdpbmRvdykucmVzaXplKHRocm90dGxlZFJlc2l6ZSk7XG5cbiAgZnVuY3Rpb24gcmVzcG9uc2l2ZVJlc2l6ZSgpIHtcbiAgICB2YXIgd2lkdGggPSAkKGRvY3VtZW50KS53aWR0aCgpO1xuICAgIGlmICh3aWR0aCA8IDcwMCkge1xuICAgICAgJChcIi5jb2x1bW5cIikuY3NzKHsgZGlzcGxheTogJ2Jsb2NrJywgJ21hcmdpbic6ICdhdXRvJyB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgJChcIi5jb2x1bW5cIikuY3NzKHsgZGlzcGxheTogJ2lubGluZS1mbGV4JywgJ21hcmdpbic6ICdhdXRvJyB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB0b2dnbGVPdmVybGF5KHByb2plY3QsIG92ZXJsYXkpIHtcbiAgICAkKHByb2plY3QpLm1vdXNlZW50ZXIoKCkgPT4ge1xuICAgICAgJChvdmVybGF5KS5jc3MoeyAnZGlzcGxheSc6ICdibG9jaycgfSlcbiAgICB9KTtcbiAgICAkKG92ZXJsYXkpLm1vdXNlbGVhdmUoKCkgPT4ge1xuICAgICAgJChvdmVybGF5KS5jc3MoeyAnZGlzcGxheSc6ICdub25lJyB9KVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhbnNpdGlvbihwYWdlKSB7XG4gICAgbGV0IGRpcmVjdGlvbiA9IHBhZ2UgPT09IDE7XG4gICAgbGV0IGNvbG9ycyA9IGRpcmVjdGlvbiA/IFsnZmlyc3RDb2xvcicsICdzZWNvbmRDb2xvciddIDogWydzZWNvbmRDb2xvcicsICdmaXJzdENvbG9yJ107XG4gICAgbGV0IHRvZ2dsZUFycm93ID0gZGlyZWN0aW9uID8gWydzaG93JywgJ2hpZGUnXSA6IFsnaGlkZScsICdzaG93J11cbiAgICAkYm9keS5yZW1vdmVDbGFzcyhjb2xvcnNbMV0pLmFkZENsYXNzKGNvbG9yc1swXSk7XG4gICAgJGRvd25bdG9nZ2xlQXJyb3dbMF1dKDEyMDApO1xuICAgICR1cFt0b2dnbGVBcnJvd1sxXV0oMTIwMCk7XG4gIH1cbn0pO1xuIl19
