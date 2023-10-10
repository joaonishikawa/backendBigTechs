import axios from "axios";
import { useEffect, useState } from "react";

const Card = () => {

  const [data, setData] = useState([])

//   link da API: https://dizzy-knickers-fawn.cyclic.app/all

    useEffect (() => {
        axios.get("https://dizzy-knickers-fawn.cyclic.app/all")
            .then(async(res) => {
                await setData(res.data)
            })
         .catch(err => console.log(err))
    }, [])


    return(
        <div className="mx-auto max-w-screen-xl mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 mr-10 ml-10">
            {data.map(element => (
                <div className="mx-auto max-w-screen-xl p-6 border rounded-lg shadow-xl hover:scale-105 duration-300">
                <img src={element.img} className="w-8"/>
                <h5 className="mb-3 mt-2 text-2xl font-semibold text-white"></h5>
                <p className="text-transparent bg-gradient-to-r bg-clip-text from-pink-500 to-blue-500 text-lg font-black">Preço atual: R$</p>
                <p className="text-white">Max 24h: R$ </p>
                <p className="text-white">Min 24h: R$ </p>
            </div>
            ))}    
        </div> 
    )
}

export default Card