//Store buttons
const sweetAddDelay = () => {
    const addToCart = document.getElementsByClassName("addToCart");
    
    for (let i = 0; i < addToCart.length; i++) {
        addToCart[i].addEventListener("click", function (event) {
            event.preventDefault();
            Swal.fire({
                title: "Item added!",
                icon: "success",
                confirmButtonText: "Great!",
            });
        });
    }
}
setTimeout(sweetAddDelay, 1000);

//Checkout button
const checkoutButton = document.getElementById("checkoutButton");

checkoutButton.addEventListener("click", function (event) {
    event.preventDefault();
    localStorage.clear();
    Swal.fire({
        title: "Checkout complete!",
        icon: "success",
        confirmButtonText: "Done",
    });
});