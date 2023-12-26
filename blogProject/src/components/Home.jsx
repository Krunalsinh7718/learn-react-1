import Post from "./Post";
import PostCard from "./PostCard";

function Home() {
    return ( <>
        <div>
            <h2 className="text-lg">Recent Posts</h2>
            <PostCard PostTitle="Post 1" />
        </div>
    </> );
}

export default Home;