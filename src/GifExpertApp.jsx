import { useState } from "react";
import { AddCategory, GifGrid} from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    //setCategories(['Valorant',...categories])
    // con callback
    // setCategories(cat=> [...cat,'Valorant']);
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory
        // setCategories={setCategories}
        onNewCategory={(value) => onAddCategory(value)}
      />
      {/* listado de Gifs */}
      {/* <button onClick={onAddCategory}>Agregar</button> */}

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}

      {/* Gif Item */}
    </>
  );
};
