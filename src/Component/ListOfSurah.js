import React,{useContext,useEffect} from 'react'
import {Card} from 'react-bootstrap'
import {AppContext} from '../AppContext'
import {useHistory} from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'

const ListOfSurah = () => {

    const [surahList] = useContext(AppContext)

     const history = useHistory()

     useEffect(()=>{
       Aos.init({duration:1000})
     },[])


    return (
       
        <>

      {surahList.map(({name,numberOfVerses,number,revelation}) => {
          return (
             <Card  body data-aos="zoom-in-up" className="list-surah-container mx-auto my-3 send-upward" key={number} onClick={()=>{
               
               history.push(`/Furqon-webapp/Third-page/${number}/${name.transliteration.en}/${revelation.id}`)
             }}>
           <div className="content-list d-flex  justify-content-between">
               <p className=" surah-name my-auto mx-1">{number}. Surah  {name.transliteration.en}</p>
               <p className='surah-name-arabic my-auto py-1 mx-1'>{name.long}</p>
               <p className=" number-verse my-auto mx-1">{numberOfVerses} Verses</p>
               </div>
       </Card>
          )
      })}
    

      
    </>
    )
}

export default ListOfSurah
