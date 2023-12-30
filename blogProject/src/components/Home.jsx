import { useEffect, useState } from "react";
import Container from "./Container";
import PostCard from "./PostCard";
import { toast } from "react-toastify";
import service from "../appwrite/config";
import { useNavigate } from "react-router-dom";

function Home() {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        service.getPosts().then((data) => {
            if(data && data.total > 0){
                setPosts(data.documents);
            }else{
                navigate("/")
                toast.error(`error >> No posts found`);
            }
        })
    },[])

    useEffect(() => {
        console.log(posts);
    },[posts])

    return ( <>
    <Container>
        <div>
            <h2 className="text-lg">Recent Posts</h2>
            {
                posts.length > 0 ? 
                posts.map( post => <PostCard key={post.$id} {...post}/>)
                : (<div>No Post found</div>)
                
            }
        </div>
    </Container>
    </> );
}

export default Home;