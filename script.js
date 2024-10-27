document.querySelectorAll('.image-container').forEach((container) => {
    container.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        // Increase side movement sensitivity
        const moveX = x * 0.25; // Increased to 0.25 for more side movement
        const moveY = y * 0.1;   // Kept the same for up/down movement

        container.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.1)`;
    });

    container.addEventListener('mouseleave', () => {
        container.style.transform = 'translate(0, 0) scale(1)';
    });
});
