async function deleteCar(carID) {
  const response = await fetch(`/cars/${carID}`,{
    method: 'DELETE'
  })
  if (response.status == 204) {
    window.location = "/cars"
  } else {
    alert("der er sket en fejl. PiS!")
  }
}

async function editCar(carID) {
  const brand = document.body.getElementsByTagName('input')[0].value
  const model = document.body.getElementsByTagName('input')[1].value
  let data = {brand: brand, model: model}
  let url = `/editCar/${carID}`
  const response = await fetch(url, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {'Content-Type': 'application/json'}
  })
  if (response.status == 200) {
    window.location = "/cars"
  } else {
    alert("Ups der skete en fejl")
  }
}