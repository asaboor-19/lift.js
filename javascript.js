let count = 0;
let timer = null;

document.getElementById("start-btn").addEventListener("click", function () {
    if (timer === null) {
        timer = setInterval(function () {
            count++;
            document.getElementById("timer").innerText = count;
        }, 1000);
    }
});

document.getElementById("stop-btn").addEventListener("click", function () {
    clearInterval(timer);
    timer = null;
});


function fakeFetchUser(name, age) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve({
                name: name,
                age: age
            });
        }, 1000);
    });
}

document.getElementById("add-user-btn").addEventListener("click", async function () {
    let name = document.getElementById("user-name").value;
    let age = document.getElementById("user-age").value;

    if (name === "" || age === "") {
        return;
    }

    let user = await fakeFetchUser(name, age);

    document.getElementById("user-display").innerText =
        "Name: " + user.name + " | Age: " + user.age;
});


let itemInput = document.getElementById("item-input");
let itemList = document.getElementById("item-list");

document.getElementById("add-item-btn").addEventListener("click", function () {
    let itemName = itemInput.value;

    if (itemName === "") {
        return;
    }

    let li = document.createElement("li");
    li.innerText = itemName + " ";

    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.className = "edit-btn";

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "delete-btn";

    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    itemList.appendChild(li);

    itemInput.value = "";
});

itemList.addEventListener("click", function (event) {

    if (event.target.classList.contains("delete-btn")) {
        event.target.parentElement.remove();
    }

    if (event.target.classList.contains("edit-btn")) {
        let newName = prompt("Enter new item name:");

        if (newName !== null && newName !== "") {
            event.target.parentElement.firstChild.textContent = newName + " ";
        }
    }
});

