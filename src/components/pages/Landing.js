import RenderPopular from "../util/RenderPopular"
import RenderByCategory from "../util/RenderByCategory"

export default function Landing() {
  return(
    <div className="LandingPage">
            <RenderPopular />

            <RenderByCategory genre={'Drama'}/>

            <RenderByCategory genre={'Crime'}/>

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