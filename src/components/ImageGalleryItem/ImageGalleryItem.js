import PropTypes from 'prop-types';

function ImageGalleryItem({
  id,
  webformatURL,
  tags,
  setLargeImage,
  largeImageURL,
}) {
  return (
    <li className="ImageGalleryItem" key={id}>
      <img
        src={webformatURL}
        alt={tags}
        className="ImageGalleryItem-image"
        onClick={() => setLargeImage(largeImageURL)}
      />
    </li>
  );
}

ImageGalleryItem.defaultProps = {
  webformatURL: 'https://dummyimage.com/600x400/000/fff.jpg&text=empty',
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  setLargeImage: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
