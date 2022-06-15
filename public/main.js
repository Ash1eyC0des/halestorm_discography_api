document.querySelector("#getButton").addEventListener("click", apiRequest)

async function apiRequest() {
  const albumName = document.querySelector("input").value
  try {
        const response = await fetch(
        `https://halestorm-discography-api.herokuapp.com/albums/${albumName}`
        )
        const data = await response.json()
        console.log(data)
        
        document.getElementById("albumName").innerText = data[0].name
        document.getElementById("albumDate").innerText = data[0].releaseDate
        document.getElementById("albumType").innerText = data[0].albumType
        document.getElementById("albumPosition").innerText = data[0].peakPosition
        document.getElementById("albumImage").src = data[0].image
  } catch (error) {
        console.log(error)
  }
}
