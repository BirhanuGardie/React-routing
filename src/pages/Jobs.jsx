import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const Jobs = () => {
    const jobsData= useLoaderData()
  return (
    <div className='jobs'>
      {jobsData.map((job)=>{
        return <Link to = {job.id.toString()} key={job.id}>
            <h4>{job.title}</h4>
            <p>{job.location}</p>
        </Link>
      })}
    </div>
  )
}

export default Jobs

  const jobsLoader = async () => {
    const res= await fetch('http://localhost:5000/jobs')
    if (!res.ok) {
        throw new Error("Could not fetch the jobs list");
    }
    return res.json();
 }
 export {jobsLoader}