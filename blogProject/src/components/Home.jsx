import Container from "./Container";
import Post from "./Post";
import PostCard from "./PostCard";

function Home() {
    return ( <>
    <Container>
        <div>
            <h2 className="text-lg">Recent Posts</h2>
            <PostCard PostTitle="Post 1" />
        </div>
    </Container>
    </> );
}

export default Home;