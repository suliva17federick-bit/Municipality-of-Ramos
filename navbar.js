document.querySelectorAll(".dropdown > a").forEach(menu => {
  menu.addEventListener("click", e => {
    e.preventDefault();

    const parent = menu.parentElement;

    // close others
    document.querySelectorAll(".dropdown").forEach(d => {
      if (d !== parent) d.classList.remove("show");
    });

    parent.classList.toggle("show");
  });
});

// close dropdown when clicking outside
document.addEventListener("click", e => {
  if (!e.target.closest(".dropdown")) {
    document.querySelectorAll(".dropdown").forEach(d => d.classList.remove("show"));
  }
});
