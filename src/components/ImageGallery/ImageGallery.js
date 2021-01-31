import { Component } from 'react';
import PropTypes from 'prop-types';

import fetchApiImages from '../Api';
import ImageGalleryItem from '../ImageGalleryItem';
import Loading from '../Loader';
import Button from '../Button';

export default class ImageGallery extends Component {
  static propTypes = {
    inputValue: PropTypes.string.isRequired,
  };

  // static defaultProps = {
  // };

  state = {
    images: null,
    page: 1,
    error: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevValue = prevProps.inputValue;
    const value = this.props.inputValue;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevValue !== value) {
      // this.setState({ status: 'pending' });
      this.setState({ images: [], page: 1 });
    }

    if (prevValue !== value || prevPage !== nextPage) {
      this.searchMoreImages(value, nextPage);
    }
  }

  searchMoreImages(value, nextPage) {
    this.setState({ status: 'pending' });

    fetchApiImages
      .fetchApi(value, nextPage)
      .then(images => {
        this.setState(prevState => ({
          images: [...prevState.images, ...images.hits],
          status: 'resolved',
        }));
      })
      .catch(error => this.setState({ error, status: 'rejected' }))
      .finally(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      });
  }

  loadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  render() {
    const { error, status, images } = this.state;

    if (status === 'idle') {
      return (
        <div>
          <p className="status">Введите название искомой картинки</p>
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
        <>
          <ul className="ImageGallery">
            {images.map(image => (
              <ImageGalleryItem {...image} key={image.id} />
            ))}
          </ul>
          {(images.length > 0 || status === 'resolved') && (
            <Button loadMore={this.loadMore} />
          )}
        </>
      );
    }
  }
}
