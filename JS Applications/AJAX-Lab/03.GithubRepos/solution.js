function loadRepos() {
    let username = $('#username').val()
    let url = `https://api.github.com/users/${username}/repos`

    $.ajax({
        method: 'GET',
        url: url,
        success: successRepos,
        error: handleError
    })

    function successRepos(res) {
        $('#repos').empty()
        for (let repo of res) {
            let li = $(`<li><a href="${repo.html_url}">${repo.full_name}</a></li>`)
            $('#repos').append(li)
        }
    }

    function handleError(err) {

    }
}