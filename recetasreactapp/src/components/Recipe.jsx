import {Link, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import NavBar from "./NavBar";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import "../assets/css/styles.css";
import "../assets/bootstrap/css/bootstrap.min.css";

const Recipe = () => {
    const route = useParams();
    const idRecipe = route.id;
    const recipeURL = "https://p0t4to1.github.io/5IV7_GarciaGomezJaretXchel_AP/recipe-json"
    const [ingredients, setIngredients] = useState([]);
    const [data, setData] = useState([]);
    useEffect(() => {
        getSelectedRecipe();
        document.title = 'Recipes App';
    });

    const getSelectedRecipe = () => {
        fetch(`${recipeURL}/${idRecipe}.json`)
            .then((response)=> response.json())
            .then((json) => {
                setIngredients(json.extendedIngredients);
                setData(json);
            })
            .catch((error) => console.error(error))
    }

    return(
        <>
            <NavBar/>
            <Container>
                <section className="mx-auto my-5" style={{maxWidth: "50rem"}}>
                    <Card>
                        <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                            <img className="img-fluid" alt="recipeImg"
                                 src={data.image} style={{width: "100%"}}/>
                                <a href="#">
                                    <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}>
                                    </div>
                                </a>
                        </div>
                        <Card.Body>
                            <h4 className="text-center card-title font-weight-bold mb-5">{data.title}</h4>
                            <h5 className="text-center card-title font-weight-bold">Summary:</h5>
                            <div dangerouslySetInnerHTML={ {__html: data.summary} }></div>
                            <h5 className="text-center card-title font-weight-bold">Ingredients:</h5>
                            <ul>
                            {ingredients.map(({original}) => {
                                return(
                                    <li className="card-text">
                                        {original}
                                    </li>
                                )

                            })}
                            </ul>
                            {data.instructions &&
                                <div>
                                    <h5 className="text-center card-title font-weight-bold">Instructions:</h5>
                                     <div dangerouslySetInnerHTML={ {__html: data.instructions} }></div>
                                </div>
                            }
                        </Card.Body>
                    </Card>
                    <div style={{marginTop: "4rem"}} className="d-flex justify-content-center">
                        <Link to="/">
                            <button className="btn btn-primary" type="button">
                                Regresar al página principal
                            </button>
                        </Link>
                    </div>
                </section>
            </Container>
        </>
    )
}

export default Recipe;