import { Table, TableBody, TableCell, TableHeader, TableRow } from '@/components/ui/table'
import { cn } from '@/lib/utils'
import { faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { flexRender } from '@tanstack/react-table'

const TableComponent = ({ table }) => {

    return (
        <Table className="w-full ">
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
    )
}

export default TableComponent