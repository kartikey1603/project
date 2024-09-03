import React from 'react';
import FormComponent from './components/FormComponent';
import Jobs from './components/Jobs';
import Workshops from './components/Workshops';

const App = () => {
  return (
    <div>
      <h1>Career Guidance Website</h1>
      <FormComponent />
      <Jobs />
      <Workshops />
    </div>
  );
};

export default App;
