import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardLink,
  MDBListGroup,
  MDBListGroupItem
} from "mdb-react-ui-kit";
import { useDispatch } from "react-redux";
import { addCartFun } from "../../Features/CartSlice/CartSlice";

export default function Cards({ value }) {
  const { description, price, proImg, title } = value;
  const dispatch = useDispatch();

  function addCartFunSec() {
    dispatch(addCartFun(value));
  }

  return (
    <MDBCard>
      <MDBCardImage position="top" alt="..." src={`/uploads/${proImg}`} />
      <MDBCardBody>
        <MDBCardTitle>{title}</MDBCardTitle>
        <MDBCardText>{description}</MDBCardText>
      </MDBCardBody>
      <MDBListGroup flush>
        <MDBListGroupItem>Price: {price}</MDBListGroupItem>
        <MDBListGroupItem>Stock:</MDBListGroupItem>
      </MDBListGroup>
      <MDBCardBody>
        <MDBCardLink>
          <button>More</button>
        </MDBCardLink>
        <MDBCardLink onClick={addCartFunSec}>
          <button>Add Cart</button>
        </MDBCardLink>
      </MDBCardBody>
    </MDBCard>
  );
}
