import React from 'react'
import ListOfSurah from './ListOfSurah'
import {Container} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'


const SecondPage = () => {

    const history = useHistory()

    
    
    return (
        <Container>
        <div className='margin-mega'>
            <button className="mx-auto d-block main-button mt-5 send-upward" onClick={()=> history.push('/Furqon-webapp')}><i className="fas fa-arrow-left m-1"></i>Go back</button>
            <h1 className="text-center second-page-title my-5">Pick A Surah</h1>
             <ListOfSurah />
        </div>
        </Container>
    )
}

export default SecondPage
