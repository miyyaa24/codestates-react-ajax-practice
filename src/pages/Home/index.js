import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet'
import { getProducts } from '../../api/Products';
import Product from './Product';
import styles from "./home.module.scss";


const Home = () => {
    const [products, setProducts] = useState([]);

    const onGetProducts = async () => {
        const response = await getProducts();

        if (response.status === 200) {
            setProducts(response.data.products);
        }
    };

    useEffect(() => {
        onGetProducts();
    }, []);

    return (
        <main className={styles.wrapper}>
            <Helmet>
                <title>Alone</title>
            </Helmet>

            <header className={styles.header}>
                <img className={styles.logo} src="img/mainlogo.png"></img>
            </header>
            <section className={styles.productsWrapper}>
                <ul>
                    {products.map((product) => {
                        return <Product key={product.id} product={product} />;
                    })}
                </ul>
            </section>
        </main>
    );
};

export default Home;