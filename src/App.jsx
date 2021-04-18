import { Component } from 'react';

import ApiService from './services/ApiService';

import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Loader from './components/Loader';
import Modal from './components/Modal';

import styles from './App.module.scss';

class App extends Component {
  state = {
    images: [],
    pageNumber: 1,
    searchQuery: '',
    isLoading: false,
    showModal: false,
    largeImage: '',
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  onChangeQuery = query => {
    this.setState({
      images: [],
      pageNumber: 1,
      searchQuery: query,
      error: null,
    });
  };

  fetchImages = async () => {
    const { searchQuery, pageNumber } = this.state;
    const arg = { searchQuery, pageNumber };

    this.setState({ isLoading: true });

    try {
      const { hits } = await ApiService(arg);

      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        pageNumber: prevState.pageNumber + 1,
      }));

      if (pageNumber !== 1) {
        this.scrollToLoadButton();
      }
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  scrollToLoadButton = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  openModal = imageForModal => {
    this.setState({ largeImage: imageForModal });

    this.toggleModal();
  };

  closeModal = () => {
    this.setState({ largeImage: '' });

    this.toggleModal();
  };

  render() {
    const { images, isLoading, showModal, largeImage, error } = this.state;
    const showLoadMoreButton = images.length > 0 && !isLoading;

    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.onChangeQuery} />

        {error && (
          <error>
            <p>Произошла ошибка, ...</p>
          </error>
        )}

        <ImageGallery images={images} onClickImage={this.openModal} />

        {showLoadMoreButton && <Button onClickButton={this.fetchImages} />}

        {isLoading && <Loader />}

        {showModal && (
          <Modal onClose={this.closeModal}>
            <img src={largeImage} alt="" />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
