import React, { useState } from 'react';
import './App.css';
import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/formikForm.jsx';

function App() {
  const [currentForm, setCurrentForm] = useState('controlled');

  return (
    <div className="App">
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h1>React Form Handling Demo</h1>
        
        {/* Form switcher buttons */}
        <div style={{ marginBottom: '30px' }}>
          <button
            onClick={() => setCurrentForm('controlled')}
            style={{
              backgroundColor: currentForm === 'controlled' ? '#007bff' : '#6c757d',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              marginRight: '10px'
            }}
          >
            Controlled Components
          </button>
          
          <button
            onClick={() => setCurrentForm('formik')}
            style={{
              backgroundColor: currentForm === 'formik' ? '#007bff' : '#6c757d',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Formik Form
          </button>
        </div>

        {/* Render the selected form */}
        {currentForm === 'controlled' && <RegistrationForm />}
        {currentForm === 'formik' && <FormikForm />}
      </div>
    </div>
  );
}

export default App;