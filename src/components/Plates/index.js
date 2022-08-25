import React from "react";
import { useState } from "react";
import { CategoryItem } from "../CategoryItem";
import { query as q } from 'faunadb';
import { fauna } from "../../services/fauna";

import {
    Container, 
    ProductPhotoArea, 
    ProductPhoto, 
    ProductName, 
    ProductInfoArea,
    ProductButton,
    InfoAvatiation,
    InfoButton
} from './styled';

export default ({data, id }) => {

console.log(id);    

    data.date = data.date.slice(0,-1);
    const dayOfWeek = new Date(data.date);

    const [avaliationButton, setAvaliationButton] = useState('');

    const [ avaliation, setAvaliation ] = useState('');

    const [optionSelect, setOptionSelect] = useState();

    // const day = CategoryItem();

    // console.log(dayOfWeek.getDay());

    // if (dayOfWeek.getDay() == 0 ) {
    //     console.log(dayOfWeek.getFullYear());
    //     console.log((dayOfWeek.getDate()+1) + '/'+ (dayOfWeek.getMonth()+1) + '/' + dayOfWeek.getFullYear());
    // }

    const handleAvaliationButton = () => {
        setAvaliationButton(avaliationButton);
    }

    const handleChange = (event) => {
        setOptionSelect({value: event.target.value});
    }

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     try {
    //         const avaliation = await fauna.query (
    //             q.Create (
    //                 q.Collection("Avaliations"),
    //                 {
    //                   data: {
    //                     "plate_id": data._id,
    //                     "score": 
    //                   }
    //                 }
    //             )
    //         )
            
    //         if(avaliation.data) {
    //             alert("Avaliado com sucesso!");
    //           }
    //     } catch (err) {
    //         alert("Usuario já cadastrado!");
    //     }
    // }
   
    return (
        <div>
            {dayOfWeek.getDay() === id &&
                <Container>
                    <ProductPhotoArea>
                        <ProductPhoto src="/assets/food-and-restaurant.png" />
                    </ProductPhotoArea>
            
                    <ProductInfoArea>
                        <ProductName value={data._id}>
                            <div>
                                {data.courses[0].name}<br/>
                                {data.courses[1].name}<br/>
                                {data.courses[2].name}<br/>
                            </div>
                        </ProductName>
                        <InfoAvatiation>
                            
                            {/* <form onSubmit={handleSubmit}>
                                <label>
                                Avalie esse prato:
                                    <select>
                                        <option value="Nota 1">1</option>
                                        <option value="Nota 2">2</option>
                                        <option value="Nota 3">3</option>
                                        <option value="Nota 4">4</option>
                                        <option value="Nota 5">5</option>
                                    </select>
                                </label>
                                <input type="submit" value="Enviar" />
                            </form> */}

                            {/* <InfoButton onClick={handleAvaliationButton}>
                                Avaliar
                            </InfoButton> */}
                        </InfoAvatiation>
                    </ProductInfoArea>
                    <ProductButton src="/assets/next.png" />
                </Container>
            }
        </div>
    );
}