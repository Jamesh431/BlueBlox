const getShows = async () =>  {
  const shows = await fetch("http://api.tvmaze.com/shows") 
    .then((res) => { return res.json() })
    .catch(err => console.log('Error: Fetch was not complete',err))

  return shows
}

export default getShows;
// -------------
  // either filter through or splice to set results that have already been sorted for the top 20


  // const [person, setPerson] = useState({})

  // useEffect(() => {
  //   const controller = new AbortController();
  //   const { signal } = controller;

  //   fetch("https://swapi.tech/api/people", {
  //     signal
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data)
  //     })
  //     .catch((err) => {
  //       console.error("Get Person Error: ", err);
  //     });

  //   return () => controller.abort();
  // }, []);
// }



