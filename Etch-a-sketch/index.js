function createGrid (s){
    const container = document.getElementById('container');
    container.innerHTML = '';

    for (let i=0; i < s*s; i++){
        const box = document.createElement('div');
        box.style.flex = `1 0 calc(100% / ${s})`;
        box.style.backgroundColor = "rgb(255, 255, 255)";
        box.dataset.brightness = 100; 

        box.addEventListener('mouseover', () => {
          let brightness = parseInt(box.dataset.brightness, 10);

          if (brightness === 100) {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
          } else {
            const currentColor = box.style.backgroundColor.match(/\d+/g).map(Number);
            const [r, g, b] = currentColor.map(channel => Math.floor(channel * 0.9));
            box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
          }

          box.dataset.brightness = Math.max(0, brightness - 10); 
        });
        container.appendChild(box);
    }
}

function changeGrid(){
    const size = parseInt(prompt("New Grid Size (nxn)(Max n = 100):"));
    if (!isNaN(size)){
        if (size <= 100 && size >= 0){
            createGrid(size);
            console.log(size);
        }
        else{
            return changeGrid();
        }
    }
    else{
        return changeGrid();
    }
}

createGrid(16);