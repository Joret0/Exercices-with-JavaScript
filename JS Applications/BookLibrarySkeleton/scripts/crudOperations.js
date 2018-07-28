const BASE_URL = 'https://baas.kinvey.com/'
const APP_KEY = 'kid_HJFiKiYNX'
const APP_SECRET = '3506deef8f63455aa631d79ed24d9147'
const AUTH_HEADERS = {'Authorization': "Basic " + btoa(APP_KEY + ":" + APP_SECRET)}
const BOOKS_PER_PAGE = 10

function loginUser() {

    let username = $('#formLogin input[name="username"]').val()
    let password = $('#formLogin input[name="passwd"]').val()
    $.ajax({
        method: 'POST',
        url: BASE_URL + 'user/' + APP_KEY + '/login',
        headers: AUTH_HEADERS,
        data: {username, password}
    }).then(function (res) {
        signInUser(res, 'Login successful.')
    }).catch(handleAjaxError)

    // POST -> BASE_URL + 'user/' + APP_KEY + '/login'
    // signInUser(res, 'Login successful.')
}

function registerUser() {

    let username = $('#formRegister input[name="username"]').val()
    let password = $('#formRegister input[name="passwd"]').val()

    $.ajax({
        method: "POST",
        url: BASE_URL + 'user/' + APP_KEY + '/',
        headers: AUTH_HEADERS,
        data: {username, password}
    }).then(function (res) {
        signInUser(res, 'Registration successful.')
    }).catch(handleAjaxError)
    // POST -> BASE_URL + 'user/' + APP_KEY + '/'
    // signInUser(res, 'Registration successful.')
}

function listBooks() {
    $.ajax({
        method: 'GET',
        url: BASE_URL + 'appdata/' + APP_KEY + '/books',
        headers: {Authorization: 'Kinvey ' + localStorage.getItem('authToken')}
    }).then(function (res) {
        displayPaginationAndBooks(res.reverse())
    }).catch(handleAjaxError)
    // GET -> BASE_URL + 'appdata/' + APP_KEY + '/books'
    // displayPaginationAndBooks(res.reverse())
}


function createBook() {

    let title = $('#formCreateBook input[name="title"]').val()
    let author = $('#formCreateBook input[name="author"]').val()
    let description = $('#formCreateBook textarea[name="description"]').val()
    $.ajax({
        method: 'POST',
        url: BASE_URL + 'appdata/' + APP_KEY + '/books',
        headers: {Authorization: 'Kinvey ' + localStorage.getItem('authToken')},
        data: {title, author, description}
    }).then(function (res) {
        listBooks()
        showInfo('Book created')
    }).catch(handleAjaxError)
    // POST -> BASE_URL + 'appdata/' + APP_KEY + '/books'
    // showInfo('Book created.')
}

function deleteBook(book) {
    $.ajax({
        method: 'DELETE',
        url: BASE_URL + 'appdata/' + APP_KEY + '/books/' + book._id,
        headers: {Authorization: 'Kinvey ' + localStorage.getItem('authToken')}
    }).then(function () {
        listBooks()
        showInfo('Book deleted')
    })
    // DELETE -> BASE_URL + 'appdata/' + APP_KEY + '/books/' + book._id
    // showInfo('Book deleted.')
}

function loadBookForEdit(book) {
    showView('viewEditBook')
    $('#formEditBook input[name="title"]').val(book.title)
    $('#formEditBook input[name="author"]').val(book.author)
    $('#formEditBook textarea[name="description"]').val(book.description)
    $('#formEditBook input[name="id"]').val(book._id)
}

function editBook() {
    let title = $('#formEditBook input[name="title"]').val()
    let author = $('#formEditBook input[name="author"]').val()
    let description = $('#formEditBook textarea[name="description"]').val()
    let id = $('#formEditBook input[name="id"]').val()
    console.log(id)
    $.ajax({
        method: 'PUT',
        url: BASE_URL + 'appdata/' + APP_KEY + '/books/' + id,
        headers: {Authorization: 'Kinvey ' + localStorage.getItem('authToken')},
        data: {title, author, description}
    }).then(function (res) {
        listBooks()
        showInfo('Book edited.')
    }).catch(handleAjaxError)
    // PUT -> BASE_URL + 'appdata/' + APP_KEY + '/books/' + book._id
    // showInfo('Book edited.')
}

function saveAuthInSession(userInfo) {
    localStorage.setItem('authToken', userInfo._kmd.authtoken)
    localStorage.setItem('username', userInfo.username)
    localStorage.setItem('userId', userInfo._id)
}

function logoutUser() {
    $.ajax({
        method: 'POST',
        url: BASE_URL + 'user/' + APP_KEY + '/_logout',
        headers: {Authorization: 'Kinvey ' + localStorage.getItem('authToken')}
    }).then(function (res) {
        localStorage.clear()
        showHomeView()
        showHideMenuLinks()
        $('#loggedInUser').text('')
        showInfo('Logout successful')
    }).catch(handleAjaxError)
    // showInfo('Logout successful.')
}

function signInUser(res, message) {
    saveAuthInSession(res)
    showHideMenuLinks()
    showHomeView()
    $('#loggedInUser').text("Hello " + res.username + "!")
    showInfo(message)
}

function displayPaginationAndBooks(books) {
    showView('viewBooks')
    let pagination = $('#pagination-demo')
    if(pagination.data("twbs-pagination")){
        pagination.twbsPagination('destroy')
    }
    pagination.twbsPagination({
        totalPages: Math.ceil(books.length / BOOKS_PER_PAGE),
        visiblePages: 5,
        next: 'Next',
        prev: 'Prev',
        onPageClick: function (event, page) {
            // remove old page books
            $('#books > table tr').each((index, element) => {
                if (index > 0) {
                    $(element).remove()
                }
            })
            let startBook = (page - 1) * BOOKS_PER_PAGE
            let endBook = Math.min(startBook + BOOKS_PER_PAGE, books.length)
            $(`a:contains(${page})`).addClass('active')
            for (let i = startBook; i < endBook; i++) {
                // add new page books
                let tr = $(`<tr><td>${books[i].title}</td>`+
                    `<td>${books[i].author}</td>`+
                    `<td>${books[i].description}</td>`)
                $('#books > table').append(tr)
                if (books[i]._acl.creator === localStorage.getItem("userId")) {
                    let td = $('<td>')
                    let aDel = $('<a href="#">[Delete]</a>').on('click', function () {
                        deleteBook(books[i])
                    })
                    let aEdit = $('<a href="#">[Edit]</a>').on('click', function () {
                        loadBookForEdit(books[i])
                    })
                    td.append(aDel).append(aEdit)
                    tr.append(td)
                }
            }
        }
    })
}

function handleAjaxError(response) {
    let errorMsg = JSON.stringify(response)
    if (response.readyState === 0)
        errorMsg = "Cannot connect due to network error."
    if (response.responseJSON && response.responseJSON.description)
        errorMsg = response.responseJSON.description
    showError(errorMsg)
}