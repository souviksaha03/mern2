import React, { useState, useEffect } from 'react';
import Card from './Card'; 
import axios from 'axios'; 

const Coursecontent = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
    
        const response = await axios.get('http://localhost:4001/book');

        
        const courseData = Array.isArray(response.data) 
                            ? response.data 
                            : response.data.data;

        if (Array.isArray(courseData)) {
            setCourses(courseData);
        } else {
            console.error("API response data is not an array:", response.data);
            setError("Error: Invalid course data format received from server.");
        }
        
        setLoading(false);
      } catch (err) {
        
        console.error("Failed to fetch courses:", err.message);
        setError(`Failed to load courses. Is the backend running on port 4001? Error: ${err.message}`);
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  
  if (loading) {
    return <div className="text-center mt-10 text-xl font-semibold">Loading courses...</div>;
  }

  if (error) {
    return (
      <div className="text-center mt-10 p-5 bg-red-100 border border-red-400 text-red-700 rounded mx-auto max-w-lg">
        <h2 className="font-bold">Data Loading Error</h2>
        <p className="mt-2 text-sm">{error}</p>
        <p className="mt-3 text-xs">
          Please verify your backend server is running and accessible at `http://localhost:4001/courses`.
        </p>
      </div>
    );
  }

  
  
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.length > 0 ? (
        
        
        courses
          .filter(item => item) 
          .map((item) => (
            
            <Card key={item._id} item={item} />
          ))
      ) : (
        <div className="col-span-full text-center mt-10 text-gray-500">
          No courses found.
        </div>
      )}
    </div>
  );
};

export default Coursecontent;