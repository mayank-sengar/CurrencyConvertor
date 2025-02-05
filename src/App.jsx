
import React,{useState} from 'react';
import './App.css'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount,setAmount] = useState(0);

  const [from,setFrom]=useState("usd");
  const [to,setTo]=useState("inr");
  const[convertedAmount,setConvertedAmount]=useState(0);
  
  const currencyInfo=useCurrencyInfo(from);


 const options= Object.keys(currencyInfo);

 const swap= ()=>{
  setFrom(to)
  setTo(from)

  setConvertedAmount(amount);
  setAmount(convertedAmount)
 }


 const convert =()=> {
  setConvertedAmount(amount* currencyInfo[to])
 }



    

  return (
      <div
          className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
          // style={{
          //     backgroundImage: `url('${BackgroundImage}')`,
          // }}
      >
          <div className="w-full">
              <div className="w-170 max-w mx-auto border border-gray-60 rounded-lg  backdrop-blur-sm bg-white/30 p-10 ">
                  <form
                      onSubmit={(e) => {
                          e.preventDefault();
                         convert()
                      }}
                  >
                      <div className="w-full mb-1">
                          <InputBox
                              label="From"
                              amount={amount}
                              currencyOptions={options}
                              onCurrencyChange={(currency)=> setCurrency(amount)}
                              selectCurrency={from}
                              onAmountChange={(amount)=>setAmount(amount)}
                              
                          />
                      </div>
                      <div className="relative w-full h-2 pt-1 ">
                          <button
                              type="button"
                              className="absolute left-1/2 -translate-x-1/2 
                              -translate-y-1/2 border-2 border-white rounded-md bg-blue-600
                               text-white px-2 py-0.5 hover:bg-blue-500 hover:cursor-pointer"
                              onClick={swap}
                              
                          >
                              SWAP 

                             
                          </button>
                      </div>
                      <div className="w-full mt-1 mb-4">
                          <InputBox
                              label="To"
                              amount={convertedAmount}
                              currencyOptions={options}
                              onCurrencyChange={(currency)=> setTo(currency)}
                              selectCurrency={to}
                              amountDisable
                              
                          />
                      </div>
                      <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg  hover:bg-blue-500 hover:cursor-pointer">
                          Convert {from.toUpperCase()} to {to.toUpperCase()}
                      </button>
                  </form>
              </div>
          </div>
      </div>
  );

}





export default App
