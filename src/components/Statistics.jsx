import React from 'react';
import { CartesianGrid, Scatter, ScatterChart, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const marksArray = [
        {
            assignmentNumber: 'Assignment 1',
            assignmentMarks: 60,
        },
        {
            assignmentNumber: 'Assignment 2',
            assignmentMarks: 60,
        },
        {
            assignmentNumber: 'Assignment 3',
            assignmentMarks: 60,
        },
        {
            assignmentNumber: 'Assignment 4',
            assignmentMarks: 60,
        },
        {
            assignmentNumber: 'Assignment 5',
            assignmentMarks: 60,
        },
        {
            assignmentNumber: 'Assignment 6',
            assignmentMarks: 60,
        },
        {
            assignmentNumber: 'Assignment 7',
            assignmentMarks: 60,
        },
        {
            assignmentNumber: 'Assignment 8',
            assignmentMarks: 60,
        }
    ]
    return (
        <div className='mx-auto px-12 flex flex-col justify-center items-center py-24'>
            <h2 className='text-3xl font-bold text-center my-5'>Assignments Marks Scatter Chart</h2>
            <ScatterChart
                width={1000}
                height={500}
                data={marksArray}
                className='my-5'
            >
                <CartesianGrid></CartesianGrid>
                <Scatter data={marksArray} fill="#8884d8"></Scatter>
                {/* <Scatter dataKey="assignmentNumber"></Scatter>
                <Scatter dataKey="assignmentMarks"></Scatter> */}
                <XAxis dataKey="assignmentNumber"/>
                <YAxis dataKey="assignmentMarks" unit=' marks'/>
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                
            </ScatterChart>
        </div>
    );
};

export default Statistics;