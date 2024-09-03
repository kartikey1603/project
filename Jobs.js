import React, { useEffect, useState } from 'react';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await fetch('/api/jobs');
      const data = await response.json();
      setJobs(data);
    };
    fetchJobs();
  }, []);

  return (
    <div>
      <h2>Available Jobs</h2>
      {jobs.map((job, index) => (
        <div key={index}>{job.jobTitle} - {job.location}</div>
      ))}
    </div>
  );
};

export default Jobs;
