document.addEventListener('DOMContentLoaded', function () {

    const Container = document.getElementById('bigbox');
    const Colorip = document.createElement('input');
    const colorselect = document.getElementById('ipcolor');
    Colorip.setAttribute('type', 'color');
    colorselect.appendChild(Colorip);
    const ipboxcount=document.createElement('input');
    ipboxcount.setAttribute('type','range');
    


    for (let i = 1; i <= n * n; i++) {
        const Cell = document.createElement('div');
        Cell.classList.add('smallbox');
        Container.appendChild(Cell);

        const percentage = 100 / n;
        Container.style.flex = `1 0 ${percentage}%`;
        Container.style.maxHeight = '650px';
        Container.style.maxWidth = '650px';
        Container.style.flexWrap = 'wrap';

        Cell.style.flex = `1 0 ${percentage}%`;
        Cell.style.maxHeight = `${percentage}%`;
        Cell.style.maxWidth = `${percentage}%`;
        Cell.style.border = '1px solid black';
        Cell.style.boxSizing = 'border-box';

        Cell.addEventListener('mouseover', () => {
            Cell.style.backgroundColor = Colorip.value;
        });
    }

   
});
var n = 2; 