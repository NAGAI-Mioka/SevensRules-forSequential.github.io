// 一度見たページのデザインを変える

// 描画されたとき
$(window).on("load", function () {
    console.log("load!");
    if (Cookies.get("visited-" + window.location.pathname) != null) {
        console.log("visit!");
        $("body, h1").removeClass("unvisited").addClass("visited");
    } else {
        console.log("unvisit!");
        $("body, h1").removeClass("visited").addClass("unvisited");
    }
});

// iframe_mainの表示から外れたとき
$(window).on("beforeunload", function () {
    if (window.parent === window.top) {
        if (Cookies.get("visited-" + window.location.pathname) == null) {
            console.log("unload!");
            Cookies.set("visited-" + window.location.pathname, "true");
        }
    }
});

