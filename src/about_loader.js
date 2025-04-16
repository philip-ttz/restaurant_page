import './about_styles.css';

export default function load_page_content(){
    const content_div = document.getElementById('content');
    if (!content_div) return;

    content_div.innerHTML = ''; // Clear existing content

    const headline = document.createElement('h1');
    headline.textContent = "This is how to contact us!";
    content_div.appendChild(headline);

    const description = document.createElement('p');
    description.textContent = "At PJ n Paco, we would like you to contact us in person at the following address!";
    const description2 = document.createElement('p');
    description2.textContent = "1234 Coffee Street, Coffee Town, CO 12345";
    
    
    content_div.appendChild(description);
    content_div.appendChild(description2);
}