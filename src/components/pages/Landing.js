import RenderPopular from "../util/RenderPopular"
import SortByCat from "../util/SortByCat"

export default function Landing() {
  return(
    <div className="LandingPage">
            <RenderPopular />

            <SortByCat genre={'Drama'}/>

            <SortByCat genre={'Crime'}/>

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