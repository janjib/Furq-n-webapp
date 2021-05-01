import React from 'react'
import {Container} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import Typewriter from 'typewriter-effect'

const Homepage = () => {

    const history = useHistory()

    //الفرقان

    return (
        <div>
            <Container>
                <div className="main-div my-5">
                    <h1 className='hero-title'><Typewriter onInit={typewriter => {
                        typewriter.typeString('الفرقان')
                        .pauseFor(2500)
    .deleteAll()
    .typeString('Furqön')
    .pauseFor(2500)
    .deleteAll()
    .typeString('الفرقان')
    .pauseFor(2500)
    .start();
                    }}/></h1>
                
                <div className="div-title mt-5 mb-3">
                    <h1 className="main-title text-center"> Read Al-Quran anytime,anywhere</h1>
                </div>
                <button className="mx-auto -d-block main-button" onClick={()=> history.push('/Furqon-webapp/Second-page')}>Lets Go <i className="fas fa-arrow-right m-1"></i></button>
                </div>
            </Container>
        </div>
    )
}

export default Homepage
