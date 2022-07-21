function start(){
    document.querySelector(".insert-iva").addEventListener("click", ()=>{
        document.querySelector(".modal-table-container").classList.add("active");
        document.querySelector(".layer").classList.add("active");
    });


    document.querySelector(".modal-table-title-close").addEventListener("click", ()=>{
        document.querySelector(".modal-table-container").classList.remove("active");
        document.querySelector(".layer").classList.remove("active");
    });

    document.querySelectorAll(".delete-svg").forEach(element =>{
        element.addEventListener("click", ()=>{
        document.querySelector(".modal-delete-iva-container").classList.add("active");
        document.querySelector(".layer").classList.add("active");
        });
    });

    document.querySelector(".modal-delete-iva-title-close").addEventListener("click", ()=>{
        document.querySelector(".modal-delete-iva-container").classList.remove("active");
        document.querySelector(".layer").classList.remove("active");
    });



}