import { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleCloseOnBackdrop = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className="Overlay" onClick={this.handleCloseOnBackdrop}>
        <div className="Modal">
          <img
            src="https://pixabay.com/get/gb3750fdc7fa18848ce61e2037ce2ac7f9b3660c4e5e73992ed53ecbb669e4f55db3782bf2e91d064fba2213770b9ec0209f696d22af51146e1b58a9ce43fa4ef_1280.jpg"
            alt=""
          />
        </div>
      </div>,
      modalRoot,
    );
  }
}
