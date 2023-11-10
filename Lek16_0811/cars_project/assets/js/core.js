async function deleteCar(carID) {
  const response = await fetch(`/cars/${carID}`,{
    method: 'delete'
  })
  if (response.status == 204) {
    window.location = "/cars"
  } else {
    alert("der er sket en fejl. PiS!")
  }
}