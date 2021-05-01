import React, { useState, useEffect } from 'react'
import { Container, Tabs, Tab } from 'react-bootstrap'
import { useHistory, useParams } from 'react-router-dom'

import ListAyah from './ListAyah'
import axios from 'axios'
import LoadingPage from './LoadingPage'

const ThirdPage = () => {



  const { number,surahName,revelation } = useParams()

  const history = useHistory()

  const [ayahList, setAyahList] = useState([])
  const [ayahOfSurah,setAyahOfSurah] = useState([])
  const [tafsir,setTafsir] = useState([])
  const [loading,setLoading] = useState(true)

  const fetchAyah = async () => {

    const resp = await axios
      .get(`https://api.quran.sutanlab.id/surah/${number}`)
      .catch(err => console.log(err))

    console.log('ayahList', resp.data.data)

    await setAyahList(resp.data.data)
    setAyahOfSurah(resp.data.data.verses)
    setTafsir(resp.data.data.tafsir.id)
    console.log(resp.data.data.verses)
    setLoading(false)
  }




  useEffect(() => {
    fetchAyah()
  }, [])





  return (
    <Container>
      
      <div className='margin-mega'>
        <button className="mx-auto d-block third-main-button mt-5 send-upward" onClick={() => history.push('/Furqon-webapp/Second-page')}><i className="fas fa-arrow-left m-1"></i>Go back</button>
        <h1 className="text-center third-page-title mb-2 mt-4">Surah {surahName}</h1>
        <p className='mt-3 mb-5 text-center surah-desc'>{ayahList.numberOfVerses} Ayah | {revelation} </p>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
          <Tab eventKey="home" title="Tafsir">
            <h3 className='my-5 tafsir-surah mx-1'>{tafsir}</h3>
          </Tab>
          <Tab eventKey="profile" title="Ayath" className="mt-3 mb-5">
            <h1 className='basmalah text-center my-5'>بسم الله الرحمن الرحيم</h1>
            <h1 className='basmalah-meaning text-center mb-5'>In the name of God, most Gracious, most Compassionate</h1>
            <hr />
            {loading ? <LoadingPage/> : ayahOfSurah.map(({text,translation,number}) => {

              return  (
                <>
                
                <ListAyah text={text} translation={translation} key={number.inSurah} ayahNo={number.inSurah}/>
                </>
              )
              
            })}
            <h1 className='basmalah text-center my-5'>صدق الله العظيم</h1>
            <h1 className='basmalah-meaning text-center mb-5'>Allah Almighty speaks the truth</h1>

           

          </Tab>

        </Tabs>
      </div>
    </Container>
  )
}

export default ThirdPage
