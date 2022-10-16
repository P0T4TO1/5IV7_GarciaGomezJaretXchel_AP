import React, {useEffect, useState} from "react";
import NavBar from "./NavBar";
import Container from "react-bootstrap/Container";
import "../assets/css/styles.css";
import "../assets/bootstrap/css/bootstrap.min.css";
import {Link} from "react-router-dom";

function Home () {
    const [data, setData] = useState([]);
    const recipeURL = "https://p0t4to1.github.io/5IV7_GarciaGomezJaretXchel_AP/recipe-json"
    useEffect(() => {
        getAllRecipesData()
        document.title = 'Recipes App';
    },[]);

    const getAllRecipesData = () => {
        fetch(`${recipeURL}/complexSearch.json`)
            .then((response)=> response.json())
            .then((json) => setData(json.results))
            .catch((error) => console.error(error))
    }

    return (
        <>
            <NavBar/>
            <section className="mt-5">
                <Container className="mt-md-5">
                    {data.map(({image, title, id}) => {
                        return(
                            <Link to={`/recipe/${id}`} style={{textDecoration: "none"}} key={id + 2}>
                                <div className="photo-card mb-5" key={id + 3}>
                                    <div className="photo-background"
                                         style={{backgroundImage: `url(${image})`}}></div>
                                    <div className="photo-details d-flex align-items-center justify-content-center">
                                        <h1 className="text-light">{title}</h1>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </Container>
            </section>
        </>
    )
}

export default Home;