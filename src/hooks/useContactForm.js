import { useState } from 'react';
import { useAppContext } from '../context/AppContext';

export const useContactForm = (initialState = { name: '', email: '', message: '' }) => {
  const [formData, setFormData] = useState(initialState);
  const [submitStatus, setSubmitStatus] = useState({ success: null, message: '' });
  const { submitContact, submitLoading } = useAppContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus({ success: false, message: 'Please fill in all fields' });
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setSubmitStatus({ success: false, message: 'Please enter a valid email address' });
      return;
    }

    try {
      const result = await submitContact(formData);
      if (result.success) {
        setSubmitStatus({ 
          success: true, 
          message: 'Thank you for your message! I will get back to you soon.' 
        });
        setFormData(initialState);
      }
    } catch (error) {
      setSubmitStatus({ 
        success: false, 
        message: error.message || 'Failed to send message. Please try again later.' 
      });
    }
  };

  return {
    formData,
    submitStatus,
    loading: submitLoading,
    handleChange,
    handleSubmit,
    resetForm: () => setFormData(initialState)
  };
};

export default useContactForm;
