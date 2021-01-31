import PropTypes from 'prop-types';

function Button({ loadMore }) {
  return (
    <div className="Button-block">
      <button type="button" className="Button" onClick={loadMore}>
        Load more
      </button>
    </div>
  );
}

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};

export default Button;
