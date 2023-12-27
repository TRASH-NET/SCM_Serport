'use client'

import SystemsList from "./_components/SystemsList";
import SystemComponent from "./_components/SystemComponent";
import SystemComponentMaintenanceRoutes from "./_components/SystemComponentMaintenanceRoutes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useCostCentre } from "@/context/CostCentreContext";
import CreateSystem from "./_components/CreateSystem";

const SystemsContainer = ({ costCentreSystems, cc_id }) => {

    const { systems, setSystems, component, setComponent } = useCostCentre();
    const [creating, setCreating] = useState(false);
    const handleCreateSystem = () => {
        setCreating(!creating);
    }

    return (
        <div className='sistemas'>
            <div className='sistemas_lista rounded-lg py-4 px-3 overflow-scroll scrollbar'>
                <div className="flex items-center justify-center">
                    <h2 className='text-center font-bold text-[#6B6F7B] py-3 inline-block pl-10'>
                        <p>
                            Sistemas
                            <span className=" rounded-full w-8 h-8 bg-[#6B6F7B] ml-10">
                                <FontAwesomeIcon onClick={handleCreateSystem} icon={faPlus} style={{ color: "white" }} className="w-5 cursor-pointer" />
                            </span>
                        </p>
                    </h2>
                </div>
                {
                    creating && (
                        <CreateSystem
                            creating={creating}
                            setCreating={setCreating}
                            handleCreateSystem={handleCreateSystem}
                            cc_id={cc_id}
                        />
                    )
                }

                <SystemsList
                    costCentreSystems={costCentreSystems}
                    setComponent={setComponent}
                />

            </div>
            <div className='sistemas_componentes overflow-hidden rounded-lg py-3 px-4'>
                <h3 className='text-left text-xl font-bold mb-8'>
                    {component.name ? component.name : 'Componente'}
                </h3>
                <SystemComponent
                    component={component}
                />
            </div>
            <div className='sistemas_rutas rounded-lg overflow-scroll scrollbar'>
                <h3 className='text-left text-xl font-bold py-3 px-4'>Rutinas de mantenimiento</h3>
                <SystemComponentMaintenanceRoutes
                    component={component}
                />
            </div>
        </div>
    )
}

export default SystemsContainer;