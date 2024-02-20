import { useState } from 'react'
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';


const GifExpertApp = () => {
  const [categories, setCategories]  = useState(['Primera Categoria',]);
  
  const onAddCategory = (element) =>{
    if(categories.includes(element)) return;
    setCategories([element,...categories,]);
  }

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onAddCategory={onAddCategory}/>
        { categories.map (category =>(
            
              <GifGrid key={category} category={category}/>
            
          ))
        }
    </>
  )
}

export default GifExpertApp
