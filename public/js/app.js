const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#msg-1')
const messageTwo = document.querySelector('#msg-2')



weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
    messageTwo.textContent = ''
    messageOne.textContent = 'Loading...'
    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if(data.error) {
                return messageOne.textContent = data.error
            }

            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast
        })
    })
})