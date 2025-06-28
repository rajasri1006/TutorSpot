import Alert from 'react-bootstrap/Alert';

export default function Notification({ message, variant = 'info', onClose }) {
  if (!message) return null;

  return (
    <Alert variant={variant} onClose={onClose} dismissible>
      {message}
    </Alert>
  );
}
