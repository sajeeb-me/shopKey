
const photoContainer = document.getElementById("photo-container");

// default images 
const url = `https://fakestoreapi.com/products`
fetch(url)
    .then(res => res.json())
    .then(data => showImg(data))

const showImg = images => {
    images.forEach(image => {
        // console.log(image)
        let description;
        if (image.description.length > 150) {
            description = image.description.slice(0, 150) + "...";
        }
        else {
            description = image.description;
        }
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="card col">
            <div class="card h-100 border-primary">
                <div class="card-image d-flex justify-content-center p-4">
                    <img src="${image.image}" class="card-img-top h-100 w-75" alt="...">
                </div>
                <div class="card-body">
                    <h5 class="card-title">${image.title}</h5>
                    <p class="card-text">${description}</p>
                 </div>
            </div>
        </div>
        `;
        photoContainer.appendChild(div)
    })
}

// searched images 
const getItemImages = () => {
    const inputText = document.getElementById("input-text");
    const inputValue = inputText.value;
    const inputUrl = `https://fakestoreapi.com/products/category/${inputValue}`;
    fetch(inputUrl)
        .then(res => res.json())
        .then(data => getSearchedImages(data))
}
const getSearchedImages = images => {
    photoContainer.textContent = '';
    // console.log(images);
    images.forEach(image => {
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="col">
            <div class="card h-100 border-primary">
                <div class="card-image d-flex justify-content-center p-4">
                    <img src="${image.image}" class="card-img-top h-100 w-75" alt="...">
                </div>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit longer.</p>
                 </div>
            </div>
        </div>
        `;
        photoContainer.appendChild(div)
    })
};