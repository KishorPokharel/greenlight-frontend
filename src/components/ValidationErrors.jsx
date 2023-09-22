import React from 'react';

const ValidationErrors = ({ errors }) => {
  return (
    <>
      {errors &&
        (typeof errors === 'string' ? (
          <p className="validation-error">{errors}</p>
        ) : (
          Object.keys(errors).map((key) => (
            <p key={key} className="validation-error">
              {errors[key]}
            </p>
          ))
        ))}
    </>
  );
};

export default ValidationErrors;
