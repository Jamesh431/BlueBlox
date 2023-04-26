import PaginatePopular from "../util/PaginatePopular"
import PaginateByGenre from "../util/PaginateByGenre"

export default function Landing() {
  return(
    <div className="landing-page">
            <PaginatePopular />

            <PaginateByGenre genre={'Drama'}/>

            <PaginateByGenre genre={'Crime'}/>
      </div>
  )
}