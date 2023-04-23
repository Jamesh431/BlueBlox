const getOneShow = async (showId) =>  {
  const showLink = ("http://api.tvmaze.com/shows/" + showId)

  const shows = await fetch(showLink) 
    .then((res) => { return res.json() })
    .catch(err => console.log('Error: Show Fetch was incomplete',err))

  return shows
}

export default getOneShow;
