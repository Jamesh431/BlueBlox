export default function Landing() {
  // state data

  // useEffect(() => {
  //   // fetch("https://api.tvmaze.com/singlesearch/shows?q=The-Mandalorian")
  //   // fetch("https://api.tvmaze.com/singlesearch/shows?q=The-blacklist")
  //   fetch("http://api.tvmaze.com/shows") 
  //   .then((res) => res.json())

  //   .then((data) => { 
  //     console.log(data)
  //     // setShows(data) 
  //     // props.setDataSet(data)
  //   })

  //   .catch(err => console.log('Error: Fetch was not complete',err))
  // }, []);

  return(
    <div className="LandingPage">
        <div className="CategoryContainer" id="Popular">
          <div className="HeaderWrapper">
            <h1>Most Popular</h1>
          </div>

          <div className="ShowsWrapper">
            {/* <SortyByRating /> */}
            <div className="ShowContainer">Insert Show Here</div>
            <div className="ShowContainer">Insert Show Here</div>
            <div className="ShowContainer">Insert Show Here</div>
            <div className="ShowContainer">Insert Show Here</div>
          </div>
        </div>

        <div className="CategoryContainer">
          <div className="HeaderWrapper">
            <h1>Category</h1>
          </div>

          <div className="ShowsWrapper">
            <div className="ShowContainer">Insert Show Here</div>
            <div className="ShowContainer">Insert Show Here</div>
            <div className="ShowContainer">Insert Show Here</div>
            <div className="ShowContainer">Insert Show Here</div>
          </div>
        </div>

        <div className="CategoryContainer">
          <div className="HeaderWrapper">
            <h1>Category</h1>
          </div>

          <div className="ShowsWrapper">
            <div className="ShowContainer">Insert Show Here</div>
            <div className="ShowContainer">Insert Show Here</div>
            <div className="ShowContainer">Insert Show Here</div>
            <div className="ShowContainer">Insert Show Here</div>
          </div>
        </div>

        <div className="CategoryContainer">
          <div className="HeaderWrapper">
            <h1>Category</h1>
          </div>

          <div className="ShowsWrapper">
            <div className="ShowContainer">Insert Show Here</div>
            <div className="ShowContainer">Insert Show Here</div>
            <div className="ShowContainer">Insert Show Here</div>
            <div className="ShowContainer">Insert Show Here</div>
          </div>
        </div>

        <div className="CategoryContainer">
          <div className="HeaderWrapper">
            <h1>Category</h1>
          </div>

          <div className="ShowsWrapper">
            <div className="ShowContainer">Insert Show Here</div>
            <div className="ShowContainer">Insert Show Here</div>
            <div className="ShowContainer">Insert Show Here</div>
            <div className="ShowContainer">Insert Show Here</div>
          </div>
        </div>

        <div className="CategoryContainer">
          <div className="HeaderWrapper">
            <h1>Category</h1>
          </div>

          <div className="ShowsWrapper">
            <div className="ShowContainer">Insert Show Here</div>
            <div className="ShowContainer">Insert Show Here</div>
            <div className="ShowContainer">Insert Show Here</div>
            <div className="ShowContainer">Insert Show Here</div>
          </div>
        </div>
      </div>
  )
}