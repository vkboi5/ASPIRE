import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import  './Dashboard.css'

const Dashboard = () => {
    const demographicsChartRef = useRef(null);
    const utilizationChartRef = useRef(null);

    useEffect(() => {
        // Simulated data
        const hospitalData = {
            totalPatients: 15000,
            todayAppointments: 120,
            availableBeds: 50,
            staffOnDuty: 200
        };

        // Update dashboard numbers
        document.getElementById('total-patients').textContent = hospitalData.totalPatients;
        document.getElementById('today-appointments').textContent = hospitalData.todayAppointments;
        document.getElementById('available-beds').textContent = hospitalData.availableBeds;
        document.getElementById('staff-on-duty').textContent = hospitalData.staffOnDuty;

        // Destroy existing charts if they exist
        if (demographicsChartRef.current) {
            demographicsChartRef.current.destroy();
        }
        if (utilizationChartRef.current) {
            utilizationChartRef.current.destroy();
        }

        // Initialize Demographics Chart
        const demographicsCtx = document.getElementById('demographics-chart').getContext('2d');
        demographicsChartRef.current = new Chart(demographicsCtx, {
            type: 'pie',
            data: {
                labels: ['0-18', '19-35', '36-50', '51+'],
                datasets: [{
                    data: [20, 35, 25, 20],
                    backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0']
                }]
            }
        });

        // Initialize Department Utilization Chart
        const utilizationCtx = document.getElementById('utilization-chart').getContext('2d');
        utilizationChartRef.current = new Chart(utilizationCtx, {
            type: 'bar',
            data: {
                labels: ['Emergency', 'Surgery', 'Pediatrics', 'Cardiology', 'Neurology'],
                datasets: [{
                    label: 'Department Utilization',
                    data: [65, 59, 80, 81, 56],
                    backgroundColor: '#36a2eb'
                }]
            }
        });

        // Cleanup function to destroy charts when component unmounts
        return () => {
            if (demographicsChartRef.current) demographicsChartRef.current.destroy();
            if (utilizationChartRef.current) utilizationChartRef.current.destroy();
        };
    }, []);

    return (
        <div>
            <header>
                <h1>MediCore Hospital Dashboard</h1>
                <nav>
                    <ul>
                        <li><a href="#overview">Overview</a></li>
                        <li><a href="#patient-registration">Patient Registration</a></li>
                        <li><a href="#appointments">Appointments</a></li>
                        <li><a href="#ehr">EHR</a></li>
                        <li><a href="#analytics">Analytics</a></li>
                    </ul>
                </nav>
            </header>

            <main>
                <section id="overview">
                    <h2>Overview</h2>
                    <div className="dashboard-grid">
                        <div className="dashboard-item">
                            <h3>Total Patients</h3>
                            <p className="large-number" id="total-patients">0</p>
                        </div>
                        <div className="dashboard-item">
                            <h3>Today's Appointments</h3>
                            <p className="large-number" id="today-appointments">0</p>
                        </div>
                        <div className="dashboard-item">
                            <h3>Available Beds</h3>
                            <p className="large-number" id="available-beds">0</p>
                        </div>
                        <div className="dashboard-item">
                            <h3>Staff on Duty</h3>
                            <p className="large-number" id="staff-on-duty">0</p>
                        </div>
                    </div>
                </section>

                <section id="analytics">
                    <h2>Analytics</h2>
                    <div className="analytics-grid">
                        <div className="analytics-item">
                            <h3>Patient Demographics</h3>
                            <canvas id="demographics-chart"></canvas>
                        </div>
                        <div className="analytics-item">
                            <h3>Department Utilization</h3>
                            <canvas id="utilization-chart"></canvas>
                        </div>
                    </div>
                </section>
            </main>

            <footer>
                <p>&copy; 2024 MediCore Hospital Management System. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Dashboard;
