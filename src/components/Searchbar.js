import React from 'react';
import style from './Searchbar.module.css'
import { ReactComponent as Search } from '../Assets/Search.svg';
import Input from './Form/Input';

const Searchbar = () => {
    return (
        <div className={style.searchbar}>
            <Input placeholder="Procurar" className={style.input}/>
        </div>
    )
}

export default Searchbar;