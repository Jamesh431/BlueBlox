const getShows = async () =>  {
  const shows = await fetch("http://api.tvmaze.com/shows") 
    .then((res) => { return res.json() })
    .catch(err => console.log('Error: Fetch was not complete',err))

  return shows
}

export default getShows;
