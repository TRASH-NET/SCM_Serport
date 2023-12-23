'use client'

import { Calendar } from "@/components/ui/calendar"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useState } from "react";


const CalendarOperations = () => {

    const [date, setDate] = useState(new Date());

    return (
        <>
            <div className="flex justify-between items-start">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"

                />
                <div className="border border-gray-400 rounded-lg p-3 h-[600px]">
                    <h2 className="text-xl font-bold text-left ml-2">Resumen</h2>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">Nombre</TableHead>
                                <TableHead>Observaciones</TableHead>
                                <TableHead>Fecha</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>

                        </TableBody>
                    </Table>
                </div>

            </div>

        </>

    )

}

export default CalendarOperations