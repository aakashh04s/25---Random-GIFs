import React from 'react'

const Spinner = () => {
  return (
    <div className="flex items-center justify-center h-32">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-accent border-opacity-80 border-b-secondary"></div>
    </div>
  );
}

export default Spinner