import React, { useEffect, useState } from 'react'

export const useCurrency = (currency) => {
  const [data,setData] = useState({})
    useEffect( () => {
        let fetchCurrency = async () => {
            try{
                let res = await fetch(`https://open.er-api.com/v6/latest/${currency}`)
                let result = await res.json()
                setData(result.rates)
            }catch(err){
                console.log("API not called",err)
            }
        }
        fetchCurrency()
    } ,[currency])
    
    return data

}
