function attachEvents() {
    let url = 'https://phonebook-nakov.firebaseio.com/phonebook'
    let ul = $('#phonebook')
    $('#btnLoad').on('click', upLoad)
    $('#btnCreate').on('click', createContact)


    function upLoad() {
        $.ajax({
            method: 'GET',
            url: url + '.json',
            success: displayContacts,
            error: handleError
        })
    }

    function createContact() {
        let person = $('#person').val()
        let phone = $('#phone').val()
        if (person.trim() !== '' && phone.trim() !== '') {
            let li = $('<li>')
            $.ajax({
                method: 'POST',
                url: url + '.json',
                data: JSON.stringify({person, phone})
            }).then(function () {
                $('#person').val('')
                $('#phone').val('')
                li.text(`${person}: ${phone} `)
                ul.append(li)
            }).catch(handleError)
        }
        $('#person').val('')
        $('#phone').val('')
    }

    function displayContacts(contacts) {
        ul.empty()
        for (let id in contacts) {
            let li = $('<li>').text(`${contacts[id].person}: ${contacts[id].phone} `)
            let button = $('<button>[Delete]</button>')
            button.on('click', function () {
                $.ajax({
                    method: 'DELETE',
                    url: url + '/' + id + '.json'
                }).then(function () {
                    li.remove()
                }).catch(handleError)
            })
            li.append(button)
            ul.append(li)
        }
    }

    function handleError(error) {
        console.log(error)
    }
}