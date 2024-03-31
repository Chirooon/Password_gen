document.getElementById("generate-btn").addEventListener("click", function() {
    var length = document.getElementById("length").value;
    var complexity = document.getElementById("complexity").value;
    var password = generatePassword(length, complexity);
    document.getElementById("password").innerText = "Generated Password: " + password;
});

function generatePassword(length, complexity) {
    var characters = "";
    if (complexity === "weak") {
        characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    } else if (complexity === "medium") {
        characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    } else if (complexity === "strong") {
        characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_+=~";
    }
    var password = "";
    for (var i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
}
