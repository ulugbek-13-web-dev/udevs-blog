import React from "react";
import UdevsLogo from "../../assets/udevs-logo.png";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-wrap">
        <div>
          <img src={UdevsLogo} width="90" alt="udevs-logo-footer" />
          <p className="f-info">
            Помощник в публикации статей, журналов.
            <br /> Список популярных международных конференций. <br />
            Всё для студентов и преподавателей.
          </p>

          <p className="p-light ">
            Copyright © 2020. LogoIpsum. All rights reserved.
          </p>
        </div>
        <div>
          <p className="bold">Ресурсы</p>
          <p>Статьи</p>
          <p>Журналы</p>
          <p>Газеты</p>
          <p>Дипломы</p>
        </div>
        <div>
          <p className="bold">О нас</p>
          <p>Контакты</p>
          <p>Помощь</p>
          <p>Заявки</p>
          <p>Политика</p>
        </div>
        <div>
          <p className="bold">Помощь</p>
          <p>
            Часто задаваемые <br />
            вопросы
          </p>
        </div>
      </div>
    </div>
  );
}