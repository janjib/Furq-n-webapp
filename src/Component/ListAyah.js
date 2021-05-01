import React from 'react'
import {Card} from 'react-bootstrap'


const ListAyah = ({text,translation,ayahNo}) => {
    return (
        <div >
           <Card className="p-2" key={ayahNo}>
 
  <Card.Body>
      <div className="d-flex justify-content-between ">
          <Card.Title>{ayahNo}.</Card.Title>
          <Card.Title className='arabic-ayah m-2 text-center'>{text.arab}</Card.Title>
          </div>
    
    <Card.Text className="m-2 ayah-meaning">
      {translation.en}
    </Card.Text>
    
  </Card.Body>
  
</Card>
<hr />
        </div>
    )
}

export default ListAyah
