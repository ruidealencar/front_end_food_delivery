import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slick_settings from "./slick_settings";
import { Card, Col, Alert, Spinner } from "react-bootstrap";
import Category from "./Category";
import getCategories from "../../services/getCategories";


export default function Categories() {
  const { categories, isLoading, isError } = getCategories();

  function renderContent() {
    if(isError){
      return <Col><Alert variant="custom-red">Erro ao carregar</Alert></Col>
    }else if(isLoading){
      return <Col><Spinner animation="grow" variant="custom-red" /></Col>
    }else if(categories.length == 0){
      return <Col>Nenhum categoria disponível ainda...</Col>
    }else{
      return <Card className="mt-2">
              <Slider {...slick_settings} className="px-4 pt-4 text-center">
                {categories.map((category, i) => <Category {...category} key={i}/>)}
              </Slider>
            </Card>
    }
  }

  return(
    <>
      <h3 className="fw-bold">Categorias</h3>
      {renderContent()}
    </>
  )
}