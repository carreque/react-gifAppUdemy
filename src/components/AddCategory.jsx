import { useState } from "react"


export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setInputValue] = useState('One Punch');

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    if(inputValue.trim() <= 1) return;
    onNewCategory(inputValue.trim()); //Trim para eliminar espacios
    setInputValue('');
  } 
  return (
      <form onSubmit={onFormSubmit}>
        <input 
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={(e) => onInputChange(e)}
        />
      </form>    
  )
}
