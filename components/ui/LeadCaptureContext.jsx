'use client';

import { createContext, useContext, useState } from 'react';

const LeadCaptureContext = createContext({
  isOpen: false,
  selectedService: '',
  openLeadModal: (service = '') => {},
  closeLeadModal: () => {},
});

export function LeadCaptureProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const openLeadModal = (service = '') => {
    setSelectedService(service);
    setIsOpen(true);
  };

  const closeLeadModal = () => {
    setIsOpen(false);
  };

  return (
    <LeadCaptureContext.Provider
      value={{
        isOpen,
        selectedService,
        openLeadModal,
        closeLeadModal,
      }}
    >
      {children}
    </LeadCaptureContext.Provider>
  );
}

export function useLeadModal() {
  return useContext(LeadCaptureContext);
}
