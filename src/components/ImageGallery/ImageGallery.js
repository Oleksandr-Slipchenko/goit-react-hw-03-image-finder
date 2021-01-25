import { Component } from 'react';
// import ImageGalleryItem from '../ImageGalleryItem';

// const ImageGallery = () => {
//   return (
//     <ul className="ImageGallery">
//       <ImageGalleryItem />
//     </ul>
//   );
// };

// export default ImageGallery;

export default class ImageGallery extends Component {
  componentDidUpdate(prevProps, prevState) {
    const ApiKey = '19996191-7ce9197af192fed24478377bf';
    const value = this.props.inputValue;

    // if (value === '') return;
    if (prevProps.inputValue !== value) {
      fetch(
        `https://pixabay.com/api/?q=${value}&page=1&key=${ApiKey}&image_type=photo&orientation=horizontal&per_page=12`,
      )
        .then(res => res.json())
        // .then(images => this.setState({ images }));
        .then(console.log);
    }
  }
  render() {
    return (
      <ul className="ImageGallery">
        {this.props.inputValue}
        {/* <ImageGalleryItem /> */}
      </ul>
    );
  }
}
