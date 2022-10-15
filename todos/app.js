let addBtn = document.getElementById("addBtn");

if (localStorage.getItem("list") == null || localStorage.getItem("list").length == 0)
    listArray = [];
else
    listArray = JSON.parse(localStorage.getItem("list"));

addBtn.addEventListener("click", () => {
    let title = document.getElementById("title");
    let desc = document.getElementById("desc");
    listArray.push([title.value, desc.value]);
    localStorage.setItem("list", JSON.stringify(listArray));
    title.value = "";
    desc.value = "";

    checkList();
});

function clearList() {
    if (confirm("Are you sure want to clear the todos list?") == true) {
        localStorage.clear();
        checkList();
    }
}

function checkList() {
    table = "";
    if (localStorage.getItem("list") != null && JSON.parse(localStorage.getItem("list")).length
        != 0) {

        JsonArr = JSON.parse(localStorage.getItem("list"));

        JsonArr.forEach((element, index) => {
            table += `
                <tr>
                    <th scope="row">${++index}</th>
                    <td>${element[0]}</td>
                    <td>${element[1]}</td>
                    <td><button type="button" class="btn btn-sm btn-outline-danger" onclick="if(confirm('Are you sure want to delete?'))deleteItem(${--index})">Delete</button></td>
                </tr>`;
        });
        tbody = document.getElementById("tbody").innerHTML = table;
    }
    else {
        tbody = document.getElementById("tbody").innerHTML = `<tr>
                    <td colspan=3>No data found...</td>
                </tr>`;
    }
}

function deleteItem(id) {
    JsonArr = JSON.parse(localStorage.getItem("list"));
    console.log("delete ", id);
    JsonArr.splice(id, 1);
    localStorage.setItem("list", JSON.stringify(JsonArr));
    listArray = JSON.parse(localStorage.getItem("list"));
    checkList();
}

checkList();