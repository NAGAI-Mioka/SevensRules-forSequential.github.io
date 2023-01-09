// 一度見たページのデザインを変える

// 描画されたとき
$(window).on("load", function () {
    var path = window.location.pathname.replace(/\//g, "-");
    if (Cookies.get("visited-" + path) === "true") {
        $("body, h1, h4").addClass("visited");
    } else {
        $("body, h1, h4").removeClass("visited");
    }
});

// iframe_mainの表示から外れたとき
$(window).on("unload", function () {
    if (window.parent === window.top) {
        var path = window.location.pathname.replace(/\//g, "-");
        if (Cookies.get("visited-" + path) == null) {
            Cookies.set("visited-" + path, "true");
        }
    }
});

