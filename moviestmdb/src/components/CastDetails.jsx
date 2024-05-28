import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const CastDetails = () => {
    const {id} = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        const getCast = async () => {
                    fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`)
                    .then((response) => response.json)
                    .then((data) => {
                        if(data.cast){
                            setCast(data.cast)
                        }
                    })
                }
                getCast(id);
    }, [id]);

  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`} alt={cast.name} />
    </div>
  )
}

export default CastDetails
