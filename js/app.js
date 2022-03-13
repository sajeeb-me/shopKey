
const photoContainer = document.getElementById("photo-container");

// default images 
const url = `https://fakestoreapi.com/products`
fetch(url)
    .then(res => res.json())
    .then(data => showImg(data))

const showImg = images => {
    images.forEach(image => {
        // console.log(image)
        let title;
        if (image.title.length > 22) {
            title = image.title.slice(0, 22) + "...";
        }
        else {
            title = image.title;
        }
        let description;
        if (image.description.length > 150) {
            description = image.description.slice(0, 150) + "...";
        }
        else {
            description = image.description;
        }
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="col">
            <div class="card h-100">
                <div class="card-image d-flex justify-content-center p-4">
                    <img src="${image.image}" class="card-img-top h-100 w-75" alt="...">
                </div>
                <div class="card-body">
                    <h4 class="card-title">${title}</h4>
                    <div class="d-flex justify-content-between align-items-center mt-3">
                        <a onclick="getImageDetails(${image.id})" href="#" class="btn btn-primary">Show Details</a>
                        <p class="fs-3 m-0">$${image.price}</p>
                    </div>
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
        let title;
        if (image.title.length > 22) {
            title = image.title.slice(0, 22) + "...";
        }
        else {
            title = image.title;
        }
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="col">
            <div class="card h-100">
                <div class="card-image d-flex justify-content-center p-4">
                    <img src="${image.image}" class="card-img-top h-100 w-75" alt="...">
                </div>
                <div class="card-body">
                    <h4 class="card-title">${title}</h4>
                    <div class="d-flex justify-content-between align-items-center mt-3">
                        <a onclick="getImageDetails(${image.id})" href="#" class="btn btn-primary">Show Details</a>
                        <p class="fs-3 m-0">$${image.price}</p>
                    </div>
                 </div>
            </div>
        </div>
        `;
        photoContainer.appendChild(div)
    })
};

// get image details
const getImageDetails = details => {
    console.log(details);
}