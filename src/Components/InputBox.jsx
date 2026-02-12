import React from 'react'
import { useId } from 'react'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectDemo() {
  return (
    <Select
       onValueChange={(e) => {onCurrencyChange && onCurrencyChange(e.target.value)}}
       disabled={currencyDisabled}
       value={selectedCurrency}
       >
      <SelectTrigger className="w-full max-w-48">
        <SelectValue placeholder={selectedCurrency} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>currency</SelectLabel>
         {
          currencyOptions.map((currency) => (
            <SelectItem value={currency} key={currency}>{currency}</SelectItem>
          )  )
         }
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}


function InputBox({
    label,
    amount,
    selectedCurrency,
    amountDisabled = false,
    currencyDisabled = false,
    onAmountChange,
    onCurrencyChange,
    currencyOptions  = [],
    className=""

}) {

    let id = useId()
  return (
    <div 
    className={`bg-gray-800/70 w-full p-6 mb-3 text-white border border-gray-500/50 rounded-lg flex justify-between ${className}`} >
        <div className='flex flex-col'>
          <label htmlFor={id}>
              {label}
          </label>
          <input 
          className='bg-transparent outline-none mt-5 mb-2 focus:outline-none'
          id={id}
          placeholder=''
          type="text"
          inputMode='numeric'
          value={amount}
          disabled={amountDisabled}
          onChange={(e) => {onAmountChange && onAmountChange(Number(e.target.value)) }}
          />
        </div>
        <div className='flex flex-col'>
          <p>Currency Type</p>
          <Select
            onValueChange={(value) => {onCurrencyChange && onCurrencyChange(value)}}
            disabled={currencyDisabled}
            value={selectedCurrency}
            >
            <SelectTrigger className="w-full max-w-48 ">
              <SelectValue placeholder={selectedCurrency} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>currency</SelectLabel>
              {
                currencyOptions.map((currency) => (
                  <SelectItem value={currency} key={currency}>{currency}</SelectItem>
                )  )
              }
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
    </div>
  )
}

export default InputBox