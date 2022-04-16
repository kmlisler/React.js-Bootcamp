


for (let i = 0; i < 15; i++) { // there will be 15 img because this is what we are asked for
    imagesRow = document.getElementsByClassName("imagesRow");
    // we added a different parameter with "?i". All images have different i and we get different random multiple images.
    imagesRow[0].innerHTML += '<div class="col-md-4"><img src="https://source.unsplash.com/random/370x370?'+i+'"  class="img-fluid img-rounded mb-4"  /></div>';

}
