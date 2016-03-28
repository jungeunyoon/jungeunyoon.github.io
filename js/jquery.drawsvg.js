/*!
 * jQuery DrawSVG v1.0.1 (Nov 05 2015) - http://lcdsantos.github.io/jquery-drawsvg/
 *
 * Copyright (c) 2015 Leonardo Santos; MIT License
 *
 */

(function($) {
  'use strict';

  var pluginName = 'drawsvg',
      defaults = {
        duration: 1000,
        stagger: 200,
        easing: 'swing',
        reverse: false,
        callback: $.noop
      },
      DrawSvg = (function() {
        var fn = function fn(elm, options) {
          var _this = this,
              opts = $.extend(defaults, options);

          _this.$elm = $(elm);

          if ( !_this.$elm.is('svg') )
            return;

          _this.options = opts;
          _this.$paths = _this.$elm.find('path');

          _this.totalDuration = opts.duration + (opts.stagger * _this.$paths.length);
          _this.duration = opts.duration / _this.totalDuration;

          _this.$paths.each(function(index, elm) {
            var pathLength = elm.getTotalLength();

            elm.pathLen = pathLength;
            elm.delay = (opts.stagger * index) / _this.totalDuration;
            elm.style.strokeDasharray = [pathLength, pathLength].join(' ');
            elm.style.strokeDashoffset = pathLength;
          });

          _this.$elm.attr('class', function(index, classNames) {
            return [classNames, pluginName + '-initialized'].join(' ');
          });
        };

        fn.prototype.getVal = function(p, easing) {
          return 1 - $.easing[easing](p, p, 0, 1, 1);
        };

        fn.prototype.progress = function progress(prog) {
          var _this = this,
              opts = _this.options,
              length = _this.$paths.length,
              duration = _this.duration,
              stagger = opts.stagger;

          _this.$paths.each(function(index, elm) {
            var elmStyle = elm.style;

            if ( prog === 1 ) {
              elmStyle.strokeDashoffset = 0;
              
      document.getElementById('hideaway').style.display='block';
       document.getElementById('hideaway1').style.display='block';

            } else if ( prog == 0  || prog < .09) {
            
                  document.getElementById('hideaway').style.display='none';
                  document.getElementById('hideaway1').style.display='none';
              elmStyle.strokeDashoffset = elm.pathLen + 'px';
            } else if ( prog >= elm.delay && prog <= duration + elm.delay ) {
              var p = ((prog - elm.delay) / duration);
              elmStyle.strokeDashoffset = ((_this.getVal(p, opts.easing) * elm.pathLen) * (opts.reverse ? -1 : 1)) + 'px';
            }
          });
        };
        

        fn.prototype.animate = function animate() {
          var _this = this;

          _this.$elm.attr('class', function(index, classNames) {
            return [classNames, pluginName + '-animating'].join(' ');
          });

          $({ len: 0 }).animate({
            len: 1
          }, {
            easing: 'linear',
            duration: _this.totalDuration,
            step: function(now, fx) {
              _this.progress.call(_this, now / fx.end);
            },
            complete: function() {
              _this.options.callback.call(this);

              _this.$elm.attr('class', function(index, classNames) {
                return classNames.replace(pluginName + '-animating', '');
              });
            }
          });
        };

        return fn;
      })();

  // A really lightweight plugin wrapper around the constructor,
  // preventing against multiple instantiations
  $.fn[pluginName] = function(method, args) {
    return this.each(function() {
      var data = $.data(this, pluginName);

      ( data && ''+method === method && data[method] ) ?
        data[method](args) :
        $.data(this, pluginName, new DrawSvg(this, method));
    });
  };
}(jQuery));