import { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Searchbar extends Component {
  state = {
    inputValue: '',
    // images: null,
  };

  // componentDidMount() {
  //   const ApiKey = '19996191-7ce9197af192fed24478377bf';
  //   const value = this.state.inputValue;

  //   // if (value === '') return;
  //   fetch(
  //     `https://pixabay.com/api/?q=${value}&page=1&key=${ApiKey}&image_type=photo&orientation=horizontal&per_page=12`,
  //   )
  //     .then(res => res.json())
  //     .then(images => this.setState({ images }));
  //   // .then(console.log);
  // }

  handleInput = e => {
    this.setState({ inputValue: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.inputValue.trim() === '') {
      toast.error('Введите запрос.');
      return;
    }
    this.props.onSubmit(this.state.inputValue);
    this.setState({ inputValue: '' });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleInput}
            value={this.state.inputValue}
          />
        </form>
      </header>
    );
  }
}
