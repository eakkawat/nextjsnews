import React from 'react';

function DetailLayout({
  modal,
  children,
}: {
  modal: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <>
      <div>{modal}</div>
      <div>{children}</div>
    </>
  );
}
export default DetailLayout;
