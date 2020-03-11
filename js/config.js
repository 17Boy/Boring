(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            console.log(clientWidth);
            if (!clientWidth) return;
            docEl.style.fontSize = 100 * (clientWidth / 375) + 'px';
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);


const ajaxData = function ajaxData(url, params, callBack, type) {
    $.ajax({
        url: url,
        type: type || "post",
        async: true,
        data: params,
        dataType: 'json',
        success: function (ret) {
            if (ret) {
                callBack(ret)
            } else {
                alert(ret.msg || '当前网络不给力')
            }
        },
        error: function (err) {
            alert(err.msg || '当前网络不给力')
        }
    })
};