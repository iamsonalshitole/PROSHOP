import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'

const Product = ({ products }) => {
  return (
    <div>
      <Card className='my-3 p-3 rounded'>
        <Link to={`./products/${products._id}`}>
          <Card.Img src={products.image} variant='top'></Card.Img>
        </Link>

        <Card.Body>
          <Link to={`./products/${products._id}`}>
            <Card.Title as='div'>
              <strong>{products.name}</strong>
            </Card.Title>
          </Link>

          <Card.Text as='div'>
            <div className='my-3'>
              <Rating
                value={products.rating}
                text={`${products.numReviews} reviews`}
              ></Rating>
            </div>
          </Card.Text>
          <Card.Text as='h3'>$ {products.price}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Product
