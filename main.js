document.querySelector("#getButton").addEventListener("click", apiRequest)

async function apiRequest() {
  const albumName = document.querySelector("input").value
  try {
    const response = await fetch(
      `https://halestorm-discography-api.herokuapp.com/albums/${albumName}`
    )
    const data = await response.json()
    console.log(data)
    document.getElementById("albumName").innerText = data.name
    document.getElementById("albumDate").innerText = data.releaseDate
    document.getElementById("albumType").innerText = data.albumType
    document.getElementById("albumPosition").innerText = data.peakPosition
    document.getElementById("albumImage").src = data.image
  } catch (error) {
    console.log(error)
  }
}
