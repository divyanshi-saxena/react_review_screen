import React from 'react'
import DocPreviewer from './DocPreviewer'
import Sidebar from './Sidebar'
import image from '../assets/images/image.jpg'

const ReviewPage = () => {
  return (
    <div>
      <div className="review-page"
      >
        <div className="col-9"><DocPreviewer /></div>
        <div className="col-3"><Sidebar /></div>
      </div>
      <img id="accStmt"
        src={image} alt="Account Statement"
        style={{ display: "none" }}
      ></img>
    </div>
  )
}

export default ReviewPage
