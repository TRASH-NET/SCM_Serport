import React from 'react'

const PlanDeMantenimiento = () => {
    return (
        <div className='sistemas'>
            <div className='sistemas_lista rounded-lg py-4 px-2'>
                <h2 className='text-center font-bold text-[#6B6F7B] pb-2 border-b border-gray-400'>Rutinas de mantenimiento</h2>
            </div>
            <div className='plan_mantenimiento rounded-lg'>
                <h3 className='text-left text-xl font-bold text-[#000] py-4 px-2'>
                    Rutina
                </h3>
            </div>
            <div className='algo rounded-lg flex flex-row gap-4'>
                <div className='border border-[#2e2e2e] w-2/5 rounded-lg'>
                    <h3 className='text-left text-xl font-bold text-[#000] py-4 px-2'>
                        Insumos
                    </h3>
                </div>
                <div className='border border-[#2e2e2e] w-3/5 rounded-lg'>
                    <h3 className='text-left text-xl font-bold text-[#000] py-4 px-2'>
                        Actividades
                    </h3>
                </div>

            </div>
        </div>
    )
}

export default PlanDeMantenimiento