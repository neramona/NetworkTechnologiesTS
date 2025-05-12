import React, { PureComponent, ReactNode } from 'react';
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

class Blog extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            items: [],
            modalOpen: false,
            newItem: { title: '', description: '', price: '' },
        };
    }

    handleAdd = () => {
        const { newItem, items } = this.state;
        if (!newItem.title || !newItem.description || !newItem.price) return;

        this.setState({
            items: [...items, newItem],
            newItem: { title: '', description: '', price: '' },
            modalOpen: false,
        });
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
        );
    }
}

export default Blog;