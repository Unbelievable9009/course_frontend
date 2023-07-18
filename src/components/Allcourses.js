import React, { useState,useEffect } from "react";
import Course from "./Course";
import { Button } from "reactstrap";
import base_url from "./../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";


const Allcourses= ()=>{

    useEffect(()=>{
        document.title="All Courses";
        getAllCoursesFromServer().then(
            (response)=>{
                //success call
                console.log(response);
                toast.success("courses has been loaded",{
                    position:"bottom-center"
                });
                setCourses(response.data);
            },
            (error)=>{
                // error
                toast.error("something went wrong",{
                    position:"bottom-center"
                });
            }
        );
    },[])


    // function to call server

    const getAllCoursesFromServer= () =>{
        return axios.get(`${base_url}/courses`);
    };


    //calling  loading course function

    const [courses,setCourses]= useState([]);

    const updateCourses=(id)=>{
        setCourses(courses.filter((c)=> c.id!=id));
    }

    return (
        <div>
            <h1>
                List of all Courses
            </h1>
            <p>List of courses are as follows</p>

            {
                courses.length > 0 ? courses.map((item)=>(
                    <Course key={item.id} course= {item} update={updateCourses}/>
                )) : "No courses"
            }
        </div>
    )
}

export default Allcourses;