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
    return (
        <Container>
            <ProductPhotoArea>
                <ProductPhoto src={data.image} />
            </ProductPhotoArea>

            <ProductInfoArea>
                <ProductName>
                    {data.name}
                </ProductName>
                <ProductPrice>
                    R$ {data.price}
                </ProductPrice>
                <ProductIgredients>
                    {data.ingredients}
                </ProductIgredients>
            </ProductInfoArea>
            <ProductButton src="/assets/next.png" />
        </Container>
    );

}