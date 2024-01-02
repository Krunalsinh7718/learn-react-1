import { useNavigate } from "react-router-dom";
import { Container } from "../components";

function Home() {
    const navigate = useNavigate();
    return ( <>
        <Container>
            Home  <button onClick={() => navigate("/signin")}>test login </button>
        </Container>
    </> );
}

export default Home;