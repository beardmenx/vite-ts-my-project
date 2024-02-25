import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { EnglishCardInterface } from '../models/EnglishCars'



const EnglishCardItemPage = () => {

   const {title} = useParams()
   const navigate = useNavigate()
   const goBack =() => navigate(-1)

   const [englishCard, setEnglishCard] = useState<EnglishCardInterface[]>()

   useEffect(()=>{
      const fetchPizzas = async () =>{
         try{
             const {data} = await ( axios.get(`https://65d63771f6967ba8e3bdba15.mockapi.io/englishCard?title=${title}`)) 
             setEnglishCard(data)
     console.log(`https://65d63771f6967ba8e3bdba15.mockapi.io/englishCard?title=${title}`)
     
         }
         catch(err){
            alert(`ошибка при получение пиицы. Такой пицц нет(. Мы вернем вас на главную.`)
            
         }
         }
         fetchPizzas()
    
   }, [])


   console.log(englishCard)
 



  if(!englishCard) return <h2>Loading...</h2>
   
   

  return (
    <div>
      {englishCard.map(card => <h2>{card.title}
      

         {card.cards.map(item => (
                  <div key={item.id}>
                     <img src={item.img} alt={item.answer} />
                     <p>{item.answer}</p>
                  </div>
               ))}

      </h2>)}
     
    </div> 
  )
}

export default EnglishCardItemPage