import React, { useState } from "react";
import Card from "./Card";

const Cards=(props)=> {
    
    let category=props.category;
    let courses=props.courses;
    const [likedcourses,setlikecourses]=useState([]);

    function getcourses(){
        if(category==="All"){
        let allcourses=[];
        Object.values(courses).forEach(array=>{
            array.forEach(courseData=>{
                allcourses.push(courseData);
            })
        })
        return allcourses;
        }
        else{
            //main sirf specific category ka array pass karunga
            return courses[category];
        }
    }


    return(
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
                getcourses().map( (course)=> (
                    <Card key={course.id} course={course} likedcourses={likedcourses} setlikecourses={setlikecourses}/>
                ))
            }
        </div>
    )
}

export default Cards;