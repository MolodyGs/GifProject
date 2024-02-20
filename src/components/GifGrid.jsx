import { useEffect, useState } from "react"
import {getGifs} from "./Helpers/getGifs";

export const GifGrid = ({category}) => {
  
  const [gifs, setgifs] = useState([])

  useEffect(() => {
    getGifs(category)
    .then((gifs) => {
      setgifs([...gifs]);
    });
    // console.log(gifs);

  }, [ ])
  // console.log(gifs);
  return (
    <>
      <h3>{category}</h3>
      <div>
        {gifs.map((gif)=>{
            return(
            <img key={gif.id} src={gif.url} alt="" />
          )})
        }
      </div>
    </>
  )
}

