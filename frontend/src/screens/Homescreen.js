import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'

const Homescreen = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get('/api/products')

      setProducts(data)
    }

    fetchProduct()
  }, [])
  return (
    <div>
      <h1>Latest products</h1>
      <Row>
        {products.map((products) => (
          <Col sm={12} md={6} lg={4} xl={2}>
            <Product products={products}></Product>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Homescreen
