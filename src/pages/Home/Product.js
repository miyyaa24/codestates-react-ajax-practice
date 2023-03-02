import React from 'react';
import styles from './product.module.scss';

const Product = ({product}) => {
    return (
        <li className={styles.wrapper}>
            <img src={product.thumbnail} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
        </li>
    );
};

export default Product;