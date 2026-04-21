function register() {
  let name = document.getElementById("regName").value;
  let pass = document.getElementById("regPass").value;

  let users = JSON.parse(localStorage.getItem("users")) || [];

  // Example user data (you can change later)
  let userData = {
      name: name,
      password: pass,
      items: [
          { product: "Shirt", size: "M", price: 20 },
          { product: "Shoes", size: "9", price: 50 }
      ]
  };

  users.push(userData);

  localStorage.setItem("users", JSON.stringify(users));

  alert("Registered!");
  window.location.href = "index.html";
}


console.log("f");


let name = "nick";
console.log(name);