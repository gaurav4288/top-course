import React from "react";
import {FcLike,FcLikePlaceholder} from "react-icons/fc";
import { toast } from "react-toastify";
const Card=(props)=>{
    let course=props.course;
    let likedcourses=props.likedcourses;
    let setlikecourses=props.setlikecourses;
    function clickhandler(){
        if(likedcourses.includes(course.id))
        {
            //pehle se liked
            setlikecourses((prev)=>prev.filter((cid)=>(cid!==course.id)));
            toast.warning("Like removed");
        }
        else{
            if(likedcourses.length===0)
            {
                setlikecourses([course.id]);
            }
            else{
                setlikecourses((prev)=>[...prev,course.id]);
            }
            toast.success("Liked Succesfully");
        }
    }
    return(
        <div className="w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden ">
            <div className="relative ">
                <img src={course.image.url} alt="  "></img>

                <div className="absolute w-[40px] h-[40px] rounded-full right-2 bottom-0.5 bg-white grid place-items-center">
                    <button onClick={clickhandler}>
                        {
                            !likedcourses.includes(course.id) ? 
                            (<FcLikePlaceholder fontSize="1.75rem"/>):
                            (<FcLike fontSize="1.75rem"/>)
                        }
                    </button>
                </div>
            </div>
            <div className="p-4">
                <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
                <p className="text-white mt-2">
                    {
                        course.description.lrngth>100 ?
                        (course.description.substr(0,100))+ "...":
                        (course.description) +"..."
                    }
                    </p>
            </div>

        </div>
    )
}

export default Card;