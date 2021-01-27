import { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';

export default class ImageGallery extends Component {
  static propTypes = {
    inputValue: PropTypes.string.isRequired,
  };

  // static defaultProps = {
  // };

  state = {
    images: [],
  };

  componentDidUpdate(prevProps, prevState) {
    const ApiKey = '19996191-7ce9197af192fed24478377bf';
    const value = this.props.inputValue;

    if (prevProps.inputValue !== value) {
      fetch(
        `https://pixabay.com/api/?q=${value}&page=1&key=${ApiKey}&image_type=photo&orientation=horizontal&per_page=12`,
      )
        .then(res => res.json())
        .then(images => this.setState({ images: images.hits }));
    }
  }
  render() {
    return (
      <ul className="ImageGallery">
        {this.state.images.map(ImageGalleryItem)}
      </ul>
    );
  }
}
