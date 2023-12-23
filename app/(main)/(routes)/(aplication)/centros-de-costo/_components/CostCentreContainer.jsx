'use client'

import Link from "next/link";
import CardCC from "./CardCC";
import AddCC from "./AddCC";
import DataTable from "./table/DataTable";

const CostCentreContainer = ({ operations, costCentres, components, mmrr, employees, month }) => {

    return (
        <>
            <h2 className=' text-lg font-semibold uppercase ml-1 mb-2'>Centros de costo</h2 >
            <div className="flex flex-row items-end gap-4 w-11/12 overflow-x-scroll pb-2 px-2 scrollbar ">
                {costCentres.map((costCentre) => (
                    <Link key={costCentre.id} href={costCentre.id ? `/centros-de-costo/${costCentre.id}/sistemas` : `/centros-de-costo`}>
                        <CardCC
                            costCentre={costCentre}
                            employees={employees}
                        />
                    </Link>
                ))}
                <AddCC
                    employees={employees}
                    operations={operations}
                />
            </div>
            <h3 className="text-lg font-semibold capitalize my-5">Rutinas de mantenimiento -&gt; {month}</h3>
            <div className="pr-6 relative">
                <DataTable
                    mmrr={mmrr}
                    components={components}
                />
            </div>
        </>
    )
}

export default CostCentreContainer;