$(document).ready(function () {
    // 「戻る」ボタンを押したとき
    $(".button_back").on("click", function () {
        history.back();
    });
});


$(window).on("load", function () {
    console.log("delete!");
    const cks = document.cookie.split(';')
    for (let i = 0; i < cks.length; i++) {
        const ck = cks[i].trim();
        //const eqPos = cookie.indexOf('=')
        //const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie
        const content = ck.split('=');
        console.log(content[0]);
        Cookies.set(content[0], "false");
        //document.cookie = cookie + '; max-age=0';
    }
});