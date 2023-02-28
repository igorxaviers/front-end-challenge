import "./styles.scss"
import infoIcon from "../../../assets/info-blue-icon.svg"
import smartPhoneIcon from "../../../assets/smartphone-orange-icon.svg"
import airplaneIcon from "../../../assets/airplane-blue-icon.svg"
import scoreIcon from "../../../assets/score-high.svg"

export default function CardInfo() {

    return(
        <div className="container">
            <div className="card-secondary flex">

                <div className="card-infos flex">
                    <div className="card-info">
                        <img src={infoIcon} alt="Ícone indicador de informação" />
                        <div className="card-info-details">
                            <h3>Anuidade</h3>
                            <p>4x R$ 88,50</p>
                        </div>
                    </div>

                    <div className="card-info">
                        <img src={infoIcon} alt="Ícone indicador de informação" />
                        <div className="card-info-details">
                            <h3>Renda mínima</h3>
                            <p>R$ 1.500</p>
                        </div>
                    </div>

                    <div className="card-info">
                        <img src={smartPhoneIcon} alt="Ícone indicador de informação" />
                        <div className="card-info-details">
                            <p>Aplicativo para controlar gastos</p>
                        </div>
                    </div>

                    <div className="card-info">
                        <img src={airplaneIcon} alt="Ícone indicador de informação" />
                        <div className="card-info-details">
                            <p>Milhas aéreas pelo programa Smiles</p>
                        </div>
                    </div>
                </div>

                <div className="card-score">
                    <div className="card-score-details flex">
                        <img src={scoreIcon} alt="" />
                        <div className="card-score-details-text">
                            <h3>Você tem <strong>altas chances</strong> de aprovação neste cartão</h3>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}