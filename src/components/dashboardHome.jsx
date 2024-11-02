import React, {useEffect, useState} from 'react';
import {Card} from 'primereact/card';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import {SparkLineChart} from '@mui/x-charts/SparkLineChart';
import {Button} from 'primereact/button';
import {Carousel} from 'primereact/carousel';
import {Tag} from 'primereact/tag';
import Map from '../pages/adminPanel/Geograpic map/main';

const settings = {
    height: 100,
    showTooltip: true,
    showHighlight: true,
};

const smallValues = [10, 2, 3, 34, 6, 45, 17, 19, 15, 16, 28, 27, 13, 14, 23, 21, 25, 16, 18, 14, 15, 23, 34, 45, 23, 30, 20, 12];


export default function DashboardHome() {
    const [products, setProducts] = useState([]);
    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const ProductService = {
        getProductsSmall() {
            return [
                {
                    id: '1000',
                    code: 'f230fh0g3',
                    name: 'Bamboo Watch',
                    description: 'Product Description',
                    image: 'bamboo-watch.jpg',
                    price: 65,
                    category: 'Accessories',
                    quantity: 24,
                    inventoryStatus: 'INSTOCK',
                    rating: 5
                },
                {
                    id: '1002',
                    code: 'f230fh0g3',
                    name: 'Bamboo Watch',
                    description: 'Product Description',
                    image: 'bamboo-watch.jpg',
                    price: 65,
                    category: 'Accessories',
                    quantity: 24,
                    inventoryStatus: 'INSTOCK',
                    rating: 5
                },
                {
                    id: '1003',
                    code: 'f230fh0g3',
                    name: 'Bamboo Watch',
                    description: 'Product Description',
                    image: 'bamboo-watch.jpg',
                    price: 65,
                    category: 'Accessories',
                    quantity: 24,
                    inventoryStatus: 'INSTOCK',
                    rating: 5
                },
                {
                    id: '1004',
                    code: 'f230fh0g3',
                    name: 'Bamboo Watch',
                    description: 'Product Description',
                    image: 'bamboo-watch.jpg',
                    price: 65,
                    category: 'Accessories',
                    quantity: 24,
                    inventoryStatus: 'INSTOCK',
                    rating: 5
                },
            ];
        }
    };


    const getSeverity = (product) => {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    };

    useEffect(() => {
        const data = ProductService.getProductsSmall();
        setProducts(data.slice(0, 9));
    }, []);

    const productTemplate = (product) => {
        return (
            <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
                <div className="mb-3">
                    <img src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`}
                         alt={product.name}
                         className="w-6 shadow-2"
                         style={{width: "130px", marginLeft: '40px'}}
                    />

                </div>
                <div>
                    <h4 className="mb-1">{product.name}</h4>
                    <h6 className="mt-0 mb-3">${product.price}</h6>
                    <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag>
                    <div style={{marginLeft: '70px'}} className="mt-5 flex flex-wrap gap-2 justify-content-center">
                        <Button style={{marginTop: '2px'}} icon="pi pi-search" className="p-button p-button-rounded"/>
                        <Button icon="pi pi-star-fill" className="p-button-success p-button-rounded"/>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="card">

            <div style={{display: "flex"}}>
                <Card title="Orders" style={{width: '300px', height: '160px', marginLeft: '10%', borderRadius: '10px'}}>
                    <div style={{display: 'flex', flexDirection: 'row', marginTop: '-10px'}}>
                        <p style={{fontSize: '20px'}}>35k $</p>
                        <p style={{color: 'green', fontSize: '15px', marginLeft: '55%', marginTop: '6px'}}>
                            <i style={{fontSize: '12px', paddingRight: '2px'}} className='pi pi-arrow-up'></i>
                            25%</p>
                    </div>

                    <Stack
                        sx={{width: '70%', marginLeft: 'auto', marginRight: 'auto', marginTop: '-40px'}}>
                        <Stack sx={{width: '70%'}} direction="row" spacing={2}>
                            <Box sx={{flexGrow: 1}}>
                                <SparkLineChart
                                    data={smallValues}
                                    yAxis={{
                                        min: 0,
                                        max: 100,
                                    }}
                                    colors={['red']}
                                    {...settings}
                                />
                            </Box>
                        </Stack>
                    </Stack>

                </Card>

                <Card title="Orders" style={{width: '300px', height: '160px', marginLeft: '2%', borderRadius: '10px'}}>
                    <div style={{display: 'flex', flexDirection: 'row', marginTop: '-10px'}}>
                        <p style={{fontSize: '20px'}}>35k $</p>
                        <p style={{color: 'green', fontSize: '15px', marginLeft: '55%', marginTop: '6px'}}>
                            <i style={{fontSize: '12px', paddingRight: '2px'}} className='pi pi-arrow-up'></i>
                            25%</p>
                    </div>

                    <Stack
                        sx={{width: '70%', marginLeft: 'auto', marginRight: 'auto', marginTop: '-40px'}}>
                        <Stack sx={{width: '70%'}} direction="row" spacing={2}>
                            <Box sx={{flexGrow: 1}}>
                                <SparkLineChart
                                    data={smallValues}
                                    yAxis={{
                                        min: 0,
                                        max: 100,
                                    }}
                                    colors={['red']}
                                    {...settings}
                                />
                            </Box>
                        </Stack>
                    </Stack>

                </Card>

                <Card title="Profit" style={{width: '300px', height: '160px', marginLeft: '2%', borderRadius: '10px'}}>
                    <div style={{display: 'flex', flexDirection: 'row', marginTop: '-10px'}}>
                        <p style={{fontSize: '20px'}}>350k $</p>
                        <p style={{color: 'green', fontSize: '15px', marginLeft: '55%', marginTop: '6px'}}>
                            <i style={{fontSize: '12px', paddingRight: '2px'}} className='pi pi-arrow-up'></i>
                            45%</p>
                    </div>

                    <Stack
                        sx={{width: '70%', marginLeft: 'auto', marginRight: 'auto', marginTop: '-40px'}}>
                        <Stack sx={{width: '70%'}} direction="row" spacing={2}>
                            <Box sx={{flexGrow: 1}}>
                                <SparkLineChart
                                    data={smallValues}
                                    yAxis={{
                                        min: 0,
                                        max: 100,
                                    }}
                                    colors={['green']}
                                    {...settings}
                                />
                            </Box>
                        </Stack>
                    </Stack>

                </Card>

            </div>

            <div style={{display: 'flex', flexDirection: 'row', marginTop: '-10px'}}>
                <div style={{width: '50%', marginLeft: '12%'}} className="card">
                    <h1 style={{marginTop: '30px', marginLeft: '220px', fontSize: '30px'}}>Products</h1>
                    <Carousel value={products} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions}
                              className="custom-carousel" circular
                              autoplayInterval={3000} itemTemplate={productTemplate}/>

                </div>
                <div style={{width: '40%', marginLeft: '2%'}} className="card">
                    <h1 style={{marginTop: '30px', marginLeft: '130px', fontSize: '30px'}}>Canceled products</h1>
                    <Carousel value={products} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions}
                              className="custom-carousel" circular
                              autoplayInterval={3000} itemTemplate={productTemplate}/>

                </div>
            </div>
            <div style={{marginLeft: '200px'}}>
                <Map/>
            </div>
        </div>
    )
}
