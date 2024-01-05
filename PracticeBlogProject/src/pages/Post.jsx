import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import service from "../appwrite/OtherService";
import {Container} from "../components"
function Post() {
    const param = useParams();
    
    const [post, setPost] = useState();

    useEffect(() => {
    //    console.log(param);
        service.getPost(param.slug)
        .then(data => {
            if(data){
                
                setPost(data)
            }
        })
        .catch(error => console.log(`get post :: post ${param.slug}:: error`, error))
    },[])
    
    return (<>
        <Container>
            Post
            {
                JSON.stringify(post)
            }
        </Container>
    </>);
}

export default Post;