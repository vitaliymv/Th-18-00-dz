$("button").click(() => {
    $(".box").animate({
        left: "500px",
        borderRadius: "50%",
    }, 1000)
    $(".box").animate({
        width: "300px",
        height: "300px",
    }, 1000)
})