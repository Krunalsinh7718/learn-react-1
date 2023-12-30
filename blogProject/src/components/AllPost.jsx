import { useEffect, useState } from "react";
import service from "../appwrite/config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import PostCard from "./PostCard";
import Container from "./Container";

function AllPost() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        service.getPosts([Query.orderAsc("slug").equal("status", "active")]).then((data) => {
            if(data && data.total > 0){
                setPosts(data.documents);
            }else{
                toast.error(`error >> No posts found`);
            }
        })
    },[])

    useEffect(() => {
        console.log(posts);
    },[posts])

    return (<>
    <Container>
        <div>
            {
                posts.length > 0 ? 
                posts.map( post => <PostCard key={post.$id} {...post}/>)
                : (<div>No Post found</div>)
                
            }
        </div>
    </Container>
    </>);
}

export default AllPost;