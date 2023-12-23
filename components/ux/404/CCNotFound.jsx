import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const CCNotFound = () => {
    return (
        <div className='col-span-full row-span-full m-auto flex flex-col gap-2 justify-center items-center'>
            <h2 className='text-xl text-center'>404</h2>
            <p>Este centro de costo no existe</p>
            <Link href="/aplication"><Button>Volver a la aplicacion</Button></Link>
        </div>
    )
}

export default CCNotFound