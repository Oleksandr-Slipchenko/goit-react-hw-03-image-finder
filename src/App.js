import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';

import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';

class App extends Component {
  state = {
    inputValue: '',
  };

  handleSearchImages = inputValue => {
    this.setState({ inputValue });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleSearchImages} />
        <ImageGallery inputValue={this.state.inputValue} />
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}

export default App;
