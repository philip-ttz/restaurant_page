import './styles.css'
import page_loader from "./page_loader.js";
import menu_loader from "./menu_loader";
import about_loader from "./about_loader";

const home_button = document.getElementById('home_button');
const menu_button = document.getElementById('menu_button');
const about_button = document.getElementById('about_button');

document.addEventListener('DOMContentLoaded', () => {
    page_loader();
});

home_button.addEventListener('click', () => {
    console.log('Home button clicked');
    page_loader();
    home_button.classList.add('active');
    menu_button.classList.remove('active');
    about_button.classList.remove('active');
});
menu_button.addEventListener('click', () => {
    menu_loader();
    menu_button.classList.add('active');
    home_button.classList.remove('active');
    about_button.classList.remove('active');
});
about_button.addEventListener('click', () => {
    about_loader();
    about_button.classList.add('active');
    home_button.classList.remove('active');
    menu_button.classList.remove('active');
});