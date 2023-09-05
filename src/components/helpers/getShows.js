const getShows = async () => {
  const shows = await fetch("https://api.tvmaze.com/shows")
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log("Error: Fetch was not complete", err));

  return shows;
};

export default getShows;
