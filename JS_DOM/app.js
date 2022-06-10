const books = document.querySelectorAll('#book-list li .name');

books.forEach((book) => {
    book.textContent += `- Book Title`
})