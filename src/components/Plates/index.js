import * as React from 'react'
import { CategoryItem } from '../CategoryItem'
import { query as q } from 'faunadb'
import { fauna } from '../../services/fauna'

import {
	Container,
	ProductPhotoArea,
	ProductPhoto,
	ProductName,
	ProductInfoArea,
	ContainerPlates,
    ContainerInfoPlates,
    InfoPlates,
    ContainerDrink
} from './styled'

export default ({ plates, id }) => {
	const filter = React.useMemo(() => {
		const newPlates = plates
			.map((item) => {
				const date = new Date(item.date)
				const dateFormat = date.getUTCDay()
				return {
					...item,
					_day: dateFormat,
				}
			})
			.filter((fil) => fil._day === id)

		return newPlates
	}, [id])

	return (
		<div>
			{filter.length > 0 &&
				filter.map((item) => {
					return (
						<Container key={item._id}>
							<ProductPhotoArea>
								<ProductPhoto src="/assets/food-and-restaurant.png" />
							</ProductPhotoArea>

							<ProductInfoArea>
								<ProductName value={item._id}>
                                    <ContainerPlates>
									    <ContainerInfoPlates>
                                            <InfoPlates>Pratos do dia:</InfoPlates>
									    	{item.courses[0].name}
									    	<br />
									    	{item.courses[1].name}
									    	<br />
									    	{item.courses[2].name}
									    	<br />
									    </ContainerInfoPlates>
                                        <div>
                                            <InfoPlates>Sobremesa:</InfoPlates>
                                            {item.desserts[0].name}
                                        </div>
                                        <ContainerDrink>
                                            <InfoPlates>Bêbidas:</InfoPlates>
                                            {item.drinks[0].name}
                                        </ContainerDrink>
                                    </ContainerPlates>
								</ProductName>
							</ProductInfoArea>
						</Container>
					)
				})}
		</div>
	)
}
