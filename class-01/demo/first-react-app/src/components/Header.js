import react from 'react';

class Header extends react.Component{
    render(){
        return(
            <>
                <header>
                    <nav>
                        <ul>
                            <li>Home</li>
                            <li>about</li>
                            <li>contact us</li>
                        </ul>
                    </nav>
                </header>
            </>
        
        )
    }
}

export default Header;