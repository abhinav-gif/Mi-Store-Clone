import React from 'react'
import '../styles/Videos.css'
const play = <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M16 37.85v-28l22 14Zm3-14Zm0 8.55 13.45-8.55L19 15.3Z" /></svg>;

const Videos = ({ Videos }) => {
  return (
    <div className='Videos'>
      {
        Videos.map((item, index) => (
          <a href={item.url} target="_blank" rel="noreferrer" key={item.url}><div className='videoCard' style={{ backgroundImage: `url(${item.image})` }}>
            <a href={item.url} target="_blank" rel="noreferrer">{play}</a>
            <p>{item.name}</p>
          </div>
          </a>
        ))
      }
    </div>
  )
}

export default Videos