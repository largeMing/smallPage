// //出现点透时使用此方法
// $("#id_1").tap(function (e, e1) {
// 	e1.preventDefault();
// 	 //事件处理方法
// 	//这里写具体实现代码
// });
// //正常点击使用此方法
// $("#id_1").tap(function (e, e1) {
// 	//正常点击事件写法
// });

//touch事件
(function ($) {
    var touchevent = function () {
        var touchs = {};
        var topt = {
            tapmaxtime: 500, //触屏大于这个时间不当作tap
            swipemin: 5, //触发touchmove的敏感度
            swipehorizontal: 10, //swipe的触发垂直方向move必须大于于这个距离
            swipevertical: 10, //swipe的触发水平方向move必须大于这个距离
            scale: 8, //最小放缩
            longTapmintime: 750 //长按时间间隔，大于此时间触发长按
        };
        function rpos(e) {
            var x, y, x1, y1;
            for (var i = 0; i < e.touches.length; i++) {
                x1 = touchs[i].x1;
                y1 = touchs[i].y1;
                x = parseInt(e.touches[i].pageX - x1);
                y = parseInt(e.touches[i].pageY - y1);
                if (Math.abs(x) > topt.swipemin) {
                    touchs[i].x1 = e.touches[i].pageX;
                    touchs[i].x2 = x1;
                } else {
                    x = 0;
                }
                if (Math.abs(y) > topt.swipemin) {
                    touchs[i].y1 = e.touches[i].pageY;
                    touchs[i].y2 = y1;
                } else {
                    y = 0;
                }
                touchs[i].x = x;
                touchs[i].y = y;
            }
        }
        function fnStart(e) {
            for (var i = 0; i < e.touches.length; i++) {
                touchs[i] = { x1: e.touches[i].pageX, y1: e.touches[i].pageY };
            }
            if (e.touches.length === 1) {
                touchs.tap = true;
                touchs.touch_start_time = new Date().getTime();
                touchs.longTapTimeout = setTimeout(function () {
                    touchs.longTapTimeout = null;
                    $(e.target).trigger('longTap');
                }, topt.longTapmintime);
            } else {
                touchs.tap = false;
            }
        }
        function fnMove(e) {
            touchs.tap = false;
            touchs.longTapTimeout && clearTimeout(touchs.longTapTimeout);
            rpos(e);
            if (e.touches.length === 1) {
                var mx = touchs[0].x;
                var my = touchs[0].y;
                if (Math.abs(mx) > 0 || Math.abs(my) > 0) {
                    $(e.target).trigger('swipe', { x: mx, y: my });
                    if (Math.abs(mx) > Math.abs(my)) {
                        if (Math.abs(mx) > topt.swipevertical) {
                            mx > 0 ? $(e.target).trigger('swipeRight') : $(e.target).trigger('swipeLeft');
                        }
                    } else if (Math.abs(my) > topt.swipehorizontal) {
                        my > 0 ? $(e.target).trigger('swipeDown') : $(e.target).trigger('swipeUp');
                    }
                }
            } else if (e.touches.length === 2) {
                if (Math.abs(touchs[0].x) > 0 || Math.abs(touchs[0].y) > 0 || Math.abs(touchs[1].x) > 0 || Math.abs(touchs[1].y) > 0) {
                    var x = touchs[0].x2 - touchs[1].x2;
                    var y = touchs[0].y2 - touchs[1].y2;
                    var d1 = Math.sqrt(x * x + y * y);
                    x = touchs[0].x1 - touchs[1].x1;
                    y = touchs[0].y1 - touchs[1].y1;
                    var d2 = Math.sqrt(x * x + y * y);
                    var d = parseInt(d2 - d1);
                    if (Math.abs(d) > topt.scale) {
                        $(e.target).trigger('scale', d);
                    }
                }
            }
        }
        function fnEnd(e) {
            if (e.touches.length === 0) {
                touchs.longTapTimeout && clearTimeout(touchs.longTapTimeout);
                touchs.longTapTimeout = null;
                var now = new Date().getTime();
                if (now - touchs.touch_start_time < topt.tapmaxtime && touchs.tap) {
                    $(e.target).trigger('tap', e);
                }
            }
        }
        function fncance() {
            touchs.longTapTimeout && clearTimeout(touchs.longTapTimeout);
        }
        document.body.addEventListener('touchstart', fnStart, false);
        document.body.addEventListener('touchmove', fnMove, false);
        document.body.addEventListener('touchend', fnEnd, false);
        document.body.addEventListener('touchcancel', fncance, false);
    };
    touchevent();
    ['swipe', 'swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown', 'tap', 'longTap', 'scale'].forEach(function (eventName) {
        //滑动，左滑，右滑，上滑，下滑，点击，长按，两个手指放缩
        $.fn[eventName] = function (callback) { return this.on(eventName, callback) }
    });
})($);

