import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './DashboardUnique.css'; // Updated CSS file name

const DashboardUnique = () => {
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
        document.querySelector('.dashboard-unique #total-patients').textContent = hospitalData.totalPatients;
        document.querySelector('.dashboard-unique #today-appointments').textContent = hospitalData.todayAppointments;
        document.querySelector('.dashboard-unique #available-beds').textContent = hospitalData.availableBeds;
        document.querySelector('.dashboard-unique #staff-on-duty').textContent = hospitalData.staffOnDuty;

        // Destroy existing charts if they exist
        if (demographicsChartRef.current) {
            demographicsChartRef.current.destroy();
        }
        if (utilizationChartRef.current) {
            utilizationChartRef.current.destroy();
        }

        // Initialize Demographics Chart
        const demographicsCtx = document.querySelector('.dashboard-unique #demographics-chart').getContext('2d');
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
        const utilizationCtx = document.querySelector('.dashboard-unique #utilization-chart').getContext('2d');
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
        <div className="dashboard-unique">
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

export default DashboardUnique;
