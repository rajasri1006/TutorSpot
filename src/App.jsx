import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TutorForm from './components/TutorForm';
import SearchForm from './components/SearchForm';
import TutorList from './components/TutorList';
import Container from 'react-bootstrap/Container';

export default function App() {
  const [filters, setFilters] = useState({ subject: '', location: '' });

  return (
    <>
      <Header />
      <Container>
        <h3>Register as Tutor</h3>
        <TutorForm />
        <hr />
        <h3>Find Tutors</h3>
        <SearchForm onSearch={setFilters} />
        <TutorList filters={filters} />
      </Container>
      <Footer />
    </>
  );
}
