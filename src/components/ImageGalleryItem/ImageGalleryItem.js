import { Component } from 'react';
import PropTypes from 'prop-types';

import Modal from '../Modal';

export default class ImageGalleryItem extends Component {
  static propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string,
  };
  state = {
    showModal: false,
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { webformatURL, tags, largeImageURL } = this.props;
    const { showModal } = this.state;

    return (
      <li className="ImageGalleryItem">
        <img
          src={webformatURL}
          alt={tags}
          className="ImageGalleryItem-image"
          onClick={this.toggleModal}
        />
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img
              style={{
                display: 'block',
                maxWidth: '800px',
                height: 'auto',
              }}
              src={largeImageURL}
              alt={tags}
            />
          </Modal>
        )}
      </li>
    );
  }
}
