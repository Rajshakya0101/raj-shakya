import React from 'react'
import './Loader.css'

const Loader = ({ size = 280, fade = false, onReady }) => {
  return (
    <div className={`loader-overlay ${fade ? 'fade-out' : 'visible'}`}>
      <div className="loader-content">
        <iframe
          src="https://lottie.host/embed/65472396-44c2-47ea-9414-c972cb5a4494/iRzI7CoM6n.lottie"
          width={size}
          height={size}
          frameBorder="0"
          allowFullScreen
          title="loader"
          onLoad={onReady}
          style={{ border: 'none', background: 'transparent' }}
        />
      </div>
    </div>
  )
}

export default Loader
