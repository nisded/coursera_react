import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

// render card with info about dish
function RenderDish({dish}) {
    if (dish == null) 
        return (<div></div>);

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
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div> 
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        </div>
    );        
}

export default DishDetail;