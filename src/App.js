import { Component } from 'react';
import { ToastContainer } from 'react-toastify';

import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Modal from './components/Modal';

class App extends Component {
  state = {
    inputValue: '',
    showModal: false,
    largeImage: null,
    // images: [],
  };

  toggleModal = () => {
    // this.setState(state => ({
    //   showModal: !state.showModal,
    // }));
    // Деструктуризация:
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  handleSearchImages = inputValue => {
    this.setState({ inputValue });
  };

  handleSetLargeImage = e => {
    this.setState({ largeImage: e });
  };

  render() {
    const { inputValue, showModal } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleSearchImages} />
        <ImageGallery
          inputValue={inputValue}
          setLargeImage={this.handleSetLargeImage}
        />
        {showModal && <Modal onClose={this.toggleModal} />}
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}

export default App;
