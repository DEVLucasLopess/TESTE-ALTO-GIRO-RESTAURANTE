import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";
import { Container, 
        CategoryArea, 
        CategoryList, 
        ProductAreaAltoRoda,
        ProductListAltoRoda,
        TextMenu
        
    } from './styled';

import api from '../../api.js';

import Header from '../../components/Header';
import CategoryItem from '../../components/CategoryItem';
import Plates from '../../components/Plates';

let searchTimer = null;

export default () => {
    const [headerSearch, setHeaderSearch] = useState('')
	const [activeSearch, setActiveSearch] = useState('')
	const [activeCategory, setActiveCategory] = useState(1);

    const [categories, setCategories] = useState([]);

    const [plates, setPlates] = useState([]);

    const [products, setProducys] = useState([]);

	const history = useHistory();
	const [cookies] = useCookies(['auth.user']);

   	const getMenu = async () => {
		const plate = await api.getMenu(activeSearch)
		setPlates(plate.menu)
	}

	useEffect(() => {
		clearTimeout(searchTimer)
		searchTimer = setTimeout(() => {
			setActiveSearch(headerSearch)
		}, 1000)
	}, [headerSearch]);
    

    useEffect(() => {
        setProducys([]);
        getMenu();
    }, [activeSearch, activeCategory]);


    //esse cara não pode tirar
    useEffect(() => {
        const getCategories = async () => {
            const cat = await api.getCategories();
            setCategories(cat);
        }
        getCategories();
    }, []);

    // useEffect(async () => {
	// 	const cat = await api.getCategories()
	// 	setCategories(cat)
	// }, [])
    //

	useEffect(() => {
		if (!cookies['auth.user']) {
			history.push('/')
		}
	}, []);

	useEffect(() => {
		getMenu()
	}, []);

    return (
        <Container>
            <Header search={headerSearch} onSearch={setHeaderSearch} />
                {categories.length > 1 &&
                    <>
                        <CategoryArea>
                            <strong>Selecione o dia:</strong>
						    <CategoryList>
						    	{categories.map((item, index) => (
						    		<CategoryItem
						    			key={index}
						    			data={item}
						    			activeCategory={activeCategory}
						    			setActiveCategory={setActiveCategory}
						    		/>
						    	))}
						    </CategoryList>  
                        </CategoryArea>
                    </>
                }

                {activeCategory !== 0 && plates.length > 0 && (
			    	<ProductAreaAltoRoda>
			    		<TextMenu> Cardápio </TextMenu>
			    		<ProductListAltoRoda>
			    			<Plates plates={plates} id={activeCategory} />
			    		</ProductListAltoRoda>
			    	</ProductAreaAltoRoda>
			    )}
        </Container>
    );
}