import React from 'react';
import './Header.css';
import ozonLogo from '../../img/ozonLogo.svg';
import dollarIcon from '../../img/dollarIcon.svg';
import bellIcon from '../../img/bellIcon.svg';
import userIcon from '../../img/userIcon.svg';
import arrowDownIcon from '../../img/arrowDownIcon.svg';
import mainLogo from '../../img/mainLogo.svg';
import menuIcon from '../../img/menuIcon.svg';

export default function Header () {
    return (
        <div className="container-fluid">
            <header className="header">
                <div className="row">
                    <div className="col-auto">
                        <div className="logo-box">
                            <img src={mainLogo} alt="stat4market" className="main-logo"/>
                            <span className="logo-text">stat<span className="logo-text--mod">4</span>market</span>
                        </div>
                    </div>
                    <div className="col">
                        <div className="header-box header-box--id">
                            <img src={ozonLogo} alt={ozonLogo} className="box-id__icon"/>
                            <span className="box-text box-text--id"><span className="box-text--hide">Ozon</span> (№28451)</span>
                        </div>
                    </div>
                    <div className="col-auto">
                        <div className="header-box header-box--budget">
                            <img src={dollarIcon} alt={dollarIcon} className="box-budget__icon"/>
                            <span className="box-text box-text--balance">9 932.00&nbsp;&#8381;</span>
                            <span className="box-budget__days">(Хватит ~ 345 дней)</span>
                            <button className="btn box-budget__btn">Пополнить</button>
                        </div>
                    </div>
                    <div className="col-auto">
                        <div className="header-box__user">
                            <a href="/" className="header-box__link header-box__link--notification">
                                <img src={bellIcon} alt={bellIcon} className="header-box__icon" />
                            </a>
                            <a href="/" className="header-box__link header-box__link--user">
                                <img src={userIcon} alt={userIcon} className="header-box__icon" />
                            </a>
                            <a href="/" className="header-box__link-account">
                                <span className="box-text">Александр</span>
                                <img src={arrowDownIcon} alt={arrowDownIcon} className="header-box__arrow-down" />
                            </a>
                        </div>
                    </div>
                    <div className="col-auto">
                            <div className="box-menu">
                                <img src={menuIcon} alt={menuIcon} className="box-menu__icon"/>
                            </div>
                    </div>
                </div>
            </header>
        </div>
    )
}