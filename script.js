document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();

    let title = document.getElementById("title").value.trim();
    let author = document.getElementById("author").value.trim();
    let isbn = document.getElementById("isbn").value.trim();

    if (!title || !author || !isbn) {
        alert("Please fill in all fields.");
        return;
    }

    let tableBody = document.getElementById("book-list");
    let newRow = document.createElement("tr"); // Create row dynamically

    newRow.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td><button class="delete">Clear</button></td>
    `;

    tableBody.appendChild(newRow); 
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";

   
    newRow.querySelector(".delete").addEventListener("click", function() {
        newRow.remove();
    });
});
