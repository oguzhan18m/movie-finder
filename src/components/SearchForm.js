import React from "react";
import { Form, Col } from "react-bootstrap";

function SearchForm({ searchHandler }) {
   return (
      <Form className="mb-4">
         <Form.Row className="align-items-end">
            <Form.Group as={Col}>
               <Form.Label>Search</Form.Label>
               <Form.Control
                  onChange={searchHandler}
                  type="text"
                  placeholder="Enter a movie"
               />
            </Form.Group>
         </Form.Row>
      </Form>
   );
}

export default SearchForm;
