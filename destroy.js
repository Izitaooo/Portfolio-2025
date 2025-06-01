document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".flip-card-front");

    VanillaTilt.init(cards);

    cards.forEach(card => {
        card.addEventListener("click", () => {
            card.style.transition = "transform 0.3s ease";
            card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
            setTimeout(() => {
                card.style.transition = "";
            }, 300);
        });
    });
});