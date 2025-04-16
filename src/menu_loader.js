import './menu_styles.css';

// Bilddaten – Beispiel (kann angepasst oder von außen übergeben werden)
import cheese_image from './images/cheese.jpg';
import rührei_image from './images/rührei.jpg';
import joghurt_image from './images/joghurt.jpg';
let images = [cheese_image, rührei_image, joghurt_image];
let captions = ["Cheese", "Rührei", "Joghurt"];
// Grid erzeugen und einfügen

export default function createImageGrid() {
    const container = document.getElementById('content');
    if (!container) return;

    container.innerHTML = ''; // Clear existing content

    // Überschrift
    const title = document.createElement('h1');
    title.textContent = "The Menu";
    container.appendChild(title);

    // Grid-Wrapper
    const grid = document.createElement('div');
    grid.className = 'image-grid';

    // Bilder + Unterschriften einfügen
    for(let i = 0; i < 3; i++) {
        const div = document.createElement('div');
        div.className = 'grid-item';
        const image = document.createElement('img');
        image.src = images[i];
        image.alt = captions[i];
        image.classList.add("menu_image"); // Add a class for styling
        const cap = document.createElement('p');
        cap.textContent = captions[i];
        div.appendChild(image);
        div.appendChild(cap);
        grid.appendChild(div);
    }

    container.appendChild(grid);
}