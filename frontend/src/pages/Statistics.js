import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { showLoader } from '../redux-store/loaderSlice';
import { getStatistics } from '../services/StatisticsService';

function Statistics({ setIsTaskPage, setIsEmployeePage }) {

    const [stats, setStats] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        setIsEmployeePage(false);
        setIsTaskPage(false);

        dispatch(showLoader(true));
        const fetchData = async () => {
            setStats(await getStatistics());
        }
        fetchData();
        dispatch(showLoader(false));
    }, []);

    const displayTop5Employees = () => {
        return stats.top5.map((employee, index) => {
            return <p>{index + 1}. {employee._id} with {employee.finishedTasksInLastMonth} tasks done</p>
        })
    }

    return (
        <>
            <h1>Statistics</h1>

            <h3>Top 5 employee with most tasks done in last month</h3>
            {stats && displayTop5Employees()}
            {
                stats ?
                    <>
                        <p>Our company spends {stats.salary.sumSalary} euros per month on employee salaries.</p>
                        <p>The average salary of our employees is {stats.salary.avgSalary} euros, while the highest recorded salary is {stats.salary.maxSalary} euros, the lowest is {stats.salary.minSalary} euros.</p>
                    </>
                    : null
            }
        </>
    )
}

export default Statistics
