mapboxgl.accessToken =
  "pk.eyJ1IjoiYW50aXN0YXRpYzE4OSIsImEiOiJja3I5emxzdWQyZ3o4MnZwZGY4eHVmN3hwIn0.dawZ_CPyvNtZpO2GHkqpKQ"

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true
})

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
  setupMap([14.58569756650155, 120.97681237343261], 7)
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: 15




    
  })

  const nav = new mapboxgl.NavigationControl()
  map.addControl(nav)

  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken
  })



  map.addControl(directions, "top-left")











}


