// Get all solutions on the page
const solutionElements = document.querySelectorAll(".solution");

// Hide all solutions to start
solutionElements.forEach((solutionElement) => {
    const children = Array.from(solutionElement.children).filter((child) => child.tagName !== "H2");
    children.forEach((child) => (child.style.display = "none"));

    // Add an icon using fontawesome to solution header
    const h2 = solutionElement.querySelector("h2");
    const span = document.createElement("span");
    span.classList.add("fold-unfold", "fas", "fa-circle-down");
    h2.appendChild(document.createTextNode(" "));
    h2.appendChild(span);
});

// Toggle visibility of solutions on click
solutionElements.forEach((solutionElement) => {
    solutionElement.addEventListener("click", (event) => {
        const children = Array.from(solutionElement.children).filter((child) => child.tagName !== "H2");
        children.forEach((child) => {
            child.style.display = child.style.display === "none" ? "" : "none";
        });

        // Toggle icon on click also
        const foldUnfoldSpan = solutionElement.querySelector("h2 .fold-unfold");
        foldUnfoldSpan.classList.toggle("fa-circle-down");
        foldUnfoldSpan.classList.toggle("fa-circle-up");
    });
});
