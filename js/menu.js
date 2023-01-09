$(document).on("load", function () {
    console.log("delete!");
    const cookies = document.cookie.split(';')
    for (let i = 0; i < cookies.length; i++) {
        console.log("delete2!");
        const cookie = cookies[i]
        const eqPos = cookie.indexOf('=')
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie
        document.cookie = name + '=;max-age=0'
    }
});