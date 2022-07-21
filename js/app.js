function start(){
document.querySelector('.pay-container').addEventListener("click", ()=>{
    document.querySelector('.modal-pay-flex').classList.add("active");
    document.querySelector('.layer').classList.add("active");
});

document.querySelector('.delete-container').addEventListener("click", ()=>{
    document.querySelector('.modal-delete-flex').classList.add("active");
    document.querySelector('.layer').classList.add("active");
});

document.querySelector('.close-modal').addEventListener("click", ()=>{
    document.querySelector('.modal-pay-flex').classList.remove("active");
    document.querySelector('.layer').classList.remove("active");
});

document.querySelector('.close-modal-delete').addEventListener("click", ()=>{
    document.querySelector('.modal-delete-flex').classList.remove("active");
    document.querySelector('.layer').classList.remove("active");
});
}