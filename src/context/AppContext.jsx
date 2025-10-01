import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useApi } from '../hooks/useApi';
import api from '../services/api';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const { request: fetchProjects, loading: projectsLoading } = useApi();
  const { request: fetchFeatured, loading: featuredLoading } = useApi();
  const { request: submitContact, loading: submitLoading } = useApi();

  // Fetch all projects
  const getProjects = useCallback(async () => {
    try {
      const data = await fetchProjects(api.getProjects);
      setProjects(data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  }, [fetchProjects]);

  // Fetch featured projects
  const getFeaturedProjects = useCallback(async () => {
    try {
      const data = await fetchFeatured(api.getFeaturedProjects);
      setFeaturedProjects(data);
    } catch (error) {
      console.error('Error fetching featured projects:', error);
    }
  }, [fetchFeatured]);

  // Submit contact form
  const submitContactForm = async (contactData) => {
    try {
      const response = await submitContact(api.submitContact, contactData);
      return { success: true, data: response };
    } catch (error) {
      console.error('Error submitting contact form:', error);
      return { success: false, error };
    }
  };

  // Load data on component mount
  useEffect(() => {
    getProjects();
    getFeaturedProjects();
  }, [getProjects, getFeaturedProjects]);

  return (
    <AppContext.Provider
      value={{
        projects,
        featuredProjects,
        projectsLoading,
        featuredLoading,
        submitLoading,
        submitContact: submitContactForm,
        refreshProjects: getProjects,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

export default AppContext;
