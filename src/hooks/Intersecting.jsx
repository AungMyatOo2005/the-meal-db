const Intersecting = () => {
  const observer = (className) =>
    new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(className);
        } else {
          entry.target.classList.remove(className);
        }
      });
    });
  const hiddenElements = document.querySelectorAll(".hide");
  hiddenElements.forEach((el) => observer("show").observe(el));
  const hiddenCard = document.querySelectorAll(".hide-card");
  hiddenCard.forEach((el) => observer("show-card").observe(el));
};

export default Intersecting;
