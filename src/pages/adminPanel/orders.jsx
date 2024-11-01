import React, {useEffect, useState} from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import SearchBar from "./SearchBar";


const CustomerService = {
    getCustomersMedium() {
        return Promise.resolve([
            {
                id: 1000,
                name: 'James Butt',
                country: {
                    name: 'Algeria',
                    code: 'dz'
                },
                company: 'Benton, John B Jr',
                date: '2015-09-13',
                status: 'delivered',
                verified: true,
                activity: 17,
                representative: {
                    name: 'Ioni Bowcher',
                    image: 'ionibowcher.png'
                },
                balance: 70663
            },
            {
                id: 1001,
                name: 'James Butt',
                country: {
                    name: 'Algeria',
                    code: 'dz'
                },
                company: 'Benton, John B Jr',
                date: '2015-09-13',
                status: 'canceled',
                verified: true,
                activity: 17,
                representative: {
                    name: 'Ioni Bowcher',
                    image: 'ionibowcher.png'
                },
                balance: 70663
            },

            {
                id: 1002,
                name: 'James Butt',
                country: {
                    name: 'Algeria',
                    code: 'dz'
                },
                company: 'Benton, John B Jr',
                date: '2015-09-13',
                status: 'on delivery',
                verified: true,
                activity: 17,
                representative: {
                    name: 'Ioni Bowcher',
                    image: 'ionibowcher.png'
                },
                balance: 70663
            },

            {
                id: 1003,
                name: 'James Butt',
                country: {
                    name: 'Algeria',
                    code: 'dz'
                },
                company: 'Benton, John B Jr',
                date: '2015-09-13',
                status: 'unqualified',
                verified: true,
                activity: 17,
                representative: {
                    name: 'Ioni Bowcher',
                    image: 'ionibowcher.png'
                },
                balance: 70663
            },
            {
                id: 1004,
                name: 'James Butt',
                country: {
                    name: 'Algeria',
                    code: 'dz'
                },
                company: 'Benton, John B Jr',
                date: '2015-09-13',
                status: 'unqualified',
                verified: true,
                activity: 17,
                representative: {
                    name: 'Ioni Bowcher',
                    image: 'ionibowcher.png'
                },
                balance: 70663
            },
            {
                id: 1005,
                name: 'Nurbek Butt',
                country: {
                    name: 'Algeria',
                    code: 'dz'
                },
                company: 'Benton, John B Jr',
                date: '2015-09-13',
                status: 'unqualified',
                verified: true,
                activity: 17,
                representative: {
                    name: 'Ioni Bowcher',
                    image: 'ionibowcher.png'
                },
                balance: 70663
            },
            {
                id: 1006,
                name: 'James Butt',
                country: {
                    name: 'Namangan',
                    code: 'dz'
                },
                company: 'Benton, John B Jr',
                date: '2015-09-13',
                status: 'unqualified',
                verified: true,
                activity: 17,
                representative: {
                    name: 'Ioni Bowcher',
                    image: 'ionibowcher.png'
                },
                balance: 70663
            },
            {
                id: 1007,
                name: 'James Butt',
                country: {
                    name: 'Algeria',
                    code: 'dz'
                },
                company: 'Benton, John B Jr',
                date: '2015-09-13',
                status: 'unqualified',
                verified: true,
                activity: 17,
                representative: {
                    name: 'Ioni Bowcher',
                    image: 'ionibowcher.png'
                },
                balance: 70663
            },
            {
                id: 1008,
                name: 'James Butt',
                country: {
                    name: 'Algeria',
                    code: 'dz'
                },
                company: 'Benton, John B Jr',
                date: '2015-09-13',
                status: 'unqualified',
                verified: true,
                activity: 17,
                representative: {
                    name: 'Ioni Bowcher',
                    image: 'ionibowcher.png'
                },
                balance: 70663
            },
            {
                id: 1009,
                name: 'James Butt',
                country: {
                    name: 'Algeria',
                    code: 'dz'
                },
                company: 'Benton, John B Jr',
                date: '2015-09-13',
                status: 'unqualified',
                verified: true,
                activity: 17,
                representative: {
                    name: 'Ioni Bowcher',
                    image: 'ionibowcher.png'
                },
                balance: 70663
            },
            {
                id: 1010,
                name: 'James Butt',
                country: {
                    name: 'Algeria',
                    code: 'dz'
                },
                company: 'Benton, John B Jr',
                date: '2015-09-13',
                status: 'unqualified',
                verified: true,
                activity: 17,
                representative: {
                    name: 'Ioni Bowcher',
                    image: 'ionibowcher.png'
                },
                balance: 70663
            },
            {
                id: 1011,
                name: 'James Butt',
                country: {
                    name: 'Algeria',
                    code: 'dz'
                },
                company: 'Benton, John B Jr',
                date: '2015-09-13',
                status: 'unqualified',
                verified: true,
                activity: 17,
                representative: {
                    name: 'Ioni Bowcher',
                    image: 'ionibowcher.png'
                },
                balance: 70663
            },
            {
                id: 1012,
                name: 'James Butt',
                country: {
                    name: 'Algeria',
                    code: 'dz'
                },
                company: 'Benton, John B Jr',
                date: '2015-09-13',
                status: 'unqualified',
                verified: true,
                activity: 17,
                representative: {
                    name: 'Ioni Bowcher',
                    image: 'ionibowcher.png'
                },
                balance: 70663
            },
            {
                id: 1013,
                name: 'James Butt',
                country: {
                    name: 'Algeria',
                    code: 'dz'
                },
                company: 'Benton, John B Jr',
                date: '2015-09-13',
                status: 'unqualified',
                verified: true,
                activity: 17,
                representative: {
                    name: 'Ioni Bowcher',
                    image: 'ionibowcher.png'
                },
                balance: 70663
            },

        ]);
    }
};


export default function OrdersPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [customers, setCustomers] = useState([]);

    const filteredOrders = customers.filter((customer) =>
        customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.country.name.toLowerCase().includes(searchTerm.toLowerCase())
    );


    useEffect(() => {
        CustomerService.getCustomersMedium().then((data) => setCustomers(data));
    }, []);

    const statusBodyTemplate = (rowData) => {
        let statusStyle = {};
        let statusText = '';

        switch (rowData.status) {
            case 'on delivery':
                statusStyle = {backgroundColor: '#ADD8E6', color: '#000'}; // Light blue
                statusText = 'On Delivery';
                break;
            case 'delivered':
                statusStyle = {backgroundColor: '#90EE90', color: '#000'}; // Light green
                statusText = 'Delivered';
                break;
            case 'canceled':
                statusStyle = {backgroundColor: '#FFCCCB', color: '#000'}; // Light red
                statusText = 'Canceled';
                break;
            default:
                statusStyle = {backgroundColor: '#FFFFFF', color: '#000'}; // Default white
                statusText = 'Unknown';
        }

        return (
            <div style={{padding: '10px', borderRadius: '5px', ...statusStyle}}>
                {statusText}
            </div>
        );
    };

    return (
        <div>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>

            <div style={{width: '80%', marginLeft: '20%'}} className="card">
                <DataTable style={{fontSize: '13px'}} value={filteredOrders} paginator rows={5}
                           rowsPerPageOptions={[5, 10, 25, 50]}
                           tableStyle={{minWidth: '50rem'}}>
                    <Column field="id" header="Order ID" style={{width: '25%'}}></Column>
                    <Column field="name" header="Full name" style={{width: '25%'}}></Column>
                    <Column field="date" header="Date" style={{width: '25%'}}></Column>
                    <Column field="country.name" header="Address" style={{width: '25%'}}></Column>
                    <Column field="balance" header="Amount" style={{width: '25%'}}></Column>
                    <Column body={statusBodyTemplate} field="status" header="Order status"
                            style={{width: '25%'}}></Column>
                </DataTable>
            </div>
        </div>
    );
}
        