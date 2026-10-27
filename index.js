const visibleSection = document.getElementById("visible");
const hiddenSection = document.querySelector(".hidden");
const submitBtn = document.querySelector(".submit-btn");
const hiddenText = document.getElementsByTagName("span")[0];
const ratingBtns = document.querySelectorAll(".rating-btn");


let selectedRating = "";

ratingBtns.forEach(button =>{
    button.addEventListener("click", (e) => {
        selectedRating = e.target.textContent.trim();
        console.log(selectedRating);
    });
});
+
submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    visibleSection.classList.toggle("hidden");
    hiddenSection.classList.toggle("hidden");
    if (selectedRating){
        hiddenText.textContent = `You selected ${selectedRating} out of 5`;
    }
});