import "./styles.scss"

export default function Menu(){
    return(
        <div className="menu flex">
            <div className="container">
                <ul className="menu-items flex">
                    <li className="menu-item">
                        <a href="#">
                            Cartões para negativados
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="#">
                            Cartões com milhas
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="#">
                            Cartões sem anuidade
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="#">
                            Cartões para estudanes
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="#">
                            Cartões com mais benefícios
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}