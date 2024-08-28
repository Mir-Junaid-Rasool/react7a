import React from 'react';

export const Greet = ({ studentData }) => (
  <div>
    <ul>
      {studentData.map(({ id, name, grade }) => (
        <li key={id}>
          {name} - Grade: {grade}
        </li>
      ))}
    </ul>
  </div>
);

