import React, { Component } from 'react';
import axios from '../../../axios-orders';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

import styles from './ContactData.module.css'

class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name',
                },
                value: ''
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street',
                },
                value: ''
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Zipcode',
                },
                value: ''
            },
            city: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'City',
                },
                value: ''
            },
            state: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'State',
                },
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Email',
                },
                value: ''
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'two', displayValue: 'Two Day'},
                        {value: 'three', displayValue: 'Three Day'},
                        {value: 'five', displayValue: 'Five Day'},
                        {value: 'seven', displayValue: 'Seven Day'},
                    ]
                },
                value: ''
            },
        },
        loading: false
    }

    orderHandler = (e) => {
        e.preventDefault();
        this.setState({ loading: true });
        const formData = {};
        for(let formEle in this.state.orderForm) {
            formData[formEle] = this.state.orderForm[formEle].value;
        }
        const order = {
        ingredients: this.props.ingredients,
        price: this.props.price,
        orderData: formData,
        };
        axios
        .post("/orders.json", order)
        .then((res) => {
            this.setState({ loading: false});
            this.props.history.push('/');
        })
        .catch((err) => this.setState({ loading: false}));
    }

    inputChangedHandler = (e, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        };
        const updatedFormElement = { 
            ...updatedOrderForm[inputIdentifier]
        };
        updatedFormElement.value = e.target.value;
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        this.setState({orderForm: updatedOrderForm});
    }

    render() {
        const formElements = [];
        for(let key in this.state.orderForm) {
            formElements.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }
        let form = (
            <form onSubmit={this.orderHandler}>
                {/* <Input elementType="..." elementConfig="..." value="..." /> */}
                {formElements.map(ele => (
                    <Input changed={(e) => this.inputChangedHandler(e, ele.id)} key={ele.id} elementType={ele.config.elementType} elementConfig={ele.config.elementConfig} value={ele.config.value} />
                ))}
                <Button btnType='Success'>ORDER</Button>
            </form>
        );
        if(this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className={styles.ContactData}>
                <h4>Enter Your Contact Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;