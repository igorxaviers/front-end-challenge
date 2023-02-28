import "./styles.scss"
import starIcon from "../../../assets/star-blue-icon.svg"
import securityIcon from "../../../assets/shell-gray-icon.svg"
import arrowRightIcon from "../../../assets/arrow-right-white-icon.svg"

export default function Card() {

    return(
        <div className="container">
            <div className="card flex">
                <div className="card-image">
                    <img src="https://s3-sa-east-1.amazonaws.com/imagens-cartoes/cartoes/cartao-de-credito-smiles-santander-gold.png" alt="Imagem do cartão de crédito oferecido"/>
                </div>

                <div className="card-info">
                    <div className="flex">
                        <span className="card-info-recommended">Recomendado</span>
                        <span className="card-info-flag">Visa Classic</span>
                    </div>
                    <div className="card-info-name">
                        <h2>Cartão de Crédito Smiles Anuidade Zero Visa</h2>
                    </div>
                    <div className="card-info-rating">
                        <div className="flex">
                            <img src={starIcon} alt="Ícone de avaliação do cartão de crédito"/>
                            <span className="card-info-rating-stars">4,9</span>
                            <span className="card-info-rating-count">5 avaliações</span>
                        </div>
                    </div>
                </div>

                <div className="card-request">
                    <div className="card-request-button">
                        <button type="button" className="button button-request flex">
                            Solicitar cartão
                            <img src={arrowRightIcon} alt="Ícon de seta" />
                        </button>
                        <div className="card-request-security flex">
                            <img src={securityIcon} alt="Ícone representando segurança"/>
                            <p>Solicite com segurança</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}