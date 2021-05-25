import { useRouter } from "next/router";
import { Alert, Spinner } from "react-bootstrap";
import getRestaurant from "../../services/getRestaurant";
import CategoryProducts from "./CategoryProducts";
import Details from "./Details";

export default function DetailsRestaurant(){
  const router = useRouter();
  const { id } = router.query;

  const { restaurant, isLoading, isError } = getRestaurant(id);

  if(isError){
    return <Alert variant="custom-red">Erro ao carregar</Alert>
  }else if(isLoading){
    return <Spinner animation="grow" variant="custom-red" />
  }

  return(
    <>
      <Details {...restaurant}/>
      {restaurant.product_categories.map((product_category, i) =>
        <CategoryProducts restataurant={restaurant} {...product_category} key={i} />
      )}
    </>
  )
}