import { useState } from "react"

export const AddCategory = ({onAddCategory}) => {
  const [inputValue, setInputValue] = useState('')

  const onSubmit = (event) => {

    event.preventDefault();
    if(inputValue.length <= 1) return;
   
    onAddCategory(inputValue);
    setInputValue('');

  }
  
  return (
    <form onSubmit={onSubmit}>
      <input 
        type="text"
        placeholder="gifts"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value.trim())}
        />
    </form>

  )
}

