import { useEffect, useState } from 'react';
import { subscribeTutors } from '../firebase/tutorService';

export default function TutorList({ filters }) {
  const [allTutors, setAllTutors] = useState([]);

  useEffect(() => {
    const unsub = subscribeTutors(setAllTutors);
    return () => unsub && unsub();
  }, []);

  const filtered = allTutors.filter(t =>
    (!filters.subject || t.subject.toLowerCase().includes(filters.subject.toLowerCase())) &&
    (!filters.location || t.location.toLowerCase().includes(filters.location.toLowerCase()))
  );

  if (!filtered.length) return <p>No tutors found.</p>;

  return (
    <ul className="list-group">
      {filtered.map(t => (
        <li className="list-group-item" key={t.id}>
          <strong>{t.name}</strong><br />
          Subject: {t.subject} <br />
          Location: {t.location} <br />
          Contact: {t.contact}
        </li>
      ))}
    </ul>
  );
}
