document.addEventListener('DOMContentLoaded', function () {
    const bigbox = document.querySelector('.bigbox');

    for (let i = 1; i <= 4; i++) {
        const div = document.createElement('div');
        bigbox.appendChild(div);
    }
});