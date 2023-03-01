import "./styles.scss"
import arrowDownIcon from "../../assets/arrow-down-white-icon.svg"

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
                    <li className="menu-item desktop">
                        <a href="#" className="flex">
                            Mais 2 <img src={arrowDownIcon} alt="Ícone de seta para baixo"/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}