function attachEvents() {
    let base = 'https://messenger-dc1a7.firebaseio.com/messenger.json'
    let textArea = $('#messages')
    $.ajax({
        method: 'GET',
        url: base
    }).then(displayMessages)
        .catch(handleError)

    $('#submit').on('click', sendMessage)
    $('#refresh').on('click', refreshMessages)

    function sendMessage() {
        let author = $('#author').val()
        let content = $('#content').val()
        let timespan = Date.now()
        if (author !== '' && content !== '') {
            $.ajax({
                method: 'POST',
                url: base,
                data: JSON.stringify({author, content, timespan})
            }).then(function () {
                textArea.append(`${author}: ${content}\n`)
                $('#author').val('')
                $('#content').val('')
            }).catch(function () {
                $('#author').val('')
                $('#content').val('')
            })
        }
    }

    function displayMessages(messages) {
        textArea.empty()
        let keys = Object.keys(messages)
        keys.sort((a, b) => messages[a].timespan - messages[b].timespan)
        for (let id of keys) {
            textArea.append(`${messages[id].author}: ${messages[id].content}\n`)
        }
    }

    function handleError(error) {
        textArea.append(error)
    }

    function refreshMessages() {
        $.ajax({
            method: 'GET',
            url: base
        }).then(displayMessages)
            .catch(handleError)
    }
}