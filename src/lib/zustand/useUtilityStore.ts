import { create } from 'zustand'

interface Props {
  buttonClick: {
    label:string,
    value:boolean
  },
  query:string,
  activeTab:string,
  setActiveTab: (val:string) => void,
  setButtonClick: (label:string, value:boolean) => void,
  setQuery: (query:string) => void
}

export const useUtiltiyStore = create<Props>((set) => ({
  buttonClick: {
    label: '',
    value: false
  },
  query: '',
  activeTab: 'All',
  setActiveTab: (val:string) => set(() => ({activeTab:val})),
  setButtonClick: (label:string, value:boolean) => set(() => ({buttonClick: {label, value}})),
  setQuery: (query:string) => set(() => ({query:query}))
}));