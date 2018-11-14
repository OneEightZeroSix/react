$.extend({
    xheader: function (el) {
        console.log($(el));
        // html
        var html = `
            <header>微信</header>
        `
        // css
        var css = {
            backgroundColor: "red",
            color: "white",
            width: "100%",
            height: "50px",
            textAlign: "center",
            lineHeight:"50px"
        }
        $(el).html(html).find("header").css(css);
    }
});