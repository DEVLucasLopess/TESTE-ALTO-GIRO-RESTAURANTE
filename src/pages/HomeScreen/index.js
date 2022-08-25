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
    const [headerSearch, setHeaderSearch] = useState('');
    const [activeSearch, setActiveSearch] = useState('');

    const [categories, setCategories] = useState([]);

    const [products, setProducys] = useState([]);
    const [plates, setPlates] = useState([]);

    const history = useHistory();
    const [cookies] = useCookies(['auth.user']);

    const [activeCategory, setActiveCategory] = useState(0);

    const getMenu = async () => {
        const plate = await api.getMenu(activeSearch);
        setPlates(plate.menu);
    }

    useEffect(() => {
        clearTimeout(searchTimer);
        searchTimer = setTimeout(() => {
                setActiveSearch(headerSearch);
        }, 1000);
    }, [headerSearch]);

    useEffect(() => {
        setProducys([]);
        getMenu();
    }, [activeSearch, activeCategory]);

    useEffect(() => {
        const getCategories = async () => {
            const cat = await api.getCategories();
            setCategories(cat);
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
                {categories.length > 1 &&
                    <>
                        <CategoryArea>
                            <strong>Selecione o dia:</strong>
                            <CategoryList>
                                <CategoryItem data={{ 
                                    id: 1,
                                    title:'Todos os dias',
                                    image:'/assets/segunda_copia_2.png' 
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
                        <TextMenu> Cardápio </TextMenu>
                        <ProductListAltoRoda>
                            { plates.map((item, index, id) => (
                                <Plates key={index} data={item} id={id} />
                            ))}
                        </ProductListAltoRoda>
                    </ProductAreaAltoRoda>    
                }
        </Container>
    );
}