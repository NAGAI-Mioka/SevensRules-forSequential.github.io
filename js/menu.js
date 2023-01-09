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
});