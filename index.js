document.addEventListener('DOMContentLoaded', function () {
    const Container = document.getElementById('bigbox');
    const colorip = document.createElement('input');
    const colorselect = document.getElementById('ipcolor');
    colorip.setAttribute('type', 'color');
    colorselect.appendChild(colorip);

    const ipboxcount = document.createElement('input');
    const ipgridrange = document.getElementById('ipgridsize');
    ipboxcount.setAttribute('type', 'range');
    ipboxcount.setAttribute('id', 'iprange');
    ipboxcount.setAttribute('min', 1);
    ipboxcount.setAttribute('max', 64);
    ipboxcount.setAttribute('step', 1);
    ipgridrange.appendChild(ipboxcount);

    const value = document.querySelector("#value");
    const inputrange = document.querySelector("#iprange");
    value.textContent = inputrange.value;
    inputrange.addEventListener("input", (event) => {
    value.textContent = event.target.value;
    });

    const newgame=document.getElementById('newgame');
    newgame.addEventListener('click',()=>{
        generategrid(ipboxcount.value);
    });

    

    function generategrid(n) {
        Container.innerHTML = '';
        for (let i = 1; i <= n * n; i++) {
            const cell = document.createElement('div');
            cell.classList.add('smallbox');
            Container.appendChild(cell);

            const percentage = 100 / n;
            Container.style.flex = `1 0 ${percentage}%`;
            Container.style.maxHeight = '650px';
            Container.style.maxWidth = '650px';
            Container.style.flexWrap = 'wrap';

            cell.style.flex = `1 0 ${percentage}%`;
            cell.style.maxHeight = `${percentage}%`;
            cell.style.maxWidth = `${percentage}%`;
            cell.style.border = '1px solid black';
            cell.style.boxSizing = 'border-box';

            cell.addEventListener('mouseover', () => {
                cell.style.backgroundColor = colorip.value;
            });
        }
    }
});

