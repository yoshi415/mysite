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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzb3VyY2UvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsRUFBRSxZQUFNO0FBQ0osUUFBTSxRQUFRLEVBQUUsT0FBRixDQUFSLENBREY7QUFFSixRQUFNLFFBQVEsRUFBRSxNQUFGLENBQVIsQ0FGRjtBQUdKLFFBQU0sTUFBTSxFQUFFLEtBQUYsQ0FBTixDQUhGO0FBSUosUUFBTSxRQUFRLEVBQUUsT0FBRixDQUFSLENBSkY7QUFLSixRQUFNLGFBQWEsRUFBRSxZQUFGLENBQWIsQ0FMRjtBQU1KLFFBQU0sUUFBUSxFQUFFLGtCQUFGLENBQVIsQ0FORjs7QUFRSixVQUFNLGNBQU4sQ0FBcUI7QUFDakIsZ0JBQVEsYUFBUjtBQUNBLHVCQUFlLElBQWY7QUFDQSxvQkFBWSxvQkFBQyxLQUFELEVBQVc7QUFDbkIsdUJBQVcsS0FBWCxFQURtQjtTQUFYO0FBR1osb0JBQVksSUFBWjtBQUNBLGNBQU0sS0FBTjtBQUNBLGtCQUFVLElBQVY7QUFDQSw0QkFBb0IsR0FBcEI7S0FUSixFQVJJOztBQW9CSixRQUFJLEtBQUosQ0FBVSxZQUFNO0FBQ1osY0FBTSxNQUFOLEdBRFk7S0FBTixDQUFWLENBcEJJO0FBdUJKLFVBQU0sR0FBTixDQUFVLFlBQVYsRUFBd0IsS0FBeEIsQ0FBOEIsWUFBTTtBQUNoQyxjQUFNLFFBQU4sR0FEZ0M7S0FBTixDQUE5QixDQXZCSTs7QUEyQkosa0JBQWMsa0JBQWQsRUFBa0MsV0FBbEMsRUEzQkk7QUE0Qkosa0JBQWMsWUFBZCxFQUE0QixXQUE1QixFQTVCSTtBQTZCSixrQkFBYyxTQUFkLEVBQXlCLFdBQXpCLEVBN0JJO0FBOEJKLGtCQUFjLFFBQWQsRUFBd0IsV0FBeEIsRUE5Qkk7O0FBaUNKLGFBQVMsYUFBVCxDQUF1QixPQUF2QixFQUFnQyxPQUFoQyxFQUF5QztBQUN2QyxVQUFFLE9BQUYsRUFBVyxVQUFYLENBQXNCLFlBQU07QUFDMUIsY0FBRSxPQUFGLEVBQVcsR0FBWCxDQUFlLEVBQUUsV0FBVyxPQUFYLEVBQWpCLEVBRDBCO1NBQU4sQ0FBdEIsQ0FEdUM7QUFJdkMsVUFBRSxPQUFGLEVBQVcsVUFBWCxDQUFzQixZQUFNO0FBQzFCLGNBQUUsT0FBRixFQUFXLEdBQVgsQ0FBZSxFQUFFLFdBQVcsTUFBWCxFQUFqQixFQUQwQjtTQUFOLENBQXRCLENBSnVDO0tBQXpDOztBQVNBLGFBQVMsVUFBVCxDQUFvQixJQUFwQixFQUEwQjtBQUN0QixZQUFJLFlBQVksU0FBUyxDQUFULENBRE07QUFFdEIsWUFBSSxTQUFTLFlBQVksQ0FBQyxZQUFELEVBQWUsYUFBZixDQUFaLEdBQTRDLENBQUMsYUFBRCxFQUFnQixZQUFoQixDQUE1QyxDQUZTO0FBR3RCLFlBQUksY0FBYyxZQUFZLENBQUMsTUFBRCxFQUFTLE1BQVQsQ0FBWixHQUErQixDQUFDLE1BQUQsRUFBUyxNQUFULENBQS9CLENBSEk7QUFJdEIsY0FBTSxXQUFOLENBQWtCLE9BQU8sQ0FBUCxDQUFsQixFQUE2QixRQUE3QixDQUFzQyxPQUFPLENBQVAsQ0FBdEMsRUFKc0I7QUFLdEIsY0FBTSxZQUFZLENBQVosQ0FBTixFQUFzQixJQUF0QixFQUxzQjtBQU10QixZQUFJLFlBQVksQ0FBWixDQUFKLEVBQW9CLElBQXBCLEVBTnNCO0tBQTFCO0NBMUNGLENBQUYiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJCgoKSA9PiB7XG4gICAgY29uc3QgJG1haW4gPSAkKCcubWFpbicpO1xuICAgIGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuICAgIGNvbnN0ICR1cCA9ICQoJyN1cCcpO1xuICAgIGNvbnN0ICRkb3duID0gJCgnI2Rvd24nKTtcbiAgICBjb25zdCAkZG93bkxhYmVsID0gJCgnI2Rvd25MYWJlbCcpO1xuICAgIGNvbnN0ICRnb29kID0gJCgnI2dvb2RpbnRoaXN3b3JsZCcpO1xuXG4gICAgJG1haW4ub25lcGFnZV9zY3JvbGwoe1xuICAgICAgICBlYXNpbmc6ICdlYXNlLWluLW91dCcsXG4gICAgICAgIGFuaW1hdGlvblRpbWU6IDEwMDAsXG4gICAgICAgIGJlZm9yZU1vdmU6IChpbmRleCkgPT4ge1xuICAgICAgICAgICAgdHJhbnNpdGlvbihpbmRleCk7XG4gICAgICAgIH0sXG4gICAgICAgIHBhZ2luYXRpb246IHRydWUsXG4gICAgICAgIGxvb3A6IGZhbHNlLFxuICAgICAgICBrZXlib2FyZDogdHJ1ZSxcbiAgICAgICAgcmVzcG9uc2l2ZUZhbGxiYWNrOiA2MDBcbiAgICB9KTtcblxuICAgICR1cC5jbGljaygoKSA9PiB7XG4gICAgICAgICRtYWluLm1vdmVVcCgpO1xuICAgIH0pO1xuICAgICRkb3duLmFkZCgnI2Rvd25MYWJlbCcpLmNsaWNrKCgpID0+IHtcbiAgICAgICAgJG1haW4ubW92ZURvd24oKTtcbiAgICB9KTtcblxuICAgIHRvZ2dsZU92ZXJsYXkoJyNnb29kaW50aGlzd29ybGQnLCAnI3Byb2plY3QxJyk7XG4gICAgdG9nZ2xlT3ZlcmxheSgnI29tbmlib29rcycsICcjcHJvamVjdDInKTtcbiAgICB0b2dnbGVPdmVybGF5KCcjZGpjaXR5JywgJyNwcm9qZWN0MycpO1xuICAgIHRvZ2dsZU92ZXJsYXkoJyNzdG9jaycsICcjcHJvamVjdDQnKTtcbiAgIFxuXG4gICAgZnVuY3Rpb24gdG9nZ2xlT3ZlcmxheShwcm9qZWN0LCBvdmVybGF5KSB7XG4gICAgICAkKHByb2plY3QpLm1vdXNlZW50ZXIoKCkgPT4ge1xuICAgICAgICAkKG92ZXJsYXkpLmNzcyh7ICdkaXNwbGF5JzogJ2Jsb2NrJ30pXG4gICAgICB9KTtcbiAgICAgICQob3ZlcmxheSkubW91c2VsZWF2ZSgoKSA9PiB7XG4gICAgICAgICQob3ZlcmxheSkuY3NzKHsgJ2Rpc3BsYXknOiAnbm9uZSd9KVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJhbnNpdGlvbihwYWdlKSB7XG4gICAgICAgIGxldCBkaXJlY3Rpb24gPSBwYWdlID09PSAxO1xuICAgICAgICBsZXQgY29sb3JzID0gZGlyZWN0aW9uID8gWydmaXJzdENvbG9yJywgJ3NlY29uZENvbG9yJ10gOiBbJ3NlY29uZENvbG9yJywgJ2ZpcnN0Q29sb3InXTtcbiAgICAgICAgbGV0IHRvZ2dsZUFycm93ID0gZGlyZWN0aW9uID8gWydzaG93JywgJ2hpZGUnXSA6IFsnaGlkZScsICdzaG93J11cbiAgICAgICAgJGJvZHkucmVtb3ZlQ2xhc3MoY29sb3JzWzFdKS5hZGRDbGFzcyhjb2xvcnNbMF0pO1xuICAgICAgICAkZG93blt0b2dnbGVBcnJvd1swXV0oMTIwMCk7XG4gICAgICAgICR1cFt0b2dnbGVBcnJvd1sxXV0oMTIwMCk7XG4gICAgfVxufSk7XG4iXX0=
