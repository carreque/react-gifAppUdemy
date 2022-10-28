// import { useEffect, useState } from "react"; //Primero importaciones de react
import { GifGridItem } from "./GifGridItem"; //Segundo importaciones de terceros
import { useFetchGifs } from "../hooks/useFetchGifs";
// import { getGifs } from "../helpers/getGifs"; //Tercero importaciones de helpers


export const GifGrid = ({category}) => {
    
    const {images, isLoading} = useFetchGifs(category);
    
    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2>Cargando....</h2>) //tambien serviria un componente
            }
            <div className="card-grid">
                {
                    images.map(image => 
                        <GifGridItem 
                            key={image.id} 
                            {...image}
                        />
                    )
                }
            </div>
            
        </>
    )
}
