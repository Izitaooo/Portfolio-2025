$.fn.extend({
    animateCss: function (animationName, callback) {
        var animationEnd =
            "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
        $(this)
            .addClass("animated " + animationName)
            .one(animationEnd, function () {
                $(this).removeClass("animated " + animationName);
                callback.call();
            });
    }
});

$(".flip-card").on("click", function () {
    const $original = $(this);
    const offset = $original.offset();

    // Clone and position
    const $clone = $original.clone();
    $clone.css({
        position: "absolute",
        top: offset.top,
        left: offset.left,
        width: $original.outerWidth(),
        height: $original.outerHeight(),
        margin: 0,
        "z-index": 9999
    });
    // Prevent hover effect on clone
    $clone.removeClass("flip-card");

    $("body").append($clone);
    $original.css("visibility", "hidden");

    // Trigger spin
    $clone.addClass("spin-animation");

    // After spin ends (1.5s), expand it
    setTimeout(() => {
        $clone.css({
            transition: "all 1s ease-in-out",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            borderRadius: 0
        });
    }, 1500);

    // Optional: click to close
    $clone.on("click", function () {
        $clone.remove();
        $original.css("visibility", "visible");
    });
});
