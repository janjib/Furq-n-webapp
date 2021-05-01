import React,{useState,createContext,useEffect} from 'react' 
import axios from 'axios'

export const AppContext = createContext()

export const SurahListProvider = props => {

    const [surahList,setSurahList] = useState([])

    
    
    

  const fetchSurahList = async () => {
    try {
        const resp = await axios.get('https://api.quran.sutanlab.id/surah');
        setSurahList(resp.data.data);
        console.log(resp.data.data)
      
        
    } catch (err) {
        // Handle Error Here
        console.error(err,'There is an error !');
    }
}
  
useEffect(()=>{
   fetchSurahList()
   
},[])

    return (
        <AppContext.Provider value={[surahList,setSurahList]}>
            {props.children}
        </AppContext.Provider>
    )
}


