var viewer = document.getElementById("viewer");

$(document).ready(function () {
    // 「戻る」ボタンを押したとき
    $("button.back").on("click", function () {
        history.back();
    });

    // ページ更新でクッキー全削除
    const cks = document.cookie.split(';')
    for (let i = 0; i < cks.length; i++) {
        const ck = cks[i].trim();
        const content = ck.split('=');
        Cookies.remove(content[0]);
    }

    // 現在iframeで開いているページのメニュー項目を色変え
    $(iframe_main).on("load", function () {
        $("#menu a").each(function (i, elem) {
            if ($(elem).attr("href") === viewer.contentWindow.location.href) {
                // 現在iframe_mainで開いているページに対応するメニューの項目について
                $(elem).addClass("now_open");
            } else {
                $(elem).removeClass("now_open");
            }
        });
    });
});

