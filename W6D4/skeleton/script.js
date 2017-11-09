document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items

  // --- your code here!
  const favoritePlacesUL = document.getElementById('sf-places');
  const favoritePlacesForm = document.querySelector('.list-container form');

  favoritePlacesForm.addEventListener('submit', event => {
    event.preventDefault();

    const favoritePlaceInput = document.getElementsByClassName('favorite-input')[0];
    const placeName = favoritePlaceInput.value;
    favoritePlaceInput.value = '';

    const placeLi = document.createElement('li');
    placeLi.textContent = placeName;

    favoritePlacesUL.appendChild(placeLi);
  });

  // adding new photos

  // --- your code here!
  //// Toggle button
  const togglePhotoFormButton = document.getElementsByClassName('photo-show-button')[0];
  const photoFormDiv = document.querySelector('.photo-form-container');

  const togglePhotoForm = event => {
    if (photoFormDiv.className.includes('hidden')) {
      photoFormDiv.className = "photo-form-container";
    } else {
      photoFormDiv.className += " hidden";
    }
  };

  togglePhotoFormButton.addEventListener('click', togglePhotoForm);

  //// submit dogpix
  const dogList = document.getElementsByClassName('dog-photos')[0];
  const photoForm = document.querySelector('.photo-form-container form');
  const photoInput = document.querySelector('.photo-url-input');

  photoForm.addEventListener('submit', event => {
    event.preventDefault();

    const dogPicURL = photoInput.value;
    console.log(dogPicURL);
    const newDogLi = document.createElement('li');
    const newDogImg = document.createElement('img');
    newDogImg.setAttribute('src',dogPicURL);
    dogList.appendChild(newDogLi);
    newDogLi.appendChild(newDogImg);
  });
});
