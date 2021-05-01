import React from 'react'
import {useHistory} from 'react-router-dom'
import {Container} from 'react-bootstrap'

const AboutPage = () => {

    const history = useHistory()
    return (
        <Container>
        <div className='margin-mega '>
            <button className="mx-auto d-block about-main-button mt-5 send-upward text-center" onClick={() => history.push('/Furqon-webapp')}><i className="fas fa-arrow-left m-3"></i>Go back</button>
            <h1 className='about-title my-5 text-center'>About</h1>
            <img className="img-fluid img-about d-block mx-auto" src="https://i.pinimg.com/564x/d7/53/e0/d753e048e12bbf946d1501e4b7c011ae.jpg" alt='me doing archery'/>
            <p className='about-detail my-5 text-center'>My name is Rujhan and I am from Malaysia.Still studying.Nice to meet you and thanks for using <span className='furqan-about'>Furqön</span>
</p>
<p className='about-detail my-3 text-center'>Follow me :</p>
           
           <div className=" d-flex justify-content-center">
           <ul className=" d-flex justify-content-center list-unstyled">
               <a href="https://www.instagram.com/harjan_04/" rel="noreferrer" target="_blank"><li  className='m-2 socmed-icon '><i className="fab fa-instagram"></i></li></a>
               <a href="https://t.me/RujhanNajib" rel="noreferrer" target="_blank"><li className='m-2 socmed-icon'><i className="fab fa-telegram-plane"></i></li></a>
               <a href="https://github.com/janjib" rel="noreferrer" target="_blank"><li className='m-2 socmed-icon'><i className="fab fa-github"></i></li></a>
               
           </ul>
           </div>
            
        </div>
        </Container>
    )
}

export default AboutPage
