const btns = document.querySelectorAll('#book-list .delete');

btns.forEach((btn) => {

    btn.addEventListener('click', function (e) {
        const li = e.target.parentElement;
        
        // removing the targeted li from DOM
        li.parentElement.removeChild(li);
    })

})