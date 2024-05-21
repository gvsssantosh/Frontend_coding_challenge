import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavigationBar from './navbar';
import { customerServiceObj } from '../services/service';
import "./customerhome.css"

function CustomerHome() {
    const [customers, setCustomers] = useState([]);
    const [newCustomer, setNewCustomer] = useState({
        firstName: '', lastName: '', address: '', email: '', state: '', plan: 'Bronze'
    });

    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                let result = await customerServiceObj.getAllCustomers();
                console.log(result);
                setCustomers(result.obj);
            } catch (error) {
                console.error('Error fetching customers:', error);
            }
        };

        fetchCustomers();
    }, []);

    const handleChange = (e) => {
        setNewCustomer({
            ...newCustomer,
            [e.target.name]: e.target.value
        });
    };

    const handleAddCustomer = async () => {
        console.log(newCustomer);
        try {
            let result = await customerServiceObj.createCustomer(newCustomer);
            if(result.success===true){
                alert("customer added successfully");
            }
            else{
                alert(result.msg);
            }
            setCustomers([...customers, result.obj]);
            setNewCustomer({ firstName: '', lastName: '', address: '', email: '', state: '', plan: 'Bronze' });
        } catch (error) {
            console.error('Error adding customer:', error);
        }
    };



    return (<>
        <NavigationBar />
        <div className="customers-page">
            <h1>Customers</h1>
            <div className="customer-cards">
                {customers.map(customer => (
                    <div key={customer.id} className="customer-card">
                        <h2>{customer.firstName} {customer.lastName}</h2>
                        <p>Address: {customer.address}</p>
                        <p>Email: {customer.email}</p>
                        <p>State: {customer.state}</p>
                        <p>Selected Plan: {customer.plan}</p>
                    </div>
                ))}
            </div>
            <div className="add-customer-form">
                <h2>Add Customer</h2>
                <input type="text" name="firstName" placeholder="First Name" value={newCustomer.firstName} onChange={handleChange} />
                <input type="text" name="lastName" placeholder="Last Name" value={newCustomer.lastName} onChange={handleChange} />
                <input type="text" name="address" placeholder="Address" value={newCustomer.address} onChange={handleChange} />
                <input type="email" name="email" placeholder="Email" value={newCustomer.email} onChange={handleChange} />
                <input type="text" name="state" placeholder="State" value={newCustomer.state} onChange={handleChange} />
                <select name="selectedPlan" value={newCustomer.plan} onChange={handleChange}>
                    <option value="Gold">Gold</option>
                    <option value="Silver">Silver</option>
                    <option value="Bronze">Bronze</option>
                </select>
                <button onClick={handleAddCustomer}>Add Customer</button>
            </div>
        </div>

    </>);
}

export default CustomerHome;