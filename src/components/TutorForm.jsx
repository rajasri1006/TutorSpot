import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { createTutor } from '../firebase/tutorService';

export default function TutorForm() {
  const [form, setForm] = useState({ name: '', subject: '', location: '', contact: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    createTutor(form);
    setForm({ name: '', subject: '', location: '', contact: '' });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group><Form.Control name="name" value={form.name} onChange={handleChange} placeholder="Tutor Name" /></Form.Group>
      <Form.Group><Form.Control name="subject" value={form.subject} onChange={handleChange} placeholder="Subject" /></Form.Group>
      <Form.Group><Form.Control name="location" value={form.location} onChange={handleChange} placeholder="City/Location" /></Form.Group>
      <Form.Group><Form.Control name="contact" value={form.contact} onChange={handleChange} placeholder="Contact No." /></Form.Group>
      <Button className="mt-2" type="submit">Register Tutor</Button>
    </Form>
  );
}
