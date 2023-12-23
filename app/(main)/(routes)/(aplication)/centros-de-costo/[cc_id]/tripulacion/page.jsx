import React from 'react'

const Tripulacion = () => {
    return (
        <div>
            <h3 className=' text-right px-[200px] font-bold'>Total Tripulacion: 1</h3>
            <div className='w-[200px] h-[300px]  shadow-md rounded-lg'>
                <div className='foto_tripulacion w-full h-[150px] rounded-t-lg'>
                </div>
                <h4 className='px-4 py-2 font-bold text-sm'>Nombre Capitan</h4>
                <p className='px-4 text-sm'>Cargo</p>
                <p className='px-4 text-sm'>Centro de costo</p>
                <p className='px-4 text-sm'>Telefono</p>
            </div>
        </div>
    )
}

export default Tripulacion