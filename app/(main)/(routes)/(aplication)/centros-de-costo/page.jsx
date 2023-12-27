
import { getCostCentres } from "@/models/centro-de-costo"
import { getEmployees } from "@/models/employees";
import { getOperations } from "@/models/operations";
import { getCurrentMonth } from '@/helpers/dates'
import { getMaintenanceRouteToDoInMonth, getMaintenanceRoutes } from "@/models/rutas-de-mantenimiento";
import { getComponents } from "@/models/components";
import CostCentreContainer from "./_components/CostCentreContainer";



const CentrosDeCosto = async () => {

    const operations = await getOperations();
    const costCentres = await getCostCentres();
    const components = await getComponents();
    const mmrrInMonth = await getMaintenanceRouteToDoInMonth(); //? mmrrInMonth = rutinas de mantenimiento en el mes
    const employees = await getEmployees();


    let month = getCurrentMonth();

    return (
        <>
            <CostCentreContainer
                operations={operations}
                costCentres={costCentres}
                components={components}
                mmrrInMonth={mmrrInMonth}
                employees={employees}
                month={month}
            />
        </>
    )
}

export default CentrosDeCosto   