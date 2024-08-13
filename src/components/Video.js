import React from 'react'

const Video = () => {
  return (
    <div>
       <section className="video hidden">
                <div className="video-card">
                    <div className="video">
                        <video autoPlay muted loop playsInline>
                            <source src="/images/human.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default Video
