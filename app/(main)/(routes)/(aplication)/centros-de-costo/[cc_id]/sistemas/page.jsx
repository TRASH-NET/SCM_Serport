import { getCostCentre } from '@/models/centro-de-costo';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';



const Sistemas = async ({ params }) => {

    const { cc_id } = params;
    const costCentreInfo = await getCostCentre(cc_id);
    const costCentreSystems = costCentreInfo.systems;
    console.log(costCentreSystems)
    return (
        <div className='sistemas'>
            <div className='sistemas_lista rounded-lg py-4 px-2'>
                <h2 className='text-center font-bold text-[#6B6F7B]'>Sistemas</h2>
                <div>
                    {costCentreSystems.map((system) => (
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>
                                    <div className='flex items-start justify-center'>
                                        <FontAwesomeIcon icon={faTrashCan} style={{ color: "#e60000", }} />   <h3>{system.name}</h3>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    Yes. It adheres to the WAI-ARIA design pattern.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    ))}
                </div>
            </div>
            <div className='sistemas_componentes rounded-lg'>
                <h3 className='text-left text-xl font-bold text-[#000] py-4 px-2'>
                    Componente
                </h3>
            </div>
            <div className='sistemas_rutas rounded-lg'>
                <h3 className='text-left text-xl font-bold text-[#000] py-4 px-2'>Rutinas de mantenimiento</h3>
            </div>
        </div>
    )
}

export default Sistemas