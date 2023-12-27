export const getSystems = async () => {
    const respuesta = await fetch(`${process.env.API_URL}/systems/`, { cache: 'no-store' });
    const resultado = await respuesta.json();

    return resultado;
}

export const getSystem = async () => {
    const respuesta = await fetch(`${process.env.API_URL}/systems/${id}`, { cache: 'no-store' });
    const resultado = await respuesta.json();

    return resultado;
}

export const postSystem = async (system) => {

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/systems/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json'
        },
        body: JSON.stringify(system)
    });

    if (response.status === 201 || response.status === 200) {

        const newSystem = await response.json();

        return newSystem;
    } else {

        throw new Error('No se pudo crear el sistema');
    }
};

export const editSystem = async (id, system) => {

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/systems/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json'
        },
        body: JSON.stringify(system)
    });

    if (response.status === 200) {

        const systemEdited = await response.json();

        return systemEdited;
    } else {
        throw new Error('No se pudo editar el sistema');
    }
};

export const deletesystem = async (id) => {

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/systems/${id}`, {
        method: 'DELETE',
    });

    if (response.status === 200) {

        const systemDeleted = await response.json();

        return systemDeleted;
    } else {
        throw new Error('No se pudo eliminar el sistema');
    }
};