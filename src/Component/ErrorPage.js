import React from 'react'
import {Container} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'

const ErrorPage = () => {

    let history = useHistory()

    return (
         <Container>    
        <div className='error-page d-flex justify-content-center flex-column align-items-center margin-mega'>
           <h1 className='error-title'>4<i className="fas fa-angry emoji-bg"></i>4</h1>
           <p className='error-text'>Wrong page,sorry </p>
                   <button className="mx-auto d-block third-main-button mt-5 " onClick={() => history.push('/Furqon-webapp')}><i className="fas fa-arrow-left m-1"></i>Go back</button>
                   

        </div>
        </Container>
    )
}

export default ErrorPage
