import React, { ReactNode } from 'react';

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <h2>this is user layout</h2>
      {children}
    </div>
  );
}
