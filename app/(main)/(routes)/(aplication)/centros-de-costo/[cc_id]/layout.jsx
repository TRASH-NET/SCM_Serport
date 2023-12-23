import { Open_Sans } from 'next/font/google';
import React from 'react';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { getCostCentre } from '@/models/centro-de-costo';
import CCNotFound from '@/components/ux/404/CCNotFound';
import CostCentreHeader from './_components/CostCentreHeader';

config.autoAddCss = false;

const font = Open_Sans({ subsets: ['latin'] })

export const metadata = {
    title: 'Construction Company',
    description: 'Construction, and proyects managments',
}

const CostCentreLayout = async ({ children, params }) => {

    const { cc_id } = params;
    const costCentre = await getCostCentre(cc_id);

    if (!costCentre.id) {
        return (
            <CCNotFound />
        );
    }
    return (

        <>
            <CostCentreHeader
                costCentre={costCentre}

            />
            {children}
        </>

    )
}

export default CostCentreLayout;
