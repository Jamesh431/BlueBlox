import SortByRating from "../util/SortByRating"

export default function Landing() {
  return(
    <div className="LandingPage">
        <div className="CategoryContainer" id="Popular">
          <div className="HeaderWrapper">
            <h1>Most Popular</h1>
          </div>

          <div className="ShowsWrapper">
            <SortByRating spliceStart={0} rowSize={10}/>
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