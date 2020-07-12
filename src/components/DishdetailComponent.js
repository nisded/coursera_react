import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

class DishDetail extends Component {
    renderDish(dish) {
        if (dish != null) 
            return (
                <Card>
                    <CardImg src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else 
            return (<div></div>);
    }
    
    renderComments(comments) {
        if (comments != null) {
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
        else 
            return (<div></div>);
    }

    render() {
        const dish = this.props.dish;
        let dishComments = null;
        if (dish != null) 
            dishComments = dish.comments;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(dishComments)}
                    </div>
                </div>
            </div>
        );        
    }
}

export default DishDetail;