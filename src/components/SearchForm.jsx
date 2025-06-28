import { useState } from 'react';

export default function SearchForm({ onSearch }) {
  const [subject, setSubject] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSearch({ subject, location });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3 d-flex gap-2">
      <input value={subject} onChange={e => setSubject(e.target.value)} placeholder="Subject" />
      <input value={location} onChange={e => setLocation(e.target.value)} placeholder="City" />
      <button className="btn btn-primary" type="submit">Search</button>
    </form>
  );
}
