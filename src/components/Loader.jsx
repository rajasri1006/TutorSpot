import Spinner from 'react-bootstrap/Spinner';

export default function Loader() {
  return (
    <div className="text-center my-4">
      <Spinner animation="border" role="status" />
      <span className="sr-only">Loading...</span>
    </div>
  );
}
