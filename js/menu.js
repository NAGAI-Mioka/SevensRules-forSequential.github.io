$(document).ready(function () {
    // 「戻る」ボタンを押したとき
    $(".button_back").on("click", function () {
        history.back();
    });

    // ページ更新でクッキー全削除
    console.log("delete!");
    const cks = document.cookie.split(';')
    for (let i = 0; i < cks.length; i++) {
        const ck = cks[i].trim();
        const content = ck.split('=');
        console.log(content[0]);
        Cookies.remove(content[0]);
    }
});