import axios from "axios";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { searchImage } from "./js/pixabay-api.js";
import { renderImages } from "./js/render-functions.js";


const form = document.querySelector(".formImage");
const btnSearch = document.querySelector(".btn_search");
const input = document.querySelector(".inputImage");

const loader = document.querySelector(".loader");

function showLoader() {
  loader.style.display = "block";
}

function hideLoader() {
  loader.style.display = "none";
}


hideLoader()
form.addEventListener('submit', ev => {
    ev.preventDefault();
    const userValue = input.value.trim()
    console.log(userValue);
    if (userValue === "") {
        iziToast.error({
    title: 'Error',
    message: 'Please, full the field!',
});
        return;
    } else { 
        console.log('make HTTP request');
        showLoader();
        searchImage(userValue)
            .then(renderImages)
            .catch((error) => console.log(error))
        .finally(() => hideLoader());
    }
    ev.target.reset();
});


