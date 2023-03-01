import infoIcon from "../../../assets/info-blue-icon.svg"
import smartPhoneIcon from "../../../assets/smartphone-orange-icon.svg"
import airplaneIcon from "../../../assets/airplane-blue-icon.svg"
import scoreIcon from "../../../assets/score-high.svg"
import giftIcon from "../../../assets/gift-orange-icon.svg"
import calendarIcon from "../../../assets/calendar-red-icon.svg"
import Skeleton from 'react-loading-skeleton'
import "./styles.scss"
import 'react-loading-skeleton/dist/skeleton.css'

interface ICardProps {
    minimumRevenue? : number;
    annuity?: string;
    loading: boolean;
}

export default function CardInfo({minimumRevenue, annuity, loading}: ICardProps) {

    return(
    <div className="container">
        <div className="card-secondary flex">
            <div className="card-infos flex">
                <div className="card-info">
                    <img src={infoIcon} alt="Ícone indicador de informação" />
                    <div className="card-info-details">
                        <h3>Anuidade:</h3>
                        {loading ? <Skeleton className="card-info-details-skeleton" count={2}/> :
                        <p>{ annuity }</p>
                        }
                        <a className="mobile" href="">Pode ser grátis, veja como →</a>
                    </div>
                </div>

                <div className="card-info">
                    <img src={infoIcon} alt="Ícone indicador de informação" />
                    <div className="card-info-details">
                        <h3>Renda mínima:</h3>
                        {loading ? <Skeleton className="card-info-details-skeleton" /> :
                        <p>R$ { minimumRevenue }</p>
                        }
                    </div>
                </div>

                <div className="desktop">
                    <div className="flex">
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
                </div>

                <div className="mobile">
                    <div className="flex">
                        <div className="card-info">
                            <img src={giftIcon} alt="Ícone indicador de informação" />
                            <div className="card-info-details">
                                <p>Acumule pontos e troque por produtos</p>
                            </div>
                        </div>

                        <div className="card-info">
                            <img src={calendarIcon} alt="Ícone indicador de informação" />
                            <div className="card-info-details">
                                <p>Mais prazo para pagar a fatura do cartão</p>
                            </div>
                        </div>
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