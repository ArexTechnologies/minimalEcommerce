import { useContext, useState } from "react";
import { Store } from "../Store";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate, Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Cart() {
  
  const navigate = useNavigate(Store);
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems }, userInfo
  } = state;
  

  const updateCartHandler = async (item, quantity) => {
    
    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...item, quantity },
    });
  };

  const removeItemHandler = (item) => {
    ctxDispatch({ type: "CART_REMOVE_ITEM", payload: item });
  };

  const checkoutHandler = () => {
    if(userInfo){ navigate("/shipping")} else{navigate("/signin")}
   
  };
  return (
    <>
    

      <Row>
        <Col md={8}>
          {cartItems.length === 0 ? (
            <h1>
              Cart is empty. <Link to="/">Go Shopping</Link>{" "}
            </h1>
          ) : (
            <ListGroup>
              {cartItems.map((item) => (
                <ListGroup.Item key={item.id}>
                  <Row className="align-items-center">
                    <Col md={4}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="img-fluid rounded img-thumbnail"
                      ></img>{" "}
                      <Link to={`/product/${item.slug}`}>{item.title}</Link>
                    </Col>
                    <Col md={3}>
                      <Button
                        onClick={() =>
                          updateCartHandler(item, item.quantity - 1)
                        }
                        variant="light"
                        disabled={item.quantity === 1}
                      >
                        <i className="fas fa-minus-circle"></i>
                      </Button>{" "}
                      <span>{item.quantity}</span>{" "}
                      <Button
                        variant="light"
                        onClick={() =>
                          updateCartHandler(item, item.quantity + 1)
                        }
                        disabled={item.quantity === item.countInStock}
                      >
                        <i className="fas fa-plus-circle"></i>
                      </Button>
                    </Col>
                    <Col md={3}>${item.price}</Col>
                    <Col md={2}>
                      <Button
                        onClick={() => removeItemHandler(item)}
                        variant="light"
                      >
                        <i className="fas fa-trash"></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>
                    Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}
                    items) : $ 
                    {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)} 
                  </h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="d-grid">
                    <Button
                      type="button"
                      variant="primary"
                      onClick={checkoutHandler}
                      disabled={cartItems.length === 0}
                    >
                      Proceed to Checkout
                    </Button>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* <div className="mx-6 my-4 text-center ">
          <div
            style={{
              border: "1px solid",
              borderRadius: "25px",
              display: "inline-block",
            }}
            className="px-2 py-2"
          >
            <h1>Items in cart: {cartItems.length}</h1>
            <button  className="btn btn-primary my-2"> Checkout</button>
          </div>
        </div> */}
    </>
  );
}
