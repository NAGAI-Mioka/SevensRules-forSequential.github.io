$(window).on("load", function () {
    console.log("delete!");
    const cookies = document.cookie.split(';')
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim()
        console.log(cookie);
        //const eqPos = cookie.indexOf('=')
        //const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie
        document.cookie = cookie + ';max-age=0'
    }
});