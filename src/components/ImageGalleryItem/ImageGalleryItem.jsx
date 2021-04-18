import PropTypes from 'prop-types';

import defaultImage from './default-image.jpg';

import styles from './ImageGalleryItem.module.scss';

const ImageGalleryItem = ({ image, onClickImage }) => {
  const { webformatURL, tags, largeImageURL } = image;

  const openLargeImage = () => onClickImage(largeImageURL);

  return (
    <li className={styles.ImageGalleryItem}>
      <img
        src={webformatURL}
        alt={tags}
        className={styles.ImageGalleryItem__image}
        onClick={openLargeImage}
      />
    </li>
  );
};

ImageGalleryItem.defaultProps = {
  tags: 'Foto',
  webformatURL: defaultImage,
  largeImageURL: defaultImage,
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onClickImage: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
