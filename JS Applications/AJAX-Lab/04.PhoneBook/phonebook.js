const BASE_URL = 'https://phonebook-6b943.firebaseio.com/phonebook'
const TABLE = $('#phonebook')
const PERSON = $('#person')
const PHONE = $('#phone')

$('#btnLoad').on('click', loadContacts)
$('#btnCreate').on('click', createContacts)

function loadContacts() {
    $.ajax({
        method: 'GET',
        url: BASE_URL + '.json'
    }).then(appendContacts)
        .catch(handleError)
}

function appendContacts(contacts) {
    TABLE.empty()
    let keys = Object.keys(contacts)
    keys.sort((a, b) => contacts[a].name.localeCompare(contacts[b].name))
    for (let id of keys) {
        let li = $('<li>')
        li.text(`${contacts[id].name}: ${contacts[id].phone}`)
        let button = $('<button>Delete</button>')
        button.on('click', function () {
            $.ajax({
                method: "DELETE",
                url: BASE_URL + '/' + id + '.json'
            }).then(function () {
                li.remove()
            }).catch(handleError)
        })
        li.append(button)
        TABLE.append(li)
    }
}

function createContacts() {
    let name = PERSON.val()
    let phone = PHONE.val()
    if (name.trim() !== '' && phone.trim() !== '') {
        $.ajax({
            method: 'POST',
            url: BASE_URL + '.json',
            data: JSON.stringify({name, phone})
        }).then(function () {
            PERSON.val('')
            PHONE.val('')
            let li = $('<li>')
            li.text(`${name}: ${phone}`)
            TABLE.append(li)
        }).catch(handleError)
    }
}

function handleError(error) {
    console.log(error)
}