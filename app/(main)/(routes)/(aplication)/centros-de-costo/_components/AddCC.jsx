'use client'

import { PlusCircle } from "lucide-react";
import { useState } from "react";
import CreateCC from "./CreateCC";


const AddCC = ({ employees, operations }) => {

    const [create, setCreate] = useState(false);

    const createCC = () => {
        setCreate(true);
    }


    return (
        <>
            {create ? (
                <CreateCC
                    employees={employees}
                    operations={operations}
                    setCreate={setCreate}

                />
            ) : (
                <div
                    onClick={createCC}
                    role="button"
                    className="flex flex-col justify-center items-center min-w-[300px] min-h-[180px] border-[2px] border-dashed border-[#6B6F7B] rounded-xl"
                >
                    <PlusCircle style={{ color: "#6B6F7B" }} />
                    <p>Agregar centro de costo</p>
                </div>
            )


            }
        </>


    )
}

export default AddCC;