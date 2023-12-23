'use client'

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { usePathname } from 'next/navigation';


const CostCentreHeader = ({ costCentre }) => {

    const pathname = usePathname();
    const navLinks = [
        {
            name: 'Sistemas',
            href: `/centros-de-costo/${costCentre.id}/sistemas`,
        },
        {
            name: 'Control Horas',
            href: `/centros-de-costo/${costCentre.id}/control-horas`,
        },
        {
            name: 'Plan de mantenimiento',
            href: `/centros-de-costo/${costCentre.id}/plan-de-mantenimiento`,
        },
        {
            name: 'Historial',
            href: `/centros-de-costo/${costCentre.id}/historial`,
        },
        {
            name: 'Tripulacion',
            href: `/centros-de-costo/${costCentre.id}/tripulacion`,
        }
    ]


    return (
        <header className='flex flex-col col-span-full row-start-1 row-end-4 min-w-fit mb-4'>
            <div className='flex items-center'>
                <Link href={'/centros-de-costo'} className=' hover:underline hover:text-[#1D4ED8]'>
                    <FontAwesomeIcon icon={faArrowLeft} className='mr-2' />
                </Link>
                <h2 className=' text-lg font-semibold uppercase'>{costCentre.name} - <span>Operacion:</span> </h2>
            </div>

            <nav className='flex text-sm gap-2 mt-5 p-2 hover min-w-fit'>
                {
                    navLinks.map(({ name, href }) => (
                        <Link
                            key={name}
                            href={href}
                            className={pathname === href ? 'navElement-active' : 'navElement'}
                        >
                            <p className='text-base font-semibold'>{name}</p>
                        </Link>
                    ))
                }
            </nav>
        </header>
    )
}

export default CostCentreHeader;