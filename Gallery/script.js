const gallery = document.querySelector(".gallery");
const prev = gallery.querySelector(".prev");
const next = gallery.querySelector(".next");
const img = document.querySelectorAll("img");
const close = gallery.querySelector(".close");
const galleryImg = gallery.querySelector("img");

let currentIndex = 0
function showImageGallery() {
    if (currentIndex === 0){
        prev.classList.add("hide")
    } else {
        prev.classList.remove("hide")
    }
    if (currentIndex === 7){
        next.classList.add("hide")
    } else {
        next.classList.remove("hide")
    }

    galleryImg.src = img[currentIndex].src
    gallery.classList.add("show");
}
img.forEach((element, index) => {
    element.addEventListener("click", () => {
        currentIndex = index
        showImageGallery(index);
    })
})


close.addEventListener("click", () => {
    gallery.classList.remove("show");
});

document.addEventListener("keydown", (key) => {
    if (key.keyCode === 27){
        gallery.classList.remove("show");
    }
})

prev.addEventListener("click", () => {
    if (currentIndex > 0){
        currentIndex--;
        showImageGallery()
    }
});

next.addEventListener("click", () => {
    if (currentIndex < 7){
        currentIndex++;
        showImageGallery()
    }
});

    document.addEventListener("keydown", (e) => {
        if (e.keyCode === 37){
            if (currentIndex > 0){
                currentIndex--;
                showImageGallery()
            }
        }
    })
    document.addEventListener("keydown", (e) => {
        if (e.keyCode === 39){
            if (currentIndex < 7){
                currentIndex++;
                showImageGallery()
            }
        }
    })
