import React from 'react'

export const Sidebar = ({colectionId, artworkUrl600, artistName, trackCount}) => {
    let PrincipalInfo = JSON.parse(localStorage.getItem("PrincipalInfo"));
    let PrincipalInfoDescription = JSON.parse(localStorage.getItem("PrincipalInfoDescription"));
  return (
    <div className='containerSidebar'>
        {PrincipalInfo ? (
            <div className={`${ PrincipalInfoDescription.shortDescription ? 'infoPrincipal'  : ''}`}>
            {PrincipalInfo.map((item) => (
                <div key={item.trackId}>
                    <img src={item.artworkUrl600} className="imgDetail" alt={item.artworkUrl600} />
                    <h3>By: {item.artistName}</h3>
                    <p className={`${ PrincipalInfoDescription.shortDescription ? 'descriptionSidebar'  : ''}`}>{PrincipalInfoDescription.shortDescription ? PrincipalInfoDescription.shortDescription : ''} Episodies</p>
                </div>
            ))}
            </div>
        ) : (
            <div key={colectionId} className="cardInfoDetail">
                <img src={artworkUrl600} className="imgDetail" alt={artworkUrl600} />
                <h2>{artistName}</h2>
                <h3>{trackCount} Episodies</h3>
            </div>
        )}
    </div>
  )
}
