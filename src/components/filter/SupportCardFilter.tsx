'use client'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '@/lib/redux/slices/utility'
import { CardFormat, CardSort, CardSubtypes, CardSuperType, CardType, PackSets } from '@/consts/index'

// Define a Filter component that can handle empty values
const Filter = ({ filters, handleValue, value }: { filters: any, handleValue: any, value: string }) => {
  return (
    <select name="card-supertype" id="supertype" value={value} onChange={(e: any) => handleValue(e.target.value)} className='cursor-pointer capitalize bg-gray-800 text-gray-100 p-2 rounded-[5px] text-[.8rem] focus:outline-none w-fit'>
      {filters.map((item: any, idx:number) => {
        return (
          <option key={item.label + idx} value={item.value} className='capitalize'>{item.label}</option>
        )
      })}
    </select>
  )
}

const SupportCardFilter = ({onQueryChange}:{onQueryChange:any}) => {
  const dispatch = useDispatch();

  const [inputCardName, setInputCardName] = useState('')
  const [supertype, setSupertype] = useState('')
  const [type, setType] = useState('')
  const [sort, setSort] = useState('')
  const [format, setFormat] = useState('')
  const [subtypes, setSubtypes] = useState('')
  const [packs, setPacks] = useState('')

  const handleInputChange = (e: any) => setInputCardName(e.target.value);

  const resetFilters = () => {
    setSupertype('');
    setType('');
    setSubtypes('');
    setFormat('');
    setSort('');
    setPacks('');
    setInputCardName('');
  };

  // Handle cancel button click
  const handleCancleClick = () => {
    resetFilters();
  };

  const query_filter = [
    inputCardName && `name:"${inputCardName}"`,
    supertype && supertype,
    subtypes && subtypes,
    type && type,
    packs && packs,
    format && format
  ].filter(Boolean).join(' ') + (sort ? `&${sort}` : '');

  const handleSearch = () => {
    // When setting the query, ensure it's a string
    const query = query_filter.toString();
    dispatch(setQuery(query));
    onQueryChange(query);
  };

  return (
    <form action="" onSubmit={(e: any) => { e.preventDefault() }} className='flex flex-col gap-[10px] w-full'>
      <input type="text" name="card" id="card" placeholder='Search Any Pokemon Cards...' autoComplete='off' className='focus:outline-none border-none text-mainText w-full py-[.5rem] px-[1rem] bg-secondary rounded-[5px]' value={inputCardName} onChange={handleInputChange} />

      <div className="flex flex-col xl:flex-row gap-[15px] xl:items-center justify-between">
        <div className="flex flex-col md:flex-row items-center gap-[15px]">
          <Filter filters={CardSuperType} handleValue={setSupertype} value={supertype} />
          <Filter filters={CardType} handleValue={setType} value={type} />
          <Filter filters={CardSubtypes} handleValue={setSubtypes} value={subtypes} />
          <Filter filters={PackSets} handleValue={setPacks} value={packs} />
          <Filter filters={CardFormat} handleValue={setFormat} value={format} />
          <Filter filters={CardSort} handleValue={setSort} value={sort} />
        </div>

        <div className="flex items-center gap-[10px]">
          <button className='cursor-pointer p-2 rounded-[5px] text-mainText bg-red-700 text-[.8rem]' onClick={handleCancleClick}>Remove Filter</button>
          <button onClick={() => {
            handleSearch();
            onQueryChange(query_filter.toString())
          }} className='cursor-pointer p-2 rounded-[5px] text-black font-bold bg-yellow text-[.8rem]'>Search Card</button>
        </div>
      
      </div>
    </form>
  )
}

export default SupportCardFilter