const BASE_URL = 'https://baas.kinvey.com/'
const APP_KEY = 'kid_Hk8rEEjVm'
const APP_SECRET = '734ed1246d6844c589f347d7ea7d9f58'
const AUTH_HEADERS = {'Authorization': "Basic " + btoa(APP_KEY + ":" + APP_SECRET)}
const ADVS = []

function startApp() {
    showHideLinks()
    attachEvents()

    function attachEvents() {
        $('#linkHome').click(showHideLinks)
        $('#linkLogin').click(login)
        $('#linkRegister').click(register)
        $('#linkLogout').click(logout)
        $('#linkCreateAd').click(createAdd)
        $('#linkListAds').click(listAdds)
        $("#infoBox, #errorBox").on('click', function() {
            $(this).fadeOut()
        })
    }

    function register() {
        showHideSections('#viewRegister')
        let button = $('#buttonRegisterUser')
        button.on('click', function () {
            let username = $('#formRegister input[name="username"]').val()
            let password = $('#formRegister input[name="passwd"]').val()

            $.ajax({
                method: 'POST',
                url: BASE_URL + 'user/' + APP_KEY + '/',
                headers: AUTH_HEADERS,
                data: {username, password}
            }).then(function (res) {
                singInUser(res, 'Registration successful.', '#viewHome')
            }).catch(handleError)
        })
    }

    function login() {
        showHideSections('#viewLogin')
        let button = $('#buttonLoginUser')
        button.on('click', function () {
            let username = $('#formLogin input[name="username"]').val()
            let password = $('#formLogin input[name="passwd"]').val()

            $.ajax({
                method: 'POST',
                url: BASE_URL + 'user/' + APP_KEY + '/login',
                headers: AUTH_HEADERS,
                data: {username, password}
            }).then(function (res) {
                singInUser(res, 'Login successful', '#viewHome')
            }).catch(handleError)
        })
    }

    function logout() {
        $.ajax({
            method: 'POST',
            url: BASE_URL + 'user/' + APP_KEY + '/_logout',
            headers: {Authorization: 'Kinvey ' + localStorage.getItem('authToken')}
        }).then(function (res) {
            localStorage.clear()
            showHideSections('#viewHome')
            showHideLinks()
            $('#loggedInUser').text('')
            showInfo('Logout successful')
        }).catch(handleError)

    }

    function createAdd() {
        showHideSections('#viewCreateAd')
        let button = $('#buttonCreateAd')
        button.on('click', function () {
            let title = $('#formCreateAd input[name="title"]').val()
            let textarea = $('#formCreateAd textarea[name="description"]').val()
            let date = $('#formCreateAd input[name="datePublished"]').val()
            let price = Number($('#formCreateAd input[name="price"]').val())
            let publisher = localStorage.getItem('username')
            let link = $('#formCreateAd input[name="link"]').val()
            let count = 0
            $.ajax({
                method: 'POST',
                url: BASE_URL + 'appdata/' + APP_KEY + '/adds',
                headers: {Authorization: 'Kinvey ' + localStorage.getItem('authToken')},
                data: {title, textarea, date, price, publisher, link, count}
            }).then(function (res) {
                listAdds()
                showInfo('Advertise created')
                ADVS.push(res)
            }).catch(handleError)
        })
    }

    function listAdds() {
        showHideSections('#viewAds')
        $.ajax({
            method: 'GET',
            url: BASE_URL + 'appdata/' + APP_KEY + '/adds',
            headers: {Authorization: 'Kinvey ' + localStorage.getItem('authToken')}
        }).then(function (res) {
            clearAdds()
            addMissingAds(res)
            updateAd(res)
            //res.sort(compare)
            for (let add of ADVS) {
                let tr = $('<tr>')
                let tdTitle = $('<td>').text(`${add.title}`)
                let tdPublisher = $('<td>').text(`${add.publisher}`)
                let tdText = $('<td>').text(`${add.textarea}`)
                let tdPrice = $('<td>').text(`${Number(add.price)}`)
                let tdDate = $('<td>').text(`${add.date}`)
                let tdLinks = $(`<td>`)
                let aMore = $('<a href="#">[Read More]</a>').on('click', function () {
                    viewMoreAdd(add)
                })
                tdLinks.append(aMore)
                if (add._acl.creator === localStorage.getItem("userId")) {
                    let aDel = $('<a href="#">[Delete]</a>').on('click', function () {
                        deleteAdd(add)
                    })
                    let aEdit = $('<a href="#">[Edit]</a>').on('click', function () {
                        loadAddForEdit(add)
                    })
                    tdLinks.append(aDel).append(aEdit)
                }
                tr.append(tdTitle).append(tdPublisher).append(tdText).append(tdPrice).append(tdDate).append(tdLinks)
                let table = $('#ads table')
                table.append(tr)
            }
        }).catch(handleError)
    }

    function viewMoreAdd(add) {
        showHideSections('#viewMoreAd')
        let title = add.title
        let textarea = add.textarea
        let date = add.date
        let price = add.price
        let publisher = add.publisher
        let link = add.link
        let count = Number(add.count) + 1

        for (let i = 0; i < ADVS.length; i++) {
            if (ADVS[i]._id === add._id) {
                ADVS[i].count = count
            }
        }

        $('#viewMoreAd img').attr('src', add.link)
        $('#viewMoreAd h3[name="title"]').text(`${add.title}`)
        $('#viewMoreAd p[name="description"]').text(`${add.textarea}`)
        $('#viewMoreAd p[name="datePublished"]').text(`${add.date}`)
        $('#viewMoreAd p[name="price"]').text(`${add.price}`)
        $('#viewMoreAd p[name="count"]').text(`${count}`)
        $('#home').click(listAdds)
    }

    function deleteAdd(add) {
        $.ajax({
            method: 'DELETE',
            url: BASE_URL + 'appdata/' + APP_KEY + '/adds/' + add._id,
            headers: {Authorization: 'Kinvey ' + localStorage.getItem('authToken')}
        }).then(function () {
            for (let i = 0; i < ADVS.length; i++) {
                if (ADVS[i]._id === add._id) {
                    ADVS.splice(i, 1)
                    break
                }
            }
            listAdds()
            showInfo('Advertise is deleted')
        })
    }

    function loadAddForEdit(add) {
        showHideSections('#viewEditAd')
        $('#image').attr("src", add.link)
        $('#formEditAd input[name="title"]').val(add.title)
        $('#formEditAd textarea[name="description"]').val(add.textarea)
        $('#formEditAd input[name="datePublished"]').val(add.date)
        $('#formEditAd input[name="price"]').val(add.price)
        $('#formEditAd input[name="id"]').val(add._id)
        $('#formEditAd input[name="publisher"]').val(add.publisher)
        $('#formEditAd input[name="count"]').val(add.count)
        $('#formEditAd input[name="link"]').val(add.link)
        $('#buttonEditAd').click(edit)
    }

    function edit() {
        let title = $('#formEditAd input[name="title"]').val()
        let textarea = $('#formEditAd textarea[name="description"]').val()
        let date = $('#formEditAd input[name="datePublished"]').val()
        let price = $('#formEditAd input[name="price"]').val()
        let link = $('#formEditAd input[name="link"]').val()
        let publisher = $('#formEditAd input[name="publisher"]').val()
        let id = $('#formEditAd input[name="id"]').val()
        let count = $('#formEditAd input[name="count"]').val()

        $.ajax({
            method: 'PUT',
            url: BASE_URL + 'appdata/' + APP_KEY + '/adds/' + id,
            headers: {Authorization: 'Kinvey ' + localStorage.getItem('authToken')},
            data: {title, textarea, date, price, publisher, link, count}
        }).then(function (res) {
            for (let i = 0; i < ADVS.length; i++) {
                if (ADVS[i]._id === id) {
                    ADVS[i].title = title
                    ADVS[i].textarea = textarea
                    ADVS[i].date = date
                    ADVS[i].price = price
                    ADVS[i].publisher = publisher
                    ADVS[i].link = link
                    ADVS[i].count = count
                    break
                }
            }
            listAdds()
            showInfo('Advertise edited')
        }).catch(handleError)
    }

    function showHideSections(sectionId) {
        $('main > section').hide()
        $(sectionId).show()
    }

    function showHideLinks() {
        $('#viewHome').show()
        if (localStorage.getItem('authToken') === null) {
            $('#linkLogin').show()
            $('#linkRegister').show()
            $('#linkHome').show()
            $('#linkCreateAd').hide()
            $('#linkListAds').hide()
            $('#linkLogout').hide()
        } else {
            $('#linkCreateAd').show()
            $('#linkListAds').show()
            $('#linkLogout').show()
            $('#linkLogin').hide()
            $('#linkRegister').hide()
            $('#linkHome').hide()
        }
    }

    function singInUser(res, message, sectionId) {
        saveAuthInSession(res)
        showHideLinks()
        showHideSections(sectionId)
        $('#loggedInUser').text("Hello " + res.username + "!")
        showInfo(message)
    }

    function saveAuthInSession(res) {
        localStorage.setItem('authToken', res._kmd.authtoken)
        localStorage.setItem('username', res.username)
        localStorage.setItem('userId', res._id)
    }

    function showInfo(message) {
        let infoBox = $('#infoBox')
        infoBox.text(message)
        infoBox.show()
        setTimeout(function () {
            $('#infoBox').fadeOut()
        }, 3000)
    }

    function handleError(response) {
        let errorMsg = JSON.stringify(response)
        if (response.readyState === 0) {
            errorMsg = "Cannot connect due to network error."
        }
        if (response.responseJSON && response.responseJSON.description) {
            errorMsg = response.responseJSON.description
        }
        let errorBox = $('#errorBox')
        errorBox.text("Error: " + errorMsg)
        errorBox.show()
    }
    
    function compare(a, b) {
        let aNum = Number(a.count)
        let bNum = Number(b.count)
        if (aNum > bNum) {
            return -1
        }
        if (aNum < bNum) {
            return 1
        }
        return 0
    }

    function clearAdds() {
        $('#ads table tr').each((index, element) => {
            if (index > 0) {
                $(element).remove()
            }
        })
    }
    
    function addMissingAds(res) {
        for (let ad of res) {
            if (!ADVS.filter(obj => obj._id === ad._id).length > 0) {
                ADVS.push(ad)
            }
        }
        ADVS.sort(compare)
    }

    async function updateAd(res) {
        for (let add of res) {
            if (add._acl.creator === localStorage.getItem('userId')) {
                let title = add.title
                let textarea = add.textarea
                let date = add.date
                let price = add.price
                let publisher = add.publisher
                let link = add.link
                let count = add.count
                await $.ajax({
                    method: 'PUT',
                    url: BASE_URL + 'appdata/' + APP_KEY + '/adds/' + add._id,
                    headers: {Authorization: 'Kinvey ' + localStorage.getItem('authToken')},
                    data: {title, textarea, date, price, publisher, link, count}
                }).then(function (res) {
                }).catch(handleError)
            }
        }
    }
}