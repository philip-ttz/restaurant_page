export default load_page_content()
import coffeeImage from './images/coffee.jpg';
import './image.css'; // Import the CSS file for image styling

function load_page_content(){
    const content_div = document.getElementById('content');
    if (!content_div) return;

    content_div.innerHTML = ''; // Clear existing content

    const headline = document.createElement('h1');
    headline.textContent = "Welcome to PJ n Paco Caffee!";
    content_div.appendChild(headline);

    const image = document.createElement('img');
    image.src = coffeeImage;
    image.alt = 'Coffee Image';
    image.classList.add('coffee-image'); // Add a class for styling
    content_div.appendChild(image);

    const description = document.createElement('p');
    description.textContent = "At PJ n Paco, we serve the best coffee in town. Come and enjoy a cup with us!";
    content_div.appendChild(description);
}