import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
  const jobDetail = useLoaderData();
  return (
    <div className='job-details'>
      <p><b>Job Title:</b> {jobDetail.title}</p>
      <p><b>Salary:</b> {jobDetail.salary}</p>
      <p><b>Location:</b> {jobDetail.location}</p>
      <p><b>Description:</b> Integrate data from various back-end web services and databases.
       Work with stakeholders to gather and refine specifications and requirements based on technical needs.
        Create and maintain software documentation. </p>
      <button>Apply Now</button>
    </div>
  );
};


export default JobDetails;

export const jobDetailsLoader = async ({ params }) => {
    const {id} = params;
    const res  = await fetch("http://localhost:5000/jobs/" + id);
    if (!res.ok) {
      throw new Error("Could not found the job details");
    }
    return res.json();
}