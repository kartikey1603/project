import React, { useEffect, useState } from 'react';

const Workshops = () => {
  const [workshops, setWorkshops] = useState([]);

  useEffect(() => {
    const fetchWorkshops = async () => {
      const response = await fetch('/api/workshops');
      const data = await response.json();
      setWorkshops(data);
    };
    fetchWorkshops();
  }, []);

  return (
    <div>
      <h2>Upcoming Workshops</h2>
      {workshops.map((workshop, index) => (
        <div key={index}>{workshop.workshopTitle} - {workshop.city}</div>
      ))}
    </div>
  );
};

export default Workshops;
