"use client"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { postCostCentre } from "@/models/centro-de-costo"
import { useRouter } from "next/navigation"


const FormSchema = z.object({
    name: z.string().optional(),
    employee_id: z.string().nullable().transform(value => {
        if (value === null) {
            return null;
        } else {
            const parsedValue = parseInt(value);
            return isNaN(parsedValue) ? null : parsedValue;
        }
    })
});


// ! FALTA CORREGIR EL FORMULARIO PARA QUE SE PUEDA CREAR UN CENTRO DE COSTO.

const CreateCC = ({ employees, operations, setCreate }) => {


    const router = useRouter();

    const form = useForm({
        resolver: zodResolver(FormSchema),
    });

    const onSubmit = async (costCentre) => {

        try {
            await postCostCentre(costCentre)
            setCreate(false);
            router.refresh();

        } catch (error) {
            console.error('Error al crear el Centro de costo:', error);
        }


    };

    const capitanes = employees.filter(employee => employee.type === "capitan");

    const cancelCreateCC = () => {
        setCreate(false);

    }

    return (

        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-4/5">
                    <div className="flex justify-end gap-3">
                        <Button onClick={cancelCreateCC} type="submit" variant="destructive" className="mb-2 uppercase text-xs">Cancelar</Button>
                        <Button type="submit" variant="blue" className="mb-2 uppercase text-xs">Guardar</Button>
                    </div>
                    <Card className="w-[300px] h-[180px] min-w-[300px] min-h[180px] shadow-sm rounded-xl bg-[#404040]">
                        <CardHeader className="text-white font-bold relative">
                            <CardTitle>
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input
                                                    placeholder="Nombre" {...field} value={field.value || ''}
                                                    className="my-5 h-7 text-muted-foreground"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <p className="absolute top-3 right-4 text-lg">SERPORT</p>
                            </CardTitle>
                            <CardDescription className="flex flex-col items-start font-normal">
                                <FormField
                                    control={form.control}
                                    name="employee_id"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <SelectTrigger className="w-[180px] h-4">
                                                        <SelectValue placeholder="Capitán" {...field} value={field.value || ''} />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value={null}>Selecionar....</SelectItem>
                                                        {
                                                            capitanes.map((capitan) => (
                                                                <SelectItem key={capitan.id} value={capitan.id.toString()}>{capitan.name}</SelectItem>
                                                            ))
                                                        }
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </CardDescription>
                        </CardHeader>
                    </Card>
                </form>
            </Form>

        </>

    )
}

export default CreateCC;