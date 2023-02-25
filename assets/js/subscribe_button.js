var form = document.getElementById("my-form");
      
async function handleSubmit(event) {
event.preventDefault();
var status = document.getElementById("my-form-status");
var data = new FormData(event.target);
fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
}).then(response => {
    if (response.ok) {
    status.innerHTML = "Sweet, you're subscribed!";
    form.reset()
    } else {
    response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
        status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
        } else {
        status.innerHTML = "There was an issue, reload the page try again."
        }
    })
    }
}).catch(error => {
    status.innerHTML = "There was an issue, reload the page try again."
});
}
form.addEventListener("submit", handleSubmit)