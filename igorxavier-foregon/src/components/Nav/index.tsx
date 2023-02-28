import "./styles.scss";
import logo from "../../assets/logo-foregon.svg";
import hamburger from "../../assets/navbar-toggler-icon.svg";

export default function Nav() {
  return (
    <header>
        <nav className="navbar">
            <div className="navbar-container container">
                <div className="navbar-container-content flex">
                <div className="flex">
                    <button className="navbar-hamburger" type="button">
                        <img
                            className="navbar-container-content-logo"
                            src={hamburger}
                            alt="Botão para expandir o menu"
                            width="24px"
                            height="24px"
                        />
                    </button>
                    <a href="#" className="navbar-brand">
                        <img src={logo} alt="Logo Foregon" width="134px" height="18" />
                    </a>
                    <div className="d-none d-lg-block">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a href="#" className="link-creditcard">
                                    Cartões de crédito
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="">
                    <button type="button" className="button button-score">
                        Descubra seu score grátis
                    </button>
                </div>
                </div>
            </div>
        </nav>
    </header>
  );
}
