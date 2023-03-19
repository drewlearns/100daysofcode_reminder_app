// const body = document.body;
// const themeBtn = document.querySelector(".theme");

// const lightBtn = document.querySelector(".light-btn");
// const darkBtn = document.querySelector(".dark-btn");

// const todoInput = document.querySelector(".todo-input");
// const checkBtn = document.querySelectorAll(".check");
// const deleteBtn = document.querySelectorAll(".cross");

// const toDo = document.querySelector(".todo-ul");

// const todoItem = document.querySelectorAll(".list-item");

// const filterBtn = document.querySelectorAll(".filter-nav");

// const todoItems = [];

//! THEME TOGGLE

// let selectedTheme = localStorage.getItem("themeSelection");

// todoInput.value = "";

// if (selectedTheme) {
//   body.classList.add("dark-theme");
//   lightBtn.style.display = "block";
//   darkBtn.style.display = "none";
// }

// themeBtn.addEventListener("click", () => {
//   let darkTh = body.classList.contains("dark-theme");

//   if (darkTh) {
//     body.classList.remove("dark-theme");
//     lightBtn.style.display = "none";
//     darkBtn.style.display = "block";
//     localStorage.removeItem("themeSelection");
//   } else {
//     body.classList.add("dark-theme");
//     lightBtn.style.display = "block";
//     darkBtn.style.display = "none";
//     localStorage.setItem("themeSelection", "dark-THEME");
//   }
// });

// //! THEME TOGGLE

// todoInput.addEventListener("keydown", (e) => {
//   if (e.key == "Enter") {
//     if (todoInput.value.trim(" ").length === 0) {
//       alert("TODO IS EMPTY");
//     } else {
//       todoItems.push(todoInput.value);
//       todoInput.value = "";
//       todoItems.push(
//         localStorage.setItem("todoItems", JSON.stringify(todoItems))
//       );
//       display();
//     }
//   }
// });
// const crossBtn = document.querySelectorAll(".cross");
// function checkbutton() {
//   for (i = 0; i < crossBtn.length; i++) {
//     crossBtn[i].addEventListener("click", function () {
//       console.log("clicked");
//     });
//   }
// }
// checkbutton();
// const display = () => {
//   for (let i = 0; i < todoItems.length; i++) {
//     item = document.createElement("li");
//     item.classList.add("list-item");
//     checkSpan = document.createElement("span");
//     checkSpan.classList.add("check");

//     checkSpan.innerHTML = `<img src="./images/icon-check.svg" alt=""
// 							/>`;
//     item.innerHTML = `
							
// 							<span class="text">${todoItems[i]}</span>
// 							<span class="cross">✅</span>
//                                 `;
//     item.appendChild(checkSpan);
//     toDo.appendChild(item);
//     checkbutton();
//   }
// };

// // checkBtn.forEach((i) => {
// // 	i.addEventListener("click", () => {
// // 		let parent = i.parentNode;
// // 		if (parent.classList.contains("done")) {
// // 			parent.classList.remove("done");
// // 		} else {
// // 			parent.classList.add("done");
// // 		}
// // 	});
// // });

// deleteBtn.forEach((i) => {
//   i.addEventListener("click", () => {
//     console.log(i);
//     // todoItems.splice();
//   });
// });

// //! create function that removes item from array

// let itemsFromLocalStorage = JSON.parse(localStorage.getItem("todoItems"));

// if (itemsFromLocalStorage) {
//   for (let i = 0; i < itemsFromLocalStorage.length; i++) {
//     todoItems.push(itemsFromLocalStorage[i]);
//   }

//   display();
// }

// //! fix code below

// filterBtn.forEach((i) => {
//   i.addEventListener("click", () => {
//     filterBtn.forEach((e) => {
//       e.classList.remove("selected");
//     });
//     if (i.classList.contains("all")) {
//       console.log("show all");
//       i.classList.add("selected");
//     } else if (i.classList.contains("active")) {
//       console.log("active");
//       i.classList.add("selected");
//     } else if (i.classList.contains("completed")) {
//       console.log("completed");
//       i.classList.add("selected");
//     }
//   });
// });

// Create EJS templates

var express = require("express");
var app = express();

// set the view engine to ejs
app.set("view engine", "ejs");

// use res.render to load up an ejs view file

// index page
app.get("/", function (req, res) {
  res.render("pages/index");
});

// about page
app.get("/about", function (req, res) {
  res.render("pages/about");
});

// Signin page
app.get("/signin", function (req, res) {
  res.render("pages/signin");
});

// Signup page
app.get("/signup", function (req, res) {
  res.render("pages/signup");
});

app.listen(8080);
console.log("Server is listening on port 8080");
