import React from 'react'
import './CatCard.scss'
import { Link } from 'react-router-dom'

const CatCard = ({item}) => {
  return (
    <Link to='/gigs?cat=design'>
        <div className="catcard">
            <img src={item.img} alt="" />
            <div className="desc">{item.desc}</div>
            <div className="title">{item.title}</div>
        </div>
    </Link>
  )
}

export default CatCard