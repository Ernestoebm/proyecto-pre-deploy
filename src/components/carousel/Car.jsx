import React from 'react';

const TwoPicturesWithTextInside = () => {
  return (
    <div className="md:flex-row md:space-x-8 pt-16 flex flex-col items-center justify-center h-screen">
      {/* Picture 1 */}
      <div className="relative mx-4 mb-8 md:mb-0">
        <img
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-calendar-apps-lead-1617397500.jpg"
          alt="First Picture"
          className="max-w-full h-auto rounded-lg"
        />
        <p className="absolute inset-0 flex items-center justify-center text-black text-center md:text-left">
          Utiliza el calendario para llevar un control de tus próximos eventos
        </p>
      </div>

      {/* Picture 2 */}
      <div className="relative mx-4">
        <img
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-calendar-apps-lead-1617397500.jpg"
          alt="Second Picture"
          className="max-w-full h-auto rounded-lg"
        />
        <p className="absolute inset-0 flex items-center justify-center text-black text-center md:text-left">
          Utiliza el calendario para llevar un control de tus próximos eventos
        </p>
      </div>
    </div>
  );
};

export default TwoPicturesWithTextInside;
