'use client';

import React from 'react';
import ScrollProgress from '@/components/ScrollProgress';
import CustomCursor from '@/components/CustomCursor';

const ClientShell = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      {children}
    </>
  );
};

export default ClientShell;
