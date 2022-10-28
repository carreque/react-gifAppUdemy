import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExperApp = () => {

  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

  const onaddCategory = (newCategory) => {
    
    if(categories.includes(newCategory)) return;
    setCategories([...categories, newCategory]);
  }

  return (
    <>
        <h1>GiftExpertApp</h1>
        <AddCategory onNewCategory={onaddCategory}/>
        {
          categories.map((category) => ( 
            <GifGrid 
            category={category} 
            key={category}/>
          ))
        }
    </>
  )
}
