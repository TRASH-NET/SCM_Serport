import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


const CardCC = ({ costCentre, employees }) => {

    const { operations } = costCentre;

    const assignBackgroundColor = (id) => {
        const saturation = '100%';
        const maxLightness = 70;
        const lightness = `${Math.min(20 + (id * 4 % 100) * 1, maxLightness)}%`;

        return `hsl(230, ${saturation}, ${lightness})`;
    };

    const getEmployeeName = (employeeId) => {
        const employee = employees.find(employee => employee.id === employeeId);
        return employee ? employee.name : '';
    };

    return (
        <Card style={{ backgroundColor: `${assignBackgroundColor(costCentre.id)}` }} className="w-[300px] h-[180px] min-w-[300px] min-h[180px] shadow-sm rounded-xl">
            <CardHeader className="text-white font-bold relative">
                <CardTitle className="my-4">
                    <span className="uppercase text-lg">{costCentre.name}</span>
                    <span className="absolute top-3 right-4 text-lg">SERPORT</span>
                </CardTitle>
                <CardDescription className="flex flex-col gap-5 items-start text-white font-normal">
                    <span className="font-semibold">Operación: <span className=" font-light">{operations[0]?.name}</span> </span>
                    <span className="font-semibold">Capitán: <span className=" font-light">{getEmployeeName(costCentre.employee_id)}</span></span>
                </CardDescription>
            </CardHeader>
        </Card>
    )
}

export default CardCC;