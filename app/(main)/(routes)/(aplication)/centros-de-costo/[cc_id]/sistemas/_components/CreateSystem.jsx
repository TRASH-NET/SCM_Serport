'use client'

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useRouter } from "next/navigation";
import { postSystem } from "@/models/systems";


const FormSchema = z.object({
    name: z.string().min(1, {
        message: "¡ Campo requerido !",
    }).max(30, {
        message: "El nombre del sistema no puede tener mas de 30 caracteres"
    })
});

const CreateSystem = ({ setCreating, handleCreateSystem, cc_id }) => {

    const router = useRouter();

    const form = useForm({
        resolver: zodResolver(FormSchema),
    });


    const onSubmit = async (system) => {

        system.costcentre_id = cc_id;

        try {
            await postSystem(system);
            setCreating(false);
            router.refresh();

        } catch (error) {
            console.error(error)
        }
    }

    return (
        <Form {...form} >
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                <div className="flex items-center justify-center">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        type="text"  {...field}
                                        placeholder="Nombre del sistema"
                                        className="h-6 p-4 my-3 font-semibold text-muted-foreground"
                                        value={field.value ? field.value : ""}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="flex items-center justify-between gap-3">
                        <FontAwesomeIcon icon={faXmark} className="cursor-pointer p-2" onClick={handleCreateSystem} />
                        <button type="submit">
                            <FontAwesomeIcon icon={faCheck} className="cursor-pointer p-2" />
                        </button>
                    </div>
                </div>
            </form>
        </Form>
    )
}

export default CreateSystem