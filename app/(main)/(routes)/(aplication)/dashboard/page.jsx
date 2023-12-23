import React from 'react'

const Dashboard = () => {
    return (
        <>
            <h2 className=' text-lg font-semibold uppercase ml-1 mb-6'>Dashboard</h2>
            <div className='flex items-center justify-center gap-[80px] '>
                <div className='w-[500px] h-[380px] border border-gray-800 rounded-lg p-6'>
                    <h3 className='font-bold text-xl text-center'>Rutinas de mantenimiento ultimo mes</h3>
                </div>
                <div className='w-[500px] h-[380px] border border-gray-800 rounded-lg p-6'>
                    <h3 className='font-bold text-xl text-center'>Rutinas de mantenimiento correctivas vs preventivas</h3>
                </div>
            </div>
        </>

    )
}

export default Dashboard