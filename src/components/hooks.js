import { useState, useEffect} from "react";

export function useLocalStorage(key,initialValue){
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  function setValue(value){
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  return [storedValue, setValue];
};

export function useDarkMode(value){
  const [darkMode,setDakMode] = useLocalStorage('isOn', value); 

  useEffect(()=>{
    darkMode ? document.querySelector('body').classList.add('dark-mode') : document.querySelector('body').classList.remove('dark-mode');
  },[darkMode])

  return [darkMode,setDakMode];
}