import { getCostCentre } from '@/models/centro-de-costo';

import SystemsContainer from './SystemsContainer';



const Sistemas = async ({ params }) => {

    const { cc_id } = params;
    const costCentreInfo = await getCostCentre(cc_id);
    const costCentreSystems = costCentreInfo.systems;

    return (
        <SystemsContainer
            costCentreSystems={costCentreSystems}
            cc_id={cc_id}
        />
    )
}

export default Sistemas