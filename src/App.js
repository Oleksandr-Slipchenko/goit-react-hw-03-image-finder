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

  handleOpenModal = largeImage => {
    this.setState({ largeImage });
  };

  // handleGetModal = () => {
  //   if (this.state.largeImage !== null) {
  //     this.props.onModal(this.state.largeImage);
  //     this.toggleModal();
  //   }
  // };

  render() {
    const { inputValue, showModal } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleSearchImages} />
        <ImageGallery
          inputValue={inputValue}
          getLargeImage={this.handleOpenModal}
        />
        {showModal && (
          <Modal
            onClose={this.toggleModal}
            // onModal={this.handleGetModal}
          />
        )}
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}

export default App;
