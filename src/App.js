import { Component } from 'react';
import { ToastContainer } from 'react-toastify';

import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Modal from './components/Modal';

class App extends Component {
  state = {
    inputValue: '',
    showModal: false,
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

  // handleSetImages = images => {
  //   this.setState({ images });
  // };

  render() {
    const { inputValue, showModal } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleSearchImages} />
        <ImageGallery
          inputValue={inputValue}
          // onSetImages={this.handleSetImages}
        />
        {showModal && <Modal onClose={this.toggleModal} />}
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}

export default App;
