import React from "react";

import {
    Container, 
    ProductPhotoArea, 
    ProductPhoto, 
    ProductName, 
    ProductPrice, 
    ProductIgredients, 
    ProductInfoArea,
    ProductButton
} from './styled';

export default ({data}) => {
    const dayOfWeek = new Date(data.date);

    // console.log(dayOfWeek.getDay());

    // if (dayOfWeek.getDay() == 0 ) {
    //     console.log(dayOfWeek.getFullYear());
    //     console.log((dayOfWeek.getDate()+1) + '/'+ (dayOfWeek.getMonth()+1) + '/' + dayOfWeek.getFullYear());
    // }
   
    return (
        <Container>
            {/* {dayOfWeek.getDay() === 0 &&
                <div>
                    <p>{data.desserts[0].name}</p>
                    <p>{data.drinks[0].name}</p>
                    <hr />
                </div>
            } */}
            <ProductPhotoArea>
                <ProductPhoto>
                    
                </ProductPhoto>
            </ProductPhotoArea>

            <ProductInfoArea>
                <ProductName>
                    {data.courses[0].name}<br/>
                    {data.courses[1].name}<br/>
                    {data.courses[2].name}<br/>
                </ProductName>
            </ProductInfoArea>
            <ProductButton src="/assets/next.png" />
        </Container>
    );
}