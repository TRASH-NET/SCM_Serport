import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea.jsx"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { useToast } from "@/components/ui/use-toast"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form.jsx"
import { FaRegCheckCircle } from "react-icons/fa"
import { useState } from "react"
import { editMaintenanceRoute } from "@/models/rutas-de-mantenimiento.js"
import { Calendar } from "@/components/ui/calendar.jsx"
import { formatearFecha, formatearFecha3 } from "@/helpers/dates"

const formSchema = z.object({
    observation: z.string().optional()
})


const ModalCloseMaintenanceRoute = ({ row }) => {

    const form = useForm({
        resolver: zodResolver(formSchema),
    });

    const [modal, setModal] = useState(false);
    const [date, setDate] = useState(new Date());

    const { toast } = useToast();
    const maintenanceRoute = row.original;


    const handleModal = () => {
        setModal(!modal)
    }

    const handleDeleteMaintenanceRoute = async () => {
        try {
            const maintenanceRouteEdited = { last_intervention_date: null, reprogramed: false, state: 'cancelada', observation: form.getValues('observation') }
            await editMaintenanceRoute(maintenanceRoute.id, maintenanceRouteEdited);
            toast({
                title: <p className="font-semibold">Orden # <span className="font-bold">{maintenanceRoute.order_number ? maintenanceRoute.order_number : 'Sin numero de orden'}</span></p>,
                description: <p className=" italic font-semibold">¡ la orden ha sido cancelada !</p>,
                variant: 'success'
            })
        } catch (error) {
            toast({
                title: 'Error',
                description: <p className="font-semibold">Error al eliminar la orden # <span className="font-bold">{maintenanceRoute.order_number ? maintenanceRoute.order_number : 'Sin numero de orden'}</span></p>,
                variant: 'destructive'
            })
        }
    }
    const handleCloseMaintenanceRoute = async () => {
        try {
            const maintenanceRouteClosed = { last_intervention_date: formatearFecha(date), reprogramed: false, state: 'cerrada', observation: form.getValues('observation') }
            await editMaintenanceRoute(maintenanceRoute.id, maintenanceRouteClosed);
            toast({
                title: <p className="font-semibold">Orden # <span className="font-bold">{maintenanceRoute.order_number ? maintenanceRoute.order_number : 'Sin numero de orden'}</span></p>,
                description: <p className=" italic font-semibold">la orden ha sido cerrada exitosamente</p>,
                variant: 'success'
            })
        } catch (error) {
            toast({
                title: 'Error',
                description: <p className="font-semibold">Error al cerrar la orden # <span className="font-bold">{maintenanceRoute.order_number ? maintenanceRoute.order_number : 'Sin numero de orden '} Por favor intente nuevamente</span></p>,
                variant: 'destructive'
            })
        }
    }

    const handleReprogramMaintenanceRoute = async () => {
        try {
            const maintenanceRouteReprogramed = { next_intervention_date: formatearFecha(date), reprogramed: false, state: 'reprogramada', observation: form.getValues('observation') }
            await editMaintenanceRoute(maintenanceRoute.id, maintenanceRouteReprogramed);
            toast({
                title: <p className="font-semibold">Orden # <span className="font-bold">{maintenanceRoute.order_number ? maintenanceRoute.order_number : 'Sin numero de orden'}</span></p>,
                description: <p className=" italic font-semibold">la orden ha sido reprogramada exitosamente para <span>{formatearFecha3(date)}</span></p>,
                variant: 'success'
            })
        } catch (error) {
            toast({
                title: 'Error',
                description: <p className="font-semibold">Error al reprogramar la orden # <span className="font-bold">{maintenanceRoute.order_number ? maintenanceRoute.order_number : 'Sin numero de orden '} Por favor intente nuevamente</span></p>,
                variant: 'destructive'
            })
        }
    }



    return (

        <>
            <FaRegCheckCircle
                className="mx-auto rounded-full w-4 h-4 cursor-pointer"
                style={{ width: '16px', height: '16px' }}
                onClick={handleModal}
            />
            {modal &&
                <div className="h-screen w-screen top-0 left-0 fixed bg-[black] bg-opacity-40">
                    <div className="flex items-center h-full w-full">
                        <Card className="w-[auto] m-auto z-[999999]">
                            <CardHeader>
                                <CardTitle className="flex items-center justify-between pr-2">
                                    <p>¿Estas Seguro?</p>
                                    <div onClick={handleModal}><FontAwesomeIcon icon={faXmark} className="w-4 cursor-pointer" /></div>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div>
                                    <Form {...form}>
                                        <form className="flex flex-row items-start gap-3">
                                            <div className="grid w-full items-center gap-4">
                                                <p className="mb-6 text-sm">¿Que desea hacer con la orden de servicio # <span className="font-bold">{maintenanceRoute.order_number ? maintenanceRoute.order_number : 'Sin numero de orden'}</span></p>
                                                <div className="flex flex-row items-center gap-3 mb-2">
                                                    <Button onClick={handleDeleteMaintenanceRoute} variant="destructive">Eliminar Orden</Button>
                                                    <Button onClick={handleCloseMaintenanceRoute} variant="green">Cerrar Orden</Button>
                                                    <Button onClick={handleReprogramMaintenanceRoute} variant="secondary">Reprogramar</Button>
                                                </div>
                                                <FormField
                                                    control={form.control}
                                                    name="observation"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel />
                                                            <FormControl>
                                                                <Textarea
                                                                    placeholder="Observaciones..."
                                                                    className="resize-none h-[150px]"
                                                                    {...field}
                                                                    value={field.value || ''}
                                                                />
                                                            </FormControl>
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>
                                            <div className=" self-center">
                                                <Calendar
                                                    mode="single"
                                                    selected={date}
                                                    onSelect={setDate}
                                                    className="rounded-md border"
                                                />
                                            </div>
                                        </form>
                                    </Form>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>}


        </>



    )
}

export default ModalCloseMaintenanceRoute;