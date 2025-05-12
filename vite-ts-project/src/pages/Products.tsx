import React, { PureComponent, ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '../components/Button';
import { Input } from '../components/Input';

interface Item {
    title: string;
    description: string;
    price: string;
}

interface Props {}

interface State {
    items: Item[];
    modalOpen: boolean;
    newItem: Item;
}

class Products extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            items: [],
            modalOpen: false,
            newItem: { title: '', description: '', price: '' },
        };
    }
    componentDidMount() {
        this.fetchProducts();   
    }
    fetchProducts = async () => {
        try{
            const response = await fetch("http://localhost:5000/api/products")
            const data = await response.json();
            this.setState({ items: data});
        } catch(error){
            console.error("Ошибка загрузки товаров:", error)
        }
    }

    handleAdd = async () => {
        const { newItem } = this.state;
        if (!newItem.title || !newItem.description || !newItem.price) return;

        try{
            const response = await fetch("http://localhost:5000/api/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newItem)
            })
            if (response.ok){
                const result = await response.json();
                console.log("Товар добавлен:", result.product)
                this.setState({modalOpen: false, newItem: {title: "", description: "",price: ""}})
                this.fetchProducts();
            } 
            else {
                console.error("Ошибка при добавлении товара")
            }
        } catch (error){
            console.error("Ошибка запроса:", error);
        }
    };

    handleChange = (key: keyof Item, value: string) => {
        this.setState((prevState) => ({
            newItem: {
                ...prevState.newItem,
                [key]: value,
            },
        }));
    };

    render(): ReactNode {
        const { items, modalOpen, newItem } = this.state;

        return (
        <>
            <Helmet>
                    <title>Товары</title>
                    <meta name='description' content='Смотрите наши последние товары'/>
                    <meta name='keywords' content='товары, React'/>
            </Helmet>
            <div className="container mx-auto p-5">
                <h1 className="text-2xl mb-4">Товары</h1>
                <Button
                    title="Добавить товар"
                    size="large"
                    color="primary"
                    onClick={() => this.setState({ modalOpen: true })}
                />

                {modalOpen && (
                    <div className="fixed inset-0 flex justify-center items-center">
                        <div className="bg-white bg-opacity-80 backdrop-blur-sm p-6 rounded shadow-lg w-96 border border-gray-300">
                            <h2 className="text-lg font-bold mb-4">Новый товар</h2>
                            <div className="space-y-3">
                                <Input
                                    size="medium"
                                    color="gray"
                                    placeholder="Название"
                                    value={newItem.title}
                                    onChange={(e) => this.handleChange('title', e.target.value)}
                                />
                                <Input
                                    size="medium"
                                    color="gray"
                                    placeholder="Описание"
                                    value={newItem.description}
                                    onChange={(e) => this.handleChange('description', e.target.value)}
                                />
                                <Input
                                    size="medium"
                                    color="gray"
                                    placeholder="Цена"
                                    value={newItem.price}
                                    onChange={(e) => this.handleChange('price', e.target.value)}
                                />
                                <div className="flex justify-between space-x-2 pt-2">
                                    <Button
                                        title="Добавить"
                                        size="medium"
                                        color="primary"
                                        onClick={this.handleAdd}
                                    />
                                    <Button
                                        title="Отмена"
                                        size="medium"
                                        color="secondary"
                                        onClick={() => this.setState({ modalOpen: false })}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="mt-6">
                    {items.map((item, index) => (
                        <div key={index} className="border p-4 mb-3 rounded">
                            <h3 className="text-xl font-bold">{item.title}</h3>
                            <p className="text-gray-700">{item.description}</p>
                            <p className="text-green-600 font-semibold">{item.price}₽</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
        );
    }
}

export default Products;