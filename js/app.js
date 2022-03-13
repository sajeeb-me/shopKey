
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
    const url = `https://fakestoreapi.com/products/${details}`;
    fetch(url)
        .then(res => res.json())
        .then(data => showImageDetails(data))
}
const showImageDetails = data => {
    console.log(data)
    const modal = document.getElementById("modal");
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog modal-dialog-scrollable">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="d-flex justify-content-center">
                                    <img class="w-75" src="./images/image-1.jpg" alt="">
                                </div>
                                <p class="text-center"><small>category</small></p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus iusto sapiente
                                    possimus officiis totam voluptas distinctio quasi aperiam, quidem earum quod ipsum
                                    qui! Odio, praesentium ab. Asperiores reprehenderit perferendis libero commodi
                                    sequi. Vero laboriosam amet corrupti placeat possimus. Incidunt quod velit placeat
                                    quis repellat voluptas similique fugiat temporibus quaerat, fugit quos non expedita
                                    corrupti ratione sed nemo nulla consequuntur delectus? Earum excepturi voluptates
                                    ratione dolorum nisi alias voluptatem nobis reprehenderit possimus commodi, magni
                                    porro! Similique ab mollitia nostrum odio nulla.</p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <h5>Price: $50.0</h5>
                                    <p class="m-0">Ratings: 3.5/5 (250)</p>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Shop now</button>
                            </div>
                        </div>
                    </div>
                </div>
    `;
    modal.appendChild(div)
}