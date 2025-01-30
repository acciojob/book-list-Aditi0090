document.addEventListener("DOMContentLoaded", () => {
    const bookForm = document.getElementById("book-form");
    const bookList = document.getElementById("book-list");

    bookForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const title = document.getElementById("title").value;
        const author = document.getElementById("author").value;
        const isbn = document.getElementById("isbn").value;

        if (!title || !author || !isbn) {
            alert("Please fill in all fields");
            return;
        }

        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${title}</td>
            <td>${author}</td>
            <td>${isbn}</td>
            <td><button class="delete">Delete</button></td>
        `;

        bookList.appendChild(row);

        bookForm.reset();
    });

    bookList.addEventListener("click", (e) => {
        if (e.target.classList.contains("delete")) {
            e.target.closest("tr").remove();
        }
    });
});
