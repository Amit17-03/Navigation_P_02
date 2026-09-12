
import styles from './Navigation.module.css';
const Navigation = () => {
    // console.log(styles);
    return (
        <nav className={`${styles.navigation} Container`}>
        <div className="logo">
            <img src="/images/favicon.svg" alt=''/>
          </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Person Detail</li>
            </ul>
       
        </nav>
    );
};

export default Navigation;