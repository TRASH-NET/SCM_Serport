import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { deletesystem } from "@/models/systems";
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from "next/navigation";

const SystemsList = ({ filteredSystems, setComponent }) => {

    const router = useRouter();

    const handleDelete = async (system) => {
        try {
            await deletesystem(system.id);
            router.refresh();
        } catch (error) {
            console.log(error);
        }
    }

    const handleComponent = (component) => (
        setComponent(component)
    )

    return (
        <div>
            {filteredSystems.map((system) => (
                <div className="flex items-start justify-start" key={system.id}>
                    <div className="pt-3 cursor-pointer">
                        <AlertDialog>
                            <AlertDialogTrigger>
                                <FontAwesomeIcon icon={faTrashCan} style={{ color: "#FF6D6D" }} />
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>¿ Estas seguro que deseas eliminar el sistema {system.name} ?</AlertDialogTitle>
                                    <AlertDialogDescription>
                                        Esta accion no podra ser revertida y se perderan todos los datos asociados a este sistema.
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                                    <AlertDialogAction onClick={() => handleDelete(system)}>Eliminar</AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>


                    </div>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                <h3 className="text-sm ml-3 text-[#313A4E]">{system.name}</h3>
                            </AccordionTrigger>
                            <AccordionContent className="overflow-scroll scrollbar">
                                <ul className="px-4">
                                    <div className="flex items-start justify-start">
                                        <span className="text-left text-xs font-bold py-4 px-2">
                                            N°
                                        </span>
                                        <h4 className="text-left text-xs font-bold py-4 px-2">
                                            Componente
                                        </h4>
                                    </div>
                                    <div className="flex items-start justify-start flex-col">
                                        {system.components.map((component, index) => (
                                            <div className="flex items-start justify-start gap-2" key={component.id}>
                                                <p className="text-left text-xs font-semibold py-4 px-2" >
                                                    {index + 1}
                                                </p>
                                                <li onClick={() => handleComponent(component)} className="text-left text-xs font-semibold  py-4 px-2 cursor-pointer">
                                                    {component.name}
                                                </li>
                                            </div>
                                        ))}
                                    </div>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>

            ))}
        </div>
    )
}

export default SystemsList