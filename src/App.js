import { Component } from 'react';
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
    const { inputValue } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleSearchImages} />
        <ImageGallery inputValue={inputValue} />

        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}

export default App;
