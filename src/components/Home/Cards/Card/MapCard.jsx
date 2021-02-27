import React from "react";
import img from "../../../../img/bg-vendors.jpg";
import {
  Card,
  Button,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { Link } from "react-router-dom";
export default function MapCard(props) {
  return (
    <Card>
      <div class="bg-col">
        <div className="">
          <div className="prod-info-main prod-wrap clearfix">
            <div className="row">
              <div className="col-md-5 col-sm-12 col-xs-12">
                <div className="product-image">
                  <img src={props.imageUrl} className="img-responsive" />
                  {/* <span className="tag2 hot">HOT</span> */}
                </div>
              </div>
              <div className="col-md-7 col-sm-12 col-xs-12">
                <div className="product-deatil">
                  <h5 className="name">
                    <a href="#">{props.name}</a>
                  </h5>

                  <p className="price-container">
                    <span>{props.city}</span>
                  </p>
                  <span className="tag1"></span>
                </div>
                <div className="description">
                  <p>{props.date}</p>
                </div>
                <div className="product-info smart-form">
                  <div className="row">
                    <div className="col-md-12">
                      <Link
                        to={{
                          pathname: `/allvendors/${props.id}`,
                          state: {
                            vendorId: props.id,
                          },
                        }}
                      >
                        <Button size="small" color="primary">
                          Check Out
                        </Button>
                      </Link>
                    </div>
                    <div className="col-md-12">
                      <div className="rating">
                        Rating:
                        <label for="stars-rating-5">
                          <i className="fa fa-star text-danger"></i>
                        </label>
                        <label for="stars-rating-4">
                          <i className="fa fa-star text-danger"></i>
                        </label>
                        <label for="stars-rating-3">
                          <i className="fa fa-star text-danger"></i>
                        </label>
                        <label for="stars-rating-2">
                          <i className="fa fa-star text-warning"></i>
                        </label>
                        <label for="stars-rating-1">
                          <i className="fa fa-star text-warning"></i>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
    // <Container>
    //   <Row>
    //     <Card style={{ width: "100%" }}>
    //       <Card.Img variant="top" src={props.imageUrl} />
    //       <Card.Body>
    //         <Card.Title>Card Title</Card.Title>
    //         <Card.Text>
    //           Some quick example text to build on the card title and make up the
    //           bulk of the card's content.
    //         </Card.Text>
    //       </Card.Body>
    //       <ListGroup className="list-group-flush">
    //         <ListGroupItem>Cras justo odio</ListGroupItem>
    //         <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    //         <ListGroupItem>Vestibulum at eros</ListGroupItem>
    //       </ListGroup>
    //       <Card.Body>
    //         <Card.Link href="#">Card Link</Card.Link>
    //         <Card.Link href="#">Another Link</Card.Link>
    //       </Card.Body>
    //     </Card>
    //   </Row>
    // </Container>
  );
}
