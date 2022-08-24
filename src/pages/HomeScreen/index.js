import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";
import { Container, 
        CategoryArea, 
        CategoryList, 
        ProductAreaAltoRoda,
        ProductListAltoRoda
        
    } from './styled';

import api from '../../api.js';

import Header from '../../components/Header';
import CategoryItem from '../../components/CategoryItem';
import Plates from '../../components/Plates';

export default () => {
    const [headerSearch, setHeaderSearch] = useState('');
    const [categories, setCategories] = useState([]);
    const history = useHistory();
    const [products, setProducys] = useState([]);
    const [plates, setPlates] = useState([]);

    const [cookies] = useCookies(['auth.user']);

    const [activeCategory, setActiveCategory] = useState(0);

    const getMenu = async () => {
        const plate = await api.getMenu();
        setPlates(plate.menu);
    }

    useEffect(() => {
        const getCategories = async () => {
            const cat = await api.getCategories();
            if(cat.error == '') {
                setCategories(cat.result);
            }
        }
        getCategories();
    }, []);

    useEffect (() => {
        if(!cookies['auth.user']) {
            history.push("/");
        }
    }, []);

    useEffect(() => {
        getMenu();
    }, []);

    return (
        <Container>
            <Header search={headerSearch} onSearch={setHeaderSearch} />
                {categories.length > 0 &&
                    <>
                        <CategoryArea>
                            <strong>Selecione o dia:</strong>
                            <CategoryList>
                                <CategoryItem data={{
                                    id:0,
                                    title:'Todos os dias',
                                    image:'/assets/food-and-restaurant.png'
                                }} 
                                activeCategory={activeCategory}
                                setActiveCategory={setActiveCategory}
                            
                                />
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

                {plates.length > 0 && 
                    <ProductAreaAltoRoda>
                        <ProductListAltoRoda>
                            { plates.map((item, index) => (
                                <Plates key={index} data={item} />
                            ))}
                        </ProductListAltoRoda>
                    </ProductAreaAltoRoda>    
                }
        </Container>
    );
}