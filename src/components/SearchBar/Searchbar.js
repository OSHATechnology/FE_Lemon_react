import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Searchbar.css'


const Searchbar = () => {
  return (
    <div>
       <Form className="d-flex bb">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-8"
              aria-label="Search"
            />
            <Button variant="outline-warning">Search</Button>
          </Form>
    </div>
  )
}

export default Searchbar



