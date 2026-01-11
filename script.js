document.querySelectorAll(".project-img").forEach(img => {
    img.addEventListener("click", () => {
        const details = img
            .closest(".project-card")
            .querySelector(".project-details");

        details.style.display =
            details.style.display === "block" ? "none" : "block";
    });
});
