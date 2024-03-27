import React from 'react';

const RegistrationSuccess = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          Registration Successful!
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <p className="text-center text-sm leading-5 text-gray-900">
            Your account has been successfully registered.
          </p>
          <p className="mt-2 text-center text-sm leading-5 text-gray-900">
            You can now log in using your credentials.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationSuccess;
