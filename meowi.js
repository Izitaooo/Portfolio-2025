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
        "z-index": 5
    });

    // Remove original classes that might interfere
    $clone.removeClass("flip-card");

    // If you want to switch content to 'active' version:
    $clone.find('.flip-card-front').addClass('active');

    $("body").append($clone);
    $original.css("visibility", "hidden");

    // Add animation class
    $clone.addClass("spin-animation");

    // Expand after spin
    setTimeout(() => {
        $clone.css({
            transition: "all 1s ease-in-out",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vw",
            borderRadius: 0
        });
    }, 1500);

    // Close on click
    $clone.on("click", function () {
        $clone.remove();
        $original.css("visibility", "visible");
    });
});
