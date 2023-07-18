import React, { Fragment, useEffect, useState } from "react";
import {Button, Container, Form,FormGroup, Input, Label} from "reactstrap"
import axios from "axios";
import base_url from './../api/bootapi';
import { toast } from "react-toastify";


const AddCourse = ()=>{
    useEffect(()=>{
        document.title="Add Course";
    })



    const [course,setCourse]=useState({});

    // form handler function

    const handleForm= (e)=>{
        console.log(course);
        postDatatoServer(course);
        e.preventDefault();
    }

    //creating function to post data on server
    const postDatatoServer=(data)=>{
        axios.post(`${base_url}/courses`,data).then(
            (response)=>{
                console.log(response);
                console.log("sucess");
                toast.success("course added successfully");
                setCourse({id:"",title:"",description:""});
            },(error)=>{
                console.log(error);
                console.log("error");
                toast.error("Error ! Something went wrong");
            }
        )
    }

    return (
        <Fragment>
            <h1 className="text-center my-3">
                Fill Course Details
            </h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <Label for="userId">
                        Course Id
                    </Label>
                    <Input type="text" placeholder="Enter here" name= "userId" id ="userId"
                    onChange={(e)=>{
                        setCourse({...course,id:e.target.value});
                    }}/>
                </FormGroup>
                <FormGroup>
                    <Label for="title">
                        Course Title
                    </Label>
                    <Input type="text" placeholder="Enter title here" name= "title" id =""
                    onChange={(e)=>{
                        setCourse({...course,title:e.target.value});
                    }}/>
                </FormGroup>
                <FormGroup>
                    <Label for="description">
                        Course Description
                    </Label>
                    <Input type="textarea" placeholder="Enter Description here" name= "description" id =""
                    style={{height:200}} 
                    onChange={(e)=>{
                        setCourse({...course,description:e.target.value});
                    }}/>
                </FormGroup>
                <Container className="text-center">
                    <Button type ="submit" color="success">
                        Add Course
                    </Button>
                    <Button  type="reset" color="warning ml-2" onClick={()=>{
                        setCourse({});
                    }}>
                        Clear
                    </Button>
                </Container>
            </Form>
        </Fragment>
    )
}
export default AddCourse;