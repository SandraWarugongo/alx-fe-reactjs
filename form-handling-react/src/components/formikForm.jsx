import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Validation schema using Yup
const validationSchema = Yup.object({
  username: Yup.string()
    .required('Username is required')
    .min(3, 'Username must be at least 3 characters'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required')
});

const FormikForm = () => {
  const initialValues = {
    username: '',
    email: '',
    password: ''
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      // Mock API call - simulate delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Formik submission:', values);
      alert('Registration successful with Formik!');
      
      // Reset form after successful submission
      resetForm();
    } catch (error) {
      console.error('Registration failed:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h2>User Registration (Formik)</h2>
      
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="username">Username:</label>
              <Field
                type="text"
                id="username"
                name="username"
                style={{ 
                  width: '100%', 
                  padding: '8px', 
                  marginTop: '5px',
                  borderRadius: '4px',
                  border: '1px solid #ccc'
                }}
              />
              <ErrorMessage 
                name="username" 
                component="div" 
                style={{ color: 'red', fontSize: '14px', marginTop: '5px' }} 
              />
            </div>

            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="email">Email:</label>
              <Field
                type="email"
                id="email"
                name="email"
                style={{ 
                  width: '100%', 
                  padding: '8px', 
                  marginTop: '5px',
                  borderRadius: '4px',
                  border: '1px solid #ccc'
                }}
              />
              <ErrorMessage 
                name="email" 
                component="div" 
                style={{ color: 'red', fontSize: '14px', marginTop: '5px' }} 
              />
            </div>

            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="password">Password:</label>
              <Field
                type="password"
                id="password"
                name="password"
                style={{ 
                  width: '100%', 
                  padding: '8px', 
                  marginTop: '5px',
                  borderRadius: '4px',
                  border: '1px solid #ccc'
                }}
              />
              <ErrorMessage 
                name="password" 
                component="div" 
                style={{ color: 'red', fontSize: '14px', marginTop: '5px' }} 
              />
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              style={{
                backgroundColor: isSubmitting ? '#ccc' : '#28a745',
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '4px',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                width: '100%'
              }}
            >
              {isSubmitting ? 'Registering...' : 'Register'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;