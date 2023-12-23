import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table'

const Historial = () => {
    return (
        <>
            <h3 className='text-left text-xl font-bold text-[#000] py-4 px-2'>Listado de rutinas de mantenimiento</h3>

            <div className='border border-gray-400 h-3/4 rounded-lg'>
                <Table className="w-full">
                    <TableHeader>
                        <TableRow>
                            <TableHead>Orden de<span className='block'>servicio</span></TableHead>
                            <TableHead>Nombre</TableHead>
                            <TableHead>Tipo</TableHead>
                            <TableHead>Responsable</TableHead>
                            <TableHead>Fecha de<span className='block'>ejecucion</span></TableHead>
                            <TableHead>Componente</TableHead>
                            <TableHead>Sistema</TableHead>
                            <TableHead>Estado</TableHead>
                            <TableHead>Observacion</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>

                    </TableBody>
                </Table>
            </div>

        </>
    )
}

export default Historial