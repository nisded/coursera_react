import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

// render card with info about dish
function RenderDish({dish}) {
    return (
        <Card>
            <CardImg src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    );
}

// render list items with comments for dish
function RenderComments({comments}) {
    if (comments == null)
        return (<div></div>);

    const renderedComments = comments.map((fullcomment) => {
        return ( 
            <li key={fullcomment.id}>
                <p>{fullcomment.comment}</p>
                <p>--{fullcomment.author}, {new Intl.DateTimeFormat('en-US', 
                                                {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(fullcomment.date)))}
                </p>
            </li>
        );
    });

    return (
        <div>
            <h4>Comments</h4>
            <ul className="list-unstyled">
                {renderedComments}
            </ul>
        </div>
    );
}

// render dish details with comments of clients
const DishDetail = (props) => {
    const dish = props.dish;
    if (dish == null) 
        return (<div></div>);

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={dish.comments} />
                </div>
            </div>
        </div>
    );        
}

export default DishDetail;