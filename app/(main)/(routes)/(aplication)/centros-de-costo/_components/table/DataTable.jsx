'use client'
import {
	Table,
	TableBody,
	TableCell,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

import {
	flexRender,
	getCoreRowModel,
	useReactTable,
	getPaginationRowModel,
	getFilteredRowModel,
	getSortedRowModel
} from '@tanstack/react-table';
import { rankItem } from '@tanstack/match-sorter-utils';
import { useState } from 'react';
import { Button } from "@/components/ui/button";

import { FaRegCheckCircle } from "react-icons/fa";
import ModalCloseMaintenanceRoute from "../ModalCloseMaintenanceRoute";
import { formatearFecha2 } from "@/helpers/dates";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { faSearch, faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const tableFilter = (row, columnId, value, addMeta) => {
	const itemRank = rankItem(row.getValue(columnId), value);

	addMeta({ itemRank });

	return itemRank.passed;
}

const DataTable = ({ mmrr, components }) => {


	const [data, setData] = useState(mmrr);
	const [rowSelection, setRowSelection] = useState({});
	const [globalFilter, setGlobalFilter] = useState('');
	const [sorting, setSorting] = useState([]);

	const getComponentName = (componentId) => {
		const employee = components.find(component => component.id === componentId);
		return employee ? employee.name : '';
	};

	const columns = [
		{
			accessorKey: 'id',
			header: () => <span>Cierre</span>,
			cell: ({ row }) => (
				<ModalCloseMaintenanceRoute
					row={row}
					setData={setData}
				/>
			),
			enableSorting: false,
		},
		{
			accessorKey: 'order_number',
			header: () => <span>Orden</span>
		},
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
			accessorKey: 'centro de costo',
			header: () => <p>Centro de <span>Costo</span></p>
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
			accessorKey: 'component_id',
			header: () => <span>Componente</span>,
			cell: info => <span>{getComponentName(info.getValue())}</span>
		},
		{
			accessorKey: 'garage_id',
			header: () => <span>Encargado</span>

		},
		{
			accessorKey: 'state',
			header: () => <span>Estado</span>
		},

	]

	const getStateTable = () => {

		const totalRows = table.getFilteredRowModel().rows.length;
		const pageSize = table.getState().pagination.pageSize;
		const pageIndex = table.getState().pagination.pageIndex;
		const rowsPerPage = table.getRowModel().rows.length;

		const firstIndex = (pageIndex * pageSize) + 1;
		const lastIndex = (pageIndex * pageSize) + rowsPerPage;

		return {
			totalRows,
			firstIndex,
			lastIndex
		}
	}

	const table = useReactTable({
		data,
		columns,
		state: {
			globalFilter,
			sorting,
			rowSelection
		},
		onRowSelectionChange: setRowSelection,
		enableRowSelection: true,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		globalFilterFn: tableFilter,
		getSortedRowModel: getSortedRowModel(),
		onSortingChange: setSorting
	})




	return (
		<>
			<div className="flex items-center justify-between space-x-2 px-2">
				<div className="my-2 text-right relative">
					<Input
						type="text"
						placeholder="Buscar..."
						className="h-9 px-6"
						onChange={e => setGlobalFilter(e.target.value)}
					/>
					<FontAwesomeIcon icon={faSearch} className="top-[10px] text-muted-foreground left-2 absolute w-4" />
				</div>
				<div className="flex items-center justify-between space-x-2 py-2">
					<div className="space-x-2">
						<Button
							variant="outline"
							size="sm"
							onClick={() => table.setPageIndex(0)}
							disabled={!table.getCanPreviousPage()}
						>
							{'<<'}
						</Button>
						<Button
							variant="outline"
							size="sm"
							onClick={() => table.previousPage()}
							disabled={!table.getCanPreviousPage()}
						>
							{'<'}
						</Button>
						<Button
							variant="ghost"
							size="sm"
							className="cursor-default"
						>
							<p>
								<span>{getStateTable().firstIndex}</span> - <span>{getStateTable().lastIndex} </span>
								de {getStateTable().totalRows}
							</p>

						</Button>
						<Button
							variant="outline"
							size="sm"
							onClick={() => table.nextPage()}
							disabled={!table.getCanNextPage()}
						>
							{'>'}
						</Button>
						<Button
							variant="outline"
							size="sm"
							onClick={() => table.setPageIndex(table.getPageCount() - 1)}
							disabled={!table.getCanNextPage()}
						>
							{'>>'}
						</Button>
					</div>
				</div>


			</div>
			<div className='h-1/2 max-h-[320px] overflow-y-scroll border-2 rounded-md border-gray-200 p-2 scrollbar max-w-full'>
				<Table className="w-full">
					<TableHeader>
						{table.getHeaderGroups().map(headerGroup => (
							<TableRow key={headerGroup.id} className="font-bold capitalize text-[12px]">
								{
									headerGroup.headers.map(header => (
										<TableCell key={header.id} className="p-4">
											{
												header.isPlaceholder
													? null
													:
													<div
														className={cn("flex items-center gap-2", header.column.getCanSort() && "cursor-pointer select-none")}
														onClick={header.column.getToggleSortingHandler()}
													>
														{flexRender(
															header.column.columnDef.header,
															header.getContext()
														)}
														{
															{
																asc: <FontAwesomeIcon icon={faSortUp} />,
																desc: <FontAwesomeIcon icon={faSortDown} />
															}[header.column.getIsSorted() ?? null]
														}
													</div>
											}
										</TableCell>
									))
								}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{table.getRowModel().rows.map(row => (
							<TableRow key={row.id}>
								{row.getVisibleCells().map(cell => (
									<TableCell key={cell.id} className="capitalize text-[12px]">
										{
											flexRender(
												cell.column.columnDef.cell,
												cell.getContext()
											)
										}

									</TableCell>
								))}
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div >
		</>

	)
};

export default DataTable;

