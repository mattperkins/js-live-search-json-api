const search = document.getElementById("search")
const matchList = document.getElementById("match-list")

// search and filter json file
const searchTracks = async searchText => {
  const tracks = await (await fetch('../data.json')).json()

  // Get matches
  let matches = tracks.filter(track => {
    const regex = new RegExp(`^${searchText}`, "gi")
    return track.title.match(regex) || track.album.match(regex)
  })
  if (searchText.length === 0) {
    matches = []
    matchList = ""
  }

  outputHtml(matches)
}

// Render results to HTML
const outputHtml = matches => {
  if (matches.length > 0) {
    const html = matches.map(match => `
      <div class="card card-body mb-1">
        <h5>${match.title} <span class="text-primary">${match.album}</span></h5>
      </div>
    `)
      .join("");

    matchList.innerHTML = html;
  }
};

search.addEventListener("input", () => searchTracks(search.value))
