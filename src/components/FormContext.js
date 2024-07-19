import React, { createContext, useState } from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    organizationName: '',
    email: '',
    contact: '',
    slotDate: '',
    slotTime: '',
    topic: '',
    paymentMethod: '',
  });

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};
