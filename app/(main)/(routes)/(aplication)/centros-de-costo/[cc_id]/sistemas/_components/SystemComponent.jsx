import Image from "next/image";

const SystemComponent = ({ component }) => {

    return (

        <>
            {
                Object.keys(component).length > 0 ? (
                    <div className="component text-[#6B6F7B] font-semibold">
                        <ul className="flex flex-col gap-4 items-start text-sm px-4 col-start-1 col-end-3">
                            <li>
                                N° de serie: <span>{component.serial_number}</span>
                            </li>
                            <li>
                                Modelo: <span>{component.model}</span>
                            </li>
                            <li>
                                Marca: <span>{component.brand}</span>
                            </li>
                            <li>
                                Fecha Adq: <span>{component.acquisition_date}</span>
                            </li>
                            <li>
                                Consumo: <span>{component.energy_consumption}</span>
                            </li>
                            <li>
                                Especificaciones: <span>{component.specifications}</span>
                            </li>
                        </ul>
                        <ul className="flex flex-col gap-4 items-start text-sm px-4 col-start-4 col-end-6">
                            <li>
                                Ubicacion: <span>{component.location}</span>
                            </li>
                            <li>
                                Horómetro: <span>N/A</span>
                            </li>
                            <li>
                                Proveedor: <span>{component.provider}</span>
                            </li>
                            <li>
                                Estado: <span>{component.state}</span>
                            </li>
                            <li>
                                Tipo: <span>{component.type}</span>
                            </li>
                        </ul>
                        <div className="col-start-7 col-end-11">
                            <Image
                                className="w-[195px] h-[100px] mx-auto"
                                src={component.img_url ? component.img_url : '/logo2.webp'}
                                width={195}
                                height={104}
                                alt="Logo Serport"
                                priority={true}
                            />
                        </div>
                    </div>
                ) :
                    (
                        ''
                    )

            }
        </>

    )
}

export default SystemComponent