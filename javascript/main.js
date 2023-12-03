  document.addEventListener("click", function (e) { 
    console.log("Clic detectado");
    console.log(e.target);

    if (e.target.classList.contains("galeria-item")) {
        const src = e.target.getAttribute("src");
        console.log(src);
        document.querySelector(".modal-img").src = src;
        const myModal = new bootstrap.Modal(document.getElementById('galeria-modal'));
        console.log("aloja");
        myModal.show();
    }
});
