(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(function () {
  var $main = $('.main');
  var $body = $('body');
  var direction = false;

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

  $('#up').click(function () {
    $main.moveUp();
  });
  $('#down').click(function () {
    $main.moveDown();
  });

  function changeColor() {
    direction = !direction;
    var colors = direction ? ['firstColor', 'secondColor'] : ['secondColor', 'firstColor'];
    $body.removeClass(colors[0]).addClass(colors[1]);
  }
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzb3VyY2UvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsRUFBRSxZQUFNO0FBQ04sTUFBTSxRQUFRLEVBQUUsT0FBRixDQUFSLENBREE7QUFFTixNQUFNLFFBQVEsRUFBRSxNQUFGLENBQVIsQ0FGQTtBQUdOLE1BQUksWUFBWSxLQUFaLENBSEU7O0FBS04sUUFBTSxjQUFOLENBQXFCO0FBQ2YsWUFBUSxhQUFSO0FBQ0EsbUJBQWUsSUFBZjs7QUFFQSxlQUFXLFdBQVg7QUFDQSxnQkFBWSxJQUFaO0FBQ0EsVUFBTSxLQUFOO0FBQ0EsY0FBVSxJQUFWO0FBQ0Esd0JBQW9CLEdBQXBCO0dBUk4sRUFMTTs7QUFnQk4sSUFBRSxLQUFGLEVBQVMsS0FBVCxDQUFlLFlBQU07QUFDakIsVUFBTSxNQUFOLEdBRGlCO0dBQU4sQ0FBZixDQWhCTTtBQW1CTixJQUFFLE9BQUYsRUFBVyxLQUFYLENBQWlCLFlBQU07QUFDbkIsVUFBTSxRQUFOLEdBRG1CO0dBQU4sQ0FBakIsQ0FuQk07O0FBdUJOLFdBQVMsV0FBVCxHQUF1QjtBQUNyQixnQkFBWSxDQUFDLFNBQUQsQ0FEUztBQUVyQixRQUFJLFNBQVMsWUFBWSxDQUFDLFlBQUQsRUFBZSxhQUFmLENBQVosR0FBNEMsQ0FBRSxhQUFGLEVBQWlCLFlBQWpCLENBQTVDLENBRlE7QUFHckIsVUFBTSxXQUFOLENBQWtCLE9BQU8sQ0FBUCxDQUFsQixFQUE2QixRQUE3QixDQUFzQyxPQUFPLENBQVAsQ0FBdEMsRUFIcUI7R0FBdkI7Q0F2QkEsQ0FBRiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIkKCgpID0+IHtcbiAgY29uc3QgJG1haW4gPSAkKCcubWFpbicpO1xuICBjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcbiAgbGV0IGRpcmVjdGlvbiA9IGZhbHNlO1xuXG4gICRtYWluLm9uZXBhZ2Vfc2Nyb2xsKHtcbiAgICAgICAgZWFzaW5nOiAnZWFzZS1pbi1vdXQnLFxuICAgICAgICBhbmltYXRpb25UaW1lOiAxMDAwLFxuICAgICAgICAvLyBiZWZvcmVNb3ZlOiBjaGFuZ2VDb2xvcixcbiAgICAgICAgYWZ0ZXJNb3ZlOiBjaGFuZ2VDb2xvcixcbiAgICAgICAgcGFnaW5hdGlvbjogdHJ1ZSxcbiAgICAgICAgbG9vcDogZmFsc2UsXG4gICAgICAgIGtleWJvYXJkOiB0cnVlLFxuICAgICAgICByZXNwb25zaXZlRmFsbGJhY2s6IDYwMFxuICB9KTtcblxuICAkKCcjdXAnKS5jbGljaygoKSA9PiB7XG4gICAgICAkbWFpbi5tb3ZlVXAoKTtcbiAgfSk7XG4gICQoJyNkb3duJykuY2xpY2soKCkgPT4ge1xuICAgICAgJG1haW4ubW92ZURvd24oKTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gY2hhbmdlQ29sb3IoKSB7XG4gICAgZGlyZWN0aW9uID0gIWRpcmVjdGlvbjtcbiAgICBsZXQgY29sb3JzID0gZGlyZWN0aW9uID8gWydmaXJzdENvbG9yJywgJ3NlY29uZENvbG9yJ10gOiBbICdzZWNvbmRDb2xvcicsICdmaXJzdENvbG9yJyBdO1xuICAgICRib2R5LnJlbW92ZUNsYXNzKGNvbG9yc1swXSkuYWRkQ2xhc3MoY29sb3JzWzFdKTtcbiAgfVxuXG5cbn0pOyJdfQ==
