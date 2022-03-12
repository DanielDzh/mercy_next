import React from 'react';
import { FiPlus } from "react-icons/fi";
export default function SinglePortfolio(props) {
    const { portfolioImg, title, name } = props;
    return (
        <div className={name}>
            <div style={{ height: '100%', width: '100%' }}>
                <div className="portfolio-wrapper" style={{ height: '100%', width: '100%' }}>
                    <div className="portfolio-thumb">
                        <a href={portfolioImg}><img src={portfolioImg} alt={title} /></a>
                    </div>
                    <div className="overlay">
                        <a href={portfolioImg} data-attribute="SRL">
                            <img className="d-none" src={portfolioImg} alt={title} />
                            <i><FiPlus /></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
