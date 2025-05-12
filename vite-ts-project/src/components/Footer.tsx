import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class Footer extends PureComponent {
    constructor(props) {
        super(props);
        
        this.state = {
            
        };
    }

    render() {
        return (
            <footer className="bg-[#F5F5F5] text-[#3D3D3D] pt-10 pb-10 font-[oswald]">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-between">
                        <div className="w-full md:w-1/6 mb-6">
                            <h4 className="font-bold mb-2 border-b border-[#3D3D3D]">Компания</h4>
                            <ul className="list-none">
                                <li className="mb-2"><Link to="/about">О компании</Link></li>
                                <li className="mb-2"><Link to="/">Новости</Link></li>
                                <li className="mb-2"><Link to="/">Партнерам</Link></li>
                                <li className="mb-2"><Link to="/">Политика конфиденциальности</Link></li>
                                <li className="mb-2"><Link to="/">Персональные данные</Link></li>
                            </ul>
                        </div>

                        <div className="w-full md:w-1/2 mb-6">
                            <h5 className="font-bold border-b border-[#3D3D3D] mb-2">Покупателям</h5>
                            <ul className="list-none">
                                <li className="mb-2"><Link to="/">Как оформить заказ</Link></li>
                                <li className="mb-2"><Link to="/">Способы оплаты</Link></li>
                                <li className="mb-2"><Link to="/">Доставка</Link></li>
                                <li className="mb-2"><Link to="/">Статус заказа</Link></li>
                                <li className="mb-2"><Link to="/">Обмен, возврат, гарантия</Link></li>
                                <li className="mb-2"><Link to="/">Юридическим лицам</Link></li>
                                <li className="mb-2"><Link to="/">Помощь</Link></li>
                                <li className="mb-2"><Link to="/">Обратная связь</Link></li>
                            </ul>
                        </div>

                        <div className="w-full md:w-1/4 lg:w-1/6 mb-6">
                            <h5 className="font-bold mb-2 border-b border-[#3D3D3D]">Оставайтесь на связи</h5>
                            <ul>
                                <ul className="flex"> 
                                    <li className="mb-2 mr-2">8-800-32-20-925</li> 
                                    <li className="mb-2">(с 9:00 до 21:00)</li>
                                </ul>
                                <li className="mb-2">Адрес магазинов в г.Якутск</li>
                            </ul>
                        </div>

                    </div>

                    <div className="text-left mt-8">
                        <p>&copy; 2025-2025 Компания ***. Администрация Сайта не несет ответственности за размещаемые Пользователями материалы (в т.ч. информацию и изображения), их содержание и качество.</p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;