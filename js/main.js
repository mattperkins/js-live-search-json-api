const search = document.getElementById("search")
const matchList = document.getElementById("match-list")

// search and filter json file
const searchStates = async searchText => {
  const data = await (await fetch('../data.json')).json()

  console.log(data)
}

search.addEventListener("input", () => searchStates(search.values))
