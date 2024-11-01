import {Outlet, useLocation} from 'react-router-dom';
import MenuBar from "./menuBar";
import React, {useEffect, useState} from 'react';
import './menuBar.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {ClipLoader} from 'react-spinners';
import DashboardHome from '../../components/dashboardHome';


export default function Home() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});

    useEffect(() => {
        setTimeout(() => {
            setData('Loaded data');
            setLoading(false);
        }, 2000);
    }, []);

    // First and second chart setup (same as your previous code)
    const location = useLocation();

    const isDashboard = location.pathname === '/dashboard';

    return (
        <div className="dashboard-layout">
            <MenuBar className="menubar"/>

            <div className="dashboard-content">

                {loading ? (
                    <div style={{marginLeft: '50%', marginTop: '250px'}} className="spinner">
                        <ClipLoader size={50} color="#123abc" loading={loading}/>
                    </div>
                ) : (
                    <div className="content">
                        {isDashboard && <DashboardHome/>}
                        <Outlet/>
                    </div>
                )}
            </div>
        </div>
    );
}
