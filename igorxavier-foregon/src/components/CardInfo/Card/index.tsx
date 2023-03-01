import { useState, useEffect } from "react";
import { useFetch } from "../../../hooks/useFetch";
import "./styles.scss"
import starIcon from "../../../assets/star-blue-icon.svg"
import securityIcon from "../../../assets/shell-gray-icon.svg"
import arrowRightIcon from "../../../assets/arrow-right-white-icon.svg"
import CardInfo from "../CardInfo";
import { ICard } from "../../../types/Card";

export default function Card() {
    const { data: cardData, loading, error } = useFetch<ICard>("/");

    return(
        <main>
            {loading && <p>Carregando...</p>}
            <div className="container">
                <div className="card flex">
                    <div className="card-image">
                        <img src={cardData?.imageUrl} alt="Imagem do cartão de crédito oferecido"/>
                    </div>

                    <div className="card-info">
                        <div className="flex">
                            <span className="card-info-recommended">Recomendado</span>
                            <span className="card-info-flag">Visa Classic</span>
                        </div>
                        <div className="card-info-name">
                            <h1>{cardData?.name}</h1>
                        </div>
                        <div className="card-info-rating">
                            <div className="flex">
                                <img src={starIcon} alt="Ícone de avaliação do cartão de crédito"/>
                                <span className="card-info-rating-stars">{cardData?.rating.average_score}</span>
                                <span className="card-info-rating-count">{cardData?.rating.total_reviews} avaliações</span>
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
            <CardInfo minimumRevenue={cardData?.valueOfMinimalIncomeRequired} annuity={cardData?.firstAnnuity.textFormatted}/>
        </main> 
    )
}