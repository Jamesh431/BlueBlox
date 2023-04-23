import PaginatePopular from "../util/PaginatePopular"
import PaginateByGenre from "../util/PaginateByGenre"

export default function Landing() {
  return(
    <div className="LandingPage">
            <PaginatePopular />

            <PaginateByGenre genre={'Drama'}/>

            <PaginateByGenre genre={'Crime'}/>

        {/* <div className="CategoryContainer">
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
        </div> */}
      </div>
  )
}