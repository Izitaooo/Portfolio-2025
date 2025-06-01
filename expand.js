$(".flip-card").on("click", function () {
    const $original = $(this);
    const offset = $original.offset();

    // Clone and position
    const $clone = $original.clone(false, false);
    $clone.css({
        position: "absolute",
        top: offset.top,
        left: offset.left,
        width: $original.outerWidth(),
        height: $original.outerHeight(),
        margin: 0,
        "z-index": 8
    });

    $clone.find(".js-tilt-glare").remove();  //odstrani glare effect z te karty (delalo to problemy)

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

        let expandedHeight = '100vw';

        if ($original.hasClass('card1')) {
            expandedHeight = '440vw';
        } else if ($original.hasClass('card2')) {
            expandedHeight = '255vw';
        }

        $clone.css({
            transition: "all 1s ease-in-out",
            top: 0,
            left: 0,
            width: "100vw",
            height: expandedHeight,
            borderRadius: 0,
        });
    }, 1500);

    setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 2200);

    // Close on click
    $clone.find('.back-button').on('click', function (e) {
        e.stopPropagation(); // Prevent the click from bubbling
        $clone.remove();
        $original.css("visibility", "visible");
    });
});
