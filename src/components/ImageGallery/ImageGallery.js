import { Component } from 'react';
import PropTypes from 'prop-types';

import fetchApiImages from '../Api';
import ImageGalleryItem from '../ImageGalleryItem';
import Loading from '../Loader';

export default class ImageGallery extends Component {
  static propTypes = {
    inputValue: PropTypes.string.isRequired,
  };

  // static defaultProps = {
  // };

  state = {
    images: null,
    error: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    const value = this.props.inputValue;

    if (prevProps.inputValue !== value) {
      this.setState({ status: 'pending' });

      fetchApiImages
        .fetchApi(value)
        .then(images =>
          this.setState({ images: images.hits, status: 'resolved' }),
        )
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  // handleImportState = () => {
  //   if (this.state.images !== null) {
  //     this.props.onSetImages(this.state.images);
  //   }
  // };

  render() {
    const { error, status } = this.state;

    if (status === 'idle') {
      return (
        <div>
          <p className="status">Введите значение искомой картинки</p>
        </div>
      );
    }

    if (status === 'pending') {
      return <Loading />;
    }

    if (status === 'rejected') {
      return (
        <div>
          <p className="status">{error.message}</p>
        </div>
      );
    }

    if (status === 'resolved') {
      return (
        <ul className="ImageGallery">
          {/* {this.handleImportState} */}
          {this.state.images.map(ImageGalleryItem)}
        </ul>
      );
    }
  }
}
