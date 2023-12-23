import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table'

import React from 'react'

const ControlHoras = () => {

    return (
        <div className='sistemas'>
            <div className='control_horas rounded-lg px-2 overflow-scroll scrollbar'>
                <div>
                    <div className='w-full h-[200px] border border-[#2e2e2e] rounded-sm mb-4'>
                        <h3 className='text-center font-bold text-[#6B6F7B] mt-2 border-b border-gray-400'>Propulsion</h3>
                    </div>
                    <div className='w-full h-[200px] border border-[#2e2e2e] rounded-sm mb-4'>
                        <h3 className='text-center font-bold text-[#6B6F7B] mt-2 border-b border-gray-400'>Generadores</h3>
                    </div>
                    <div className='w-full h-[200px] border-t border-l border-r border-[#2e2e2e] rounded-sm'>
                        <h3 className='text-center font-bold text-[#6B6F7B] mt-2 border-b border-gray-400'>Emergencia</h3>
                    </div>
                </div>
            </div>
            <div className='sistemas_componentes rounded-lg'>
                <div className='flex justify-start items-center'>
                    <h3 className='text-left text-base font-bold text-[#000] py-4 px-6 mr-[250px]'>
                        Fecha ultimo mantenimiento:
                    </h3>
                    <h3 className='text-left text-base font-bold text-[#000] py-4 px-6'>
                        Fecha proximo mantenimiento:
                    </h3>
                </div>

            </div>
            <div className='sistemas_rutas rounded-lg'>
                <h3 className='text-left text-xl font-bold text-[#000] py-4 px-2'>
                    <Table className="w-full">
                        <TableHeader>
                            <TableRow>
                                <TableHead>Nombre</TableHead>
                                <TableHead>Unidad</TableHead>
                                <TableHead>Frecuencia</TableHead>
                                <TableHead>Observacion</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>

                        </TableBody>
                    </Table>

                </h3>
            </div>
        </div>
    )
}

export default ControlHoras