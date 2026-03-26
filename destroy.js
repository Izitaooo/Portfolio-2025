document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".flip-card-front");

    cards.forEach(card => {
        card.addEventListener("click", () => {
            card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
        });
    });
});