import React from 'react';

const Carousel = () => {
  // Inline style for responsive image
  const imageStyle = {
    height: '60vh',        // 50% of the viewport height
    width: '100%',
    objectFit: 'cover'     // Keeps aspect ratio, fills the space, crops overflow
  };

  return (
    <section className="row justify-content-center">
      <div className="col-md-12">
        <div id="mycarousel" className="carousel slide" data-bs-ride="carousel"  data-bs-interval="2000">

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/card.png" style={imageStyle} className="d-block w-100" alt="Slide 1" />
            </div>
            <div className="carousel-item">
              <img src="/slide2.jpg" style={imageStyle} className="d-block w-100" alt="Slide 2" />
            </div>
            <div className="carousel-item">
              <img src="/slide3.jpg" style={imageStyle} className="d-block w-100" alt="Slide 3" />
            </div>
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#mycarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon bg-secondary" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#mycarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon bg-secondary" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>

        </div>
      </div>
    </section>
  );
};

export default Carousel;
