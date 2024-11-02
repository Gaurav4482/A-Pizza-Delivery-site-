document.getElementById("pizzaForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get selected values
    const base = document.getElementById("base").value;
    const sauce = document.getElementById("sauce").value;
    const cheese = document.getElementById("cheese").value;

    // Get selected veggies
    const veggies = Array.from(document.querySelectorAll("input[name='veggies']:checked"))
        .map(checkbox => checkbox.value);

    // Display the selection (this could be sent to a backend or API)
    console.log("Order placed with:");
    console.log("Base:", base);
    console.log("Sauce:", sauce);
    console.log("Cheese:", cheese);
    console.log("Veggies:", veggies.join(", "));

    alert("Order placed successfully!");
});