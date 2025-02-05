import { useEffect,useState } from "react";



function useCurrencyInfo(currency){
    
    //as component gets mounted it executess 
const[data,setData]=useState({});
    useEffect(()=>{
        let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`

       fetch(url)
       .then((res)=> res.json())
       .then((res)=> setData(res[currency]))
       // ^ to dynamically get the api
    },[currency])

console.log(data);

    return  data

}

export default useCurrencyInfo;