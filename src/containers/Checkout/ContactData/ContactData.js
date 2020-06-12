import React, { Component } from 'react';
import axios from '../../../axios-orders';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

import styles from './ContactData.module.css'

class ContactData extends Component {
    state = {
        name: 'Travis',
        email: 'Travis',
        address: {
            street: '',
            postalCode: '',
        },
        loading: false
    }

    orderHandler = (e) => {
        e.preventDefault();
        this.setState({ loading: true });
        const order = {
        ingredients: this.props.ingredients,
        price: this.props.price,
        customer: {
            name: "Travis Laudahl",
            address: {
            street: "Test",
            zipCode: "55379",
            country: "United States",
            },
            email: "email@test.com",
        },
        deliveryMethod: "fastest",
        };
        axios
        .post("/orders.json", order)
        .then((res) => {
            this.setState({ loading: false});
            this.props.history.push('/');
        })
        .catch((err) => this.setState({ loading: false}));
    }

    render() {
        let form = (
            <form>
                <Input inputtype='input' type='text' name='name' placeholder='Your Name' />
                <Input inputtype='input' type='text' name='email' placeholder='Your Email' />
                <Input inputtype='input' type='text' name='street' placeholder='Street' />
                <Input inputtype='input' type='text' name='postal' placeholder='Postal Code' />
                <Button btnType='Success' clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if(this.state.loading) {
            form = <Spinner />
        }
        return (
            <div class={styles.ContactData}>
                <h4>Enter Your Contact Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;