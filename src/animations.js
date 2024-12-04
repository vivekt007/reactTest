export const observeElements = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    const hiddenElements1 = document.querySelectorAll(".blur");

    hiddenElements.forEach((el) => observer.observe(el));
    hiddenElements1.forEach((el) => observer.observe(el));
};
