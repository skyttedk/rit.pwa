
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa('kss:gdMGXxAwH4khmLfYW07PqZrRa5C10tlLqe3dNgRF90g=')
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });

  if (response.status == 200) {
    return response.json(); // parses JSON response into native JavaScript objects
  }

}

async function onLoad() {
  try {
    let response = await postData("https://api.businesscentral.dynamics.com/v2.0/e15ec559-2613-43b3-90ec-9c684104b30d/Sandbox/ODataV4/Company('CRONUS%20Danmark%20A%2FS')/RITWebServer('2000-S')/NAV.Test");
    let value = JSON.parse(response.value)
    let body = value.response

    $("#container").empty();
    $("#container").html(atob(body)).trigger('create');

  } catch (ex) {
    console.error(ex.message)
  }
}
