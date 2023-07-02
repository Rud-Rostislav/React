import React from "react";

export default function Menu() {
    const PizzaData = [
        {
            id: 1,
            name: "Pepperoni",
            ingredients: "Pepperoni, Sausage, Ham, Cheese, Mushroom",
            price: 7,
            image: "App_1_pizza_photo/1.jpg"
        },
        {
            id: 2,
            name: "Sausage",
            ingredients: "Pepperoni, Sausage, Ham, Cheese, Mushroom",
            price: 10,
            image: "App_1_pizza_photo/2.jpg"
        },
        {
            id: 3,
            name: "Ham",
            ingredients: "Pepperoni, Sausage, Ham, Cheese, Mushroom",
            price: 15,
            image: "App_1_pizza_photo/3.jpg"
        },
        {
            id: 4,
            name: "Cheese",
            ingredients: "Pepperoni, Sausage, Ham, Cheese, Mushroom",
            price: 12,
            image: "App_1_pizza_photo/4.jpg"
        },
        {
            id: 5,
            name: "Mushroom",
            ingredients: "Pepperoni, Sausage, Ham, Cheese, Mushroom, Mushroom, Mushroom, Peperoni",
            price: 8,
            image: "App_1_pizza_photo/5.jpg"
        },
        {
            id: 6,
            name: "Pepperoni",
            ingredients: "Pepperoni, Sausage, Ham, Cheese, Mushroom",
            price: 18,
            image: "App_1_pizza_photo/1.jpg"
        },
        {
            id: 7,
            name: "Sausage",
            ingredients: "Pepperoni, Sausage, Ham, Cheese, Mushroom",
            price: 20,
            image: "App_1_pizza_photo/2.jpg"
        },
        {
            id: 8,
            name: "Ham",
            ingredients: "Pepperoni, Sausage, Ham, Cheese, Mushroom",
            price: 25,
            image: "App_1_pizza_photo/3.jpg"
        }
    ]

    return (
        <main>
            <h2 className="menu-title">Our menu</h2>
            <ul className='Pizza_wrapper'>
                {/*    <Pizza name={pizza.name} ingredients={pizza.ingredients} price={pizza.price} image={pizza.image}/>*/}
                {PizzaData.map((pizza) => (
                    <li className="Pizza_item" key={pizza.id}>
                        <h3 className="Pizza_name">{pizza.name}</h3>
                        <img src={pizza.image} alt={pizza.name} className="Pizza_images"/>
                        <p className="Pizza_ingredients">{pizza.ingredients}</p>
                        <p className="Pizza_price">{pizza.price} $</p>
                        <button className="Buy_Pizza">ORDER</button>
                    </li>
                ))}
            </ul>
        </main>
    );
}