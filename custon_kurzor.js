const cursor = document.querySelector('.kurzor')

document.addEventListener("mousemove", (event) => {
    const { width, height } = cursor.getBoundingClientRect()

    cursor.style.left = `${event.clientX - width / 5}px`
    cursor.style.top = `${event.clientY - height / 10}px`

});

document.addEventListener("mouseenter", () => {
    cursor.style.display = 'block'
});

document.addEventListener("mouseleave", () => {
    cursor.style.display = 'none'
});