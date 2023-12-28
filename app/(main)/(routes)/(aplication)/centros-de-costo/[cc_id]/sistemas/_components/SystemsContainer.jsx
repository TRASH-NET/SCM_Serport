'use client'

import SystemsList from "./SystemsList";
import SystemComponent from "./SystemComponent";
import SystemComponentMaintenanceRoutes from "./SystemComponentMaintenanceRoutes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useCostCentre } from "@/context/CostCentreContext";
import CreateSystem from "./CreateSystem";
import { Input } from "@/components/ui/input";

const SystemsContainer = ({ costCentreSystems, cc_id }) => {

    const { systems, setSystems, component, setComponent } = useCostCentre();

    const [creating, setCreating] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const handleCreateSystem = () => {
        setCreating(!creating);
    }

    const filteredSystems = costCentreSystems.filter(system =>
        system.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <div className="my-2 text-right relative">
                <Input
                    type="text"
                    placeholder="Buscar..."
                    className="h-9 px-6 w-[180px] min-auto:"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <FontAwesomeIcon icon={faSearch} className="top-[10px] text-muted-foreground left-1 absolute w-4" />
            </div>
            <div className='sistemas'>

                <div className='sistemas_lista rounded-lg py-4 px-3 overflow-y-scroll scrollbar'>
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
                        filteredSystems={filteredSystems}
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
                <div className='sistemas_rutas rounded-lg overflow-y-scroll scrollbar'>
                    <h3 className='text-left text-xl font-bold py-3 px-4'>Rutinas de mantenimiento</h3>
                    <SystemComponentMaintenanceRoutes
                        component={component}
                    />
                </div>
            </div>

        </>

    )
}

export default SystemsContainer;