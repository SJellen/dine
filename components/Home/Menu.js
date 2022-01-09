

import styles from '../../styles/Home/Menu.module.scss'

export default function Menu() {

    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h2>A few highlights from our menu</h2>
                <p>We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. Our menu is revamped every season.</p>
            </div>
            <div className={styles.menuItemContainer}>
                <div className={styles.menuItem}>
                    <div className={styles.leftContainer}></div>
                    <div className={styles.rightContainer}>
                        <h3>Seared Salmon Fillet</h3>
                        <p>Our locally sourced salmon served with a refreshing buckwheat summer salad.</p>
                    </div>
                </div>
                <div className={styles.menuItem}>
                    <div className={styles.leftContainer}></div>
                    <div className={styles.rightContainer}>
                        <h3>Rosemary Filet Mignon</h3>
                        <p>Our prime beef served to your taste with a delicious choice of seasonal sides.</p>
                    </div>
                </div>
                <div className={styles.menuItem}>
                    <div className={styles.leftContainer}></div>
                    <div className={styles.rightContainer}>
                        <h3>Summer Fruit Chocolate Mousse</h3>
                        <p>Creamy mousse combined with summer fruits and dark chocolate shavings.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}