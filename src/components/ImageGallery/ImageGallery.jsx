import PropTypes from 'prop-types';

import ImageGalleryItem from '../ImageGalleryItem';

import styles from './ImageGallery.module.scss';

const ImageGallery = ({ images, onClickImage }) => {
  return (
    <ul className={styles.ImageGallery}>
      {images.map(image => {
        return (
          <ImageGalleryItem
            key={image.id}
            image={image}
            onClickImage={onClickImage}
          />
        );
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  id: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ImageGallery;
