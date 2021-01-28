import Loader from 'react-loader-spinner';

export default function Loading() {
  return (
    <div>
      <Loader
        className="status"
        type="ThreeDots"
        color="#00BFFF"
        height={80}
        width={80}
      />
      <p className="status">Loading...</p>
    </div>
  );
}
