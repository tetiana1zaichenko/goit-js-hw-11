import axios from 'axios';
import iziToast from "izitoast";


  export function searchImage(userValue) {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';

  const params = new URLSearchParams({
      key: '48801957-4c351c0f3a606f3cba9240365',
      q: userValue,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
  });

  const url = `${BASE_URL}${END_POINT}?${params}`;
      return axios.get(url)
          .then(res => {
              if (res.data.hits.length !== 0) {
                  return res.data.hits;
              } else {
                  iziToast.error({
                      title: 'Error',
                      message: 'Sorry, there are no images matching your search query. Please try again!',
                  });
                  return Promise.reject('No images found');
              }
          })
          .catch(er => {
              console.error("Fetch error:", er);
              iziToast.error({
        title: "Error",
        message: "Something went wrong. Please try again later.",
      });
      throw er;
          });
}