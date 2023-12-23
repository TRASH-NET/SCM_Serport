export const getCostCentres = async () => {
    const respuesta = await fetch(`${process.env.API_URL}/cost_centre/`, { cache: 'no-store' });
    const resultado = await respuesta.json();
    return resultado;
}

export const getCostCentre = async (id) => {
    const respuesta = await fetch(`${process.env.API_URL}/cost_centre/${id}`, { cache: 'no-store' });
    const resultado = await respuesta.json();

    return resultado;
}

export const postCostCentre = async (cost_centre) => {

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cost_centre/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json'
        },
        body: JSON.stringify(cost_centre)
    });

    if (response.status === 200) {

        const newCostCentre = await response.json();

        return newCostCentre;
    } else {

        throw new Error('No se pudo crear el centro de costo');
    }
};

export const editCostCentre = async (id, cost_centre) => {

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cost_centre/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json'
        },
        body: JSON.stringify(cost_centre)
    });

    if (response.status === 200) {

        const CostCentreEdited = await response.json();

        return CostCentreEdited;
    } else {
        throw new Error('No se pudo editar el centro de costo');
    }
};

export const deleteCostCentre = async (id) => {

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cost_centre/${id}`, {
        method: 'DELETE',
    });

    if (response.status === 200) {

        const CostCentreDeleted = await response.json();

        return CostCentreDeleted;
    } else {
        throw new Error('No se pudo eliminar el centro de costo');
    }
};