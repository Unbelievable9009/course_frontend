import React, { useEffect } from "react";
import {Container,Button} from "reactstrap";

const Home= ()=>{
    useEffect(()=>{
        document.title="Home";
    },[])
    return(
        <div class = "Jumbotron" className="text-center">
                <h1>
                    Learn Code with Durgesh
                </h1>
                <p>
                    This is developed by LearnCodewith Durgesj for learning purpose backend is on
                    Spring boot and frontend on reactjs
                </p>
                <Container>
                    <Button color="primary" outline>
                        Start Using 
                    </Button>
                </Container>
        </div>
    )
}

export default Home;