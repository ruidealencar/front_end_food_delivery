import { Row, Col } from 'react-bootstrap'
import Restaurant from '../Restaurant'

export default function ListRestaurants() {
  const restaurants = [
    {
      'id': 1,
      'name': 'example 1',
      'description': 'Teste teste teste teste teste teste e teste',
      'delivery_tax': '5',
      'image_url': '/restaurant.jpeg',
      'category_title': 'Cozinha Prática'
    },
    {
      'id': 2,
      'name': 'example 2',
      'description': 'Teste 2 teste teste teste teste teste e teste',
      'delivery_tax': '9',
      'image_url': '/restaurant.jpeg',
      'category_title': 'Cozinha Ligeira'
    },
    {
      'id': 3,
      'name': 'example 3',
      'description': 'Teste 3 teste teste teste teste teste e teste',
      'delivery_tax': '5',
      'image_url': '/restaurant.jpeg',
      'category_title': 'Cozinha Prática'
    },
    {
      'id': 4,
      'name': 'example 3',
      'description': 'Teste 4 teste teste teste teste teste e teste',
      'delivery_tax': '9',
      'image_url': '/restaurant.jpeg',
      'category_title': 'Cozinha Ligeira'
    }

  ]

  return(
    <div className="mt-5">
      <h3 className="fw-bold">Restaurantes</h3>
      <Row>
          {restaurants.map((restaurant, i) => <Restaurant {...restaurant} key={i}/>)}
      </Row>
    </div>
  )
}
