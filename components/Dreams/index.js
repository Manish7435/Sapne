import Container from "../Container"
import SingleDream from "./SingleDream"

const Dreams = ()=>{
  return(
    <div className=" py-20">
    <Container >
      <SingleDream endPoint={'/api/dream/get'}/>
    </Container>
    </div>
  )
}
export default Dreams