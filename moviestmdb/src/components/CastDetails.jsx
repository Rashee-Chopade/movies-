import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CCarousel } from '@coreui/react';
import { CImage } from '@coreui/react';
import { CCarouselCaption } from '@coreui/react';

const CastDetails = () => {
  const { id } = useParams();
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    console.log(id);
    const getCastDetails = async () => {
      fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`)
        .then((resp) => resp.json())
        .then((data) => {
          setCasts(data.cast);
          console.log(casts);
        })
    }
    getCastDetails();
  }, [id])

  return (
    <div>
      <CCarousel className='cast-grid' controls indicators>
        {casts.map((cast, id) => (
          <div>
              <CImage key={id} className="d-block w-25" src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`} alt={cast.name} />
              <CCarouselCaption className="d-none d-md-block">
                <p className='fs-4 mb-0 mt-2'>{cast.name}</p>
                <p className='fs-4'>Character: {cast.character}</p>
              </CCarouselCaption>
          </div>
        ))}
      </CCarousel>
    </div >
  )
}

export default CastDetails
