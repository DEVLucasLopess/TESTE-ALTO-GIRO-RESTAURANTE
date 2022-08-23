import React from "react";
import { Container } from './styled';

export default ({data}) => {
    const dayOfWeek = new Date(data.date);

    // console.log(dayOfWeek.getDay());

    // if (dayOfWeek.getDay() == 0 ) {
    //     console.log(dayOfWeek.getFullYear());
    //     console.log((dayOfWeek.getDate()+1) + '/'+ (dayOfWeek.getMonth()+1) + '/' + dayOfWeek.getFullYear());
    // }
   
    return (
        <Container>
            {dayOfWeek.getDay() === 0 &&
                <div>
                    {data.courses[0].name}<br/>
                    {data.courses[1].name}<br/>
                    {data.courses[2].name}<br/>
                    <p>{data.desserts[0].name}</p>
                    <p>{data.drinks[0].name}</p>
                    <hr />
                </div>
            }
        </Container>
    );
}