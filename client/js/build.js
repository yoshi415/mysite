(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(function () {
  var $main = $('.main');
  var $body = $('body');
  var $up = $('#up');
  var $down = $('#down');
  var $downLabel = $('#downLabel');

  $main.onepage_scroll({
    easing: 'ease-in-out',
    animationTime: 1000,
    beforeMove: function beforeMove(index) {
      transition(index);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzb3VyY2UvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsRUFBRSxZQUFNO0FBQ04sTUFBTSxRQUFRLEVBQUUsT0FBRixDQUFSLENBREE7QUFFTixNQUFNLFFBQVEsRUFBRSxNQUFGLENBQVIsQ0FGQTtBQUdOLE1BQU0sTUFBTSxFQUFFLEtBQUYsQ0FBTixDQUhBO0FBSU4sTUFBTSxRQUFRLEVBQUUsT0FBRixDQUFSLENBSkE7QUFLTixNQUFNLGFBQWEsRUFBRSxZQUFGLENBQWIsQ0FMQTs7QUFPTixRQUFNLGNBQU4sQ0FBcUI7QUFDZixZQUFRLGFBQVI7QUFDQSxtQkFBZSxJQUFmO0FBQ0EsZ0JBQVksb0JBQUMsS0FBRCxFQUFXO0FBQ3JCLGlCQUFXLEtBQVgsRUFEcUI7S0FBWDtBQUdaLGdCQUFZLElBQVo7QUFDQSxVQUFNLEtBQU47QUFDQSxjQUFVLElBQVY7QUFDQSx3QkFBb0IsR0FBcEI7R0FUTixFQVBNOztBQW1CTixNQUFJLEtBQUosQ0FBVSxZQUFNO0FBQ1osVUFBTSxNQUFOLEdBRFk7R0FBTixDQUFWLENBbkJNO0FBc0JOLFFBQU0sR0FBTixDQUFVLFlBQVYsRUFBd0IsS0FBeEIsQ0FBOEIsWUFBTTtBQUNoQyxVQUFNLFFBQU4sR0FEZ0M7R0FBTixDQUE5QixDQXRCTTs7QUEyQk4sV0FBUyxVQUFULENBQW9CLElBQXBCLEVBQTBCO0FBQ3hCLFFBQUksWUFBWSxTQUFTLENBQVQsQ0FEUTtBQUV4QixRQUFJLFNBQVMsWUFBWSxDQUFDLFlBQUQsRUFBZSxhQUFmLENBQVosR0FBNEMsQ0FBRSxhQUFGLEVBQWlCLFlBQWpCLENBQTVDLENBRlc7QUFHeEIsUUFBSSxjQUFjLFlBQVksQ0FBQyxNQUFELEVBQVMsTUFBVCxDQUFaLEdBQStCLENBQUMsTUFBRCxFQUFTLE1BQVQsQ0FBL0IsQ0FITTtBQUl4QixVQUFNLFdBQU4sQ0FBa0IsT0FBTyxDQUFQLENBQWxCLEVBQTZCLFFBQTdCLENBQXNDLE9BQU8sQ0FBUCxDQUF0QyxFQUp3QjtBQUt4QixVQUFNLFlBQVksQ0FBWixDQUFOLEVBQXNCLElBQXRCLEVBTHdCO0FBTXhCLFFBQUksWUFBWSxDQUFaLENBQUosRUFBb0IsSUFBcEIsRUFOd0I7R0FBMUI7Q0EzQkEsQ0FBRiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIkKCgpID0+IHtcbiAgY29uc3QgJG1haW4gPSAkKCcubWFpbicpO1xuICBjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcbiAgY29uc3QgJHVwID0gJCgnI3VwJyk7XG4gIGNvbnN0ICRkb3duID0gJCgnI2Rvd24nKTtcbiAgY29uc3QgJGRvd25MYWJlbCA9ICQoJyNkb3duTGFiZWwnKTtcblxuICAkbWFpbi5vbmVwYWdlX3Njcm9sbCh7XG4gICAgICAgIGVhc2luZzogJ2Vhc2UtaW4tb3V0JyxcbiAgICAgICAgYW5pbWF0aW9uVGltZTogMTAwMCxcbiAgICAgICAgYmVmb3JlTW92ZTogKGluZGV4KSA9PiB7XG4gICAgICAgICAgdHJhbnNpdGlvbihpbmRleCk7XG4gICAgICAgIH0sXG4gICAgICAgIHBhZ2luYXRpb246IHRydWUsXG4gICAgICAgIGxvb3A6IGZhbHNlLFxuICAgICAgICBrZXlib2FyZDogdHJ1ZSxcbiAgICAgICAgcmVzcG9uc2l2ZUZhbGxiYWNrOiA2MDBcbiAgfSk7XG5cbiAgJHVwLmNsaWNrKCgpID0+IHtcbiAgICAgICRtYWluLm1vdmVVcCgpO1xuICB9KTtcbiAgJGRvd24uYWRkKCcjZG93bkxhYmVsJykuY2xpY2soKCkgPT4ge1xuICAgICAgJG1haW4ubW92ZURvd24oKTtcbiAgfSk7XG5cblxuICBmdW5jdGlvbiB0cmFuc2l0aW9uKHBhZ2UpIHtcbiAgICBsZXQgZGlyZWN0aW9uID0gcGFnZSA9PT0gMTtcbiAgICBsZXQgY29sb3JzID0gZGlyZWN0aW9uID8gWydmaXJzdENvbG9yJywgJ3NlY29uZENvbG9yJ10gOiBbICdzZWNvbmRDb2xvcicsICdmaXJzdENvbG9yJ107XG4gICAgbGV0IHRvZ2dsZUFycm93ID0gZGlyZWN0aW9uID8gWydzaG93JywgJ2hpZGUnXSA6IFsnaGlkZScsICdzaG93J11cbiAgICAkYm9keS5yZW1vdmVDbGFzcyhjb2xvcnNbMV0pLmFkZENsYXNzKGNvbG9yc1swXSk7XG4gICAgJGRvd25bdG9nZ2xlQXJyb3dbMF1dKDEyMDApO1xuICAgICR1cFt0b2dnbGVBcnJvd1sxXV0oMTIwMCk7XG4gIH1cbn0pOyJdfQ==
