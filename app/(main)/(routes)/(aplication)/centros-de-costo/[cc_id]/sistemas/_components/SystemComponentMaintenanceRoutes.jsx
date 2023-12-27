import { useEffect, useState } from "react";
import TableComponent from "../../../_components/table/TableComponent"
import { getCoreRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table";
import { formatearFecha2 } from "@/helpers/dates";
import { defaultData } from "@/helpers/defaultData";

const SystemComponentMaintenanceRoutes = ({ component }) => {

    const { maintenances_routes } = component;
    const [data, setData] = useState(maintenances_routes ? maintenances_routes : []);
    const [sorting, setSorting] = useState([]);

    useEffect(() => {
        setData(maintenances_routes ? maintenances_routes : [])
    }, [component])

    const columns = [
        {
            accessorKey: 'creation_date',
            header: () => <span className="block">Fecha creacion</span>,
            cell: info => <span>{formatearFecha2(info.getValue())}</span>
        },
        {
            accessorKey: 'name',
            header: () => <span>Nombre</span>
        },
        {
            accessorKey: 'type',
            header: () => <span>Tipo</span>
        },
        {
            accessorKey: 'frecuency_unity',
            header: () => <span>Unidad</span>
        },
        {
            accessorKey: 'frecuency',
            header: () => <span>Frecuencia</span>
        },
        {
            accessorKey: 'employee_id',
            header: () => <span>Encargado</span>
        },
        {
            accessorKey: 'last_intervention_date',
            header: () => <p>Fecha ultima <span>intervencion</span></p>,
            cell: info => <span>{formatearFecha2(info.getValue())}</span>
        },
        {
            accessorKey: 'next_intervention_date',
            header: () => <p>Fecha proxima <span>intervencion</span></p>,
            cell: info => <span>{formatearFecha2(info.getValue())}</span>

        },
        {
            accessorKey: 'observation',
            header: () => <span>Observacion</span>,
        },

    ]

    const table = useReactTable({
        data,
        columns,
        state: {
            sorting,
        },
        enableRowSelection: true,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        onSortingChange: setSorting
    })


    return (
        <TableComponent
            table={table}
        />
    )
}

export default SystemComponentMaintenanceRoutes