// 一度見たページのデザインを変える

// 描画されたとき
$(window).on("load", function () {
    console.log("load!");
    var path = window.location.pathname.replace("/", "-");
    if (Cookies.get("visited-" + path) === "true") {
        console.log("visit!");
        $("body, h1").removeClass("unvisited").addClass("visited");
    } else {
        console.log("unvisit!");
        $("body, h1").removeClass("visited").addClass("unvisited");
    }
});

// iframe_mainの表示から外れたとき
$(window).on("unload", function () {
    if (window.parent === window.top) {
        var path = window.location.pathname.replace("/", "-");
        if (Cookies.get("visited-" + path) == null) {
            console.log("unload!");
            Cookies.set("visited-" + path, "true");
        }
    }
});

