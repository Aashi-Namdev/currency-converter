import { useState } from 'react'

import InputBox from './Components/Index'
import { useCurrency } from './hooks/useCurrency'

function App() {
  const [amount,setAmount] = useState(0);
  const [from,setFrom] = useState('USD');
  const [to,setTo] = useState('INR');
  const [convertedAmount,setConvertedAmount] = useState(0)


  //  let data = useCurrency("USD")
  // console.log(data)

  const currencyInfo = useCurrency(from)
  const options = Object.keys(currencyInfo)//array
 
 const convert = () => {
  setConvertedAmount((Number(amount)*currencyInfo[to]).toFixed(2) )
 }

 const swap = () => {
  setFrom(to)
  setTo(from)
  setAmount(convertedAmount)
  setConvertedAmount(amount)
 }

  return (
    <>
      <div
      className='min-w-full min-h-screen flex items-center justify-center '
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGN1cnJlbmN5fGVufDB8fDB8fHww")`,
        backgroundSize: "cover"
      }}>
        <form onSubmit={ (e) => {
          e.preventDefault()
          convert()
         } }
        className='relative p-8 min-w-lg h-100 rounded-lg border border-yellow-400/20 bg-black/50 shodow shadow-lg'>
          
          <InputBox
          className='text-white'
          label="From"
          amount ={amount} 
          currencyOptions={options}
          selectedCurrency={from}
          onAmountChange={(amount) => setAmount(amount)}
          onCurrencyChange={(currency) => setFrom(currency)}
          
          />

          <button type="button"
          onClick={()=>{
            swap()
          }}
          className='absolute left-1/2 bottom-55 transform z-10  -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg border border-yellow-200/70 text-white px-4 font-semibold py-1 hover:opacity-80'>
            swap
          </button>
          
          <InputBox 
          className='text-white'
          amount={convertedAmount}
          label="To"
          selectedCurrency={to}
          onAmountChange={(convertedAmount) => setConvertedAmount(convertedAmount)}
          onCurrencyChange={(currency) => setTo(currency)}
          currencyOptions={options} 
          amountDisabled/>  

          <button
          type="submit"
          className='w-full bg-gradient-to-r from-yellow-400 to-yellow-500 py-3 rounded-lg border border-yellow-200/70 text-white text-xl font-semibold hover:from-yellow-300 to-yellow-400 shadow shadow-lg mt-3'>
            {`Convert ${from} to ${to}`}
          </button>
        </form>
      </div>
    </>
  )
}

export default App
