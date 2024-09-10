import PropTypes from 'prop-types';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import './EventGallery.css';

const EventGallery = ({ images }) => {
  if (!images || images.length === 0) {
    return <div>No images available</div>;
  }

  return (
    <div className="event-gallery-container">
      <Carousel autoPlay infiniteLoop showThumbs={false} showIndicators={false}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

EventGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default EventGallery;
