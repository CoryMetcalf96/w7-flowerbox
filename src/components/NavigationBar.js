import NavigationLinks from './NavigationLinks';

function NavigationBar(props) {
    return (
        <div className='navigation-links'>
            <a href="#"><NavigationLinks link="about" /></a>
            <a href="#"><NavigationLinks link="collections" /></a>
            <a href="#"><NavigationLinks link="delivery service" /></a>
            <a href="#"><NavigationLinks link="location" /></a>
            <a href="#"><NavigationLinks link="contact us" /></a>
        </div>
    )
};

export default NavigationBar;