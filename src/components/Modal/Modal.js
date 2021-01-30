import { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  // state = {
  //   image: null,
  // };

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

  // handleSetModalImage = e => {
  //   this.setState({ image: e });
  // };

  render() {
    return createPortal(
      <div
        className="Overlay"
        onClick={this.handleCloseOnBackdrop}
        // onModal={this.handleSetModalImage}
      >
        <div className="Modal">
          <img
            src=""
            // src={this.state.image}
            alt=""
          />
        </div>
      </div>,
      modalRoot,
    );
  }
}
