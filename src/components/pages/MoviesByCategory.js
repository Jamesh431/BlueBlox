import { useEffect, useState } from "react";

function MoviesByCategory(props){
  const [data,setData] = useState([])

  useEffect(()=>{
    const filteredData = filterFunction(props.data)
    setData(filteredData)
  }, [props])
  
  return(
    <div>
      <div>content</div>
    </div>)
}
export default MoviesByCategory