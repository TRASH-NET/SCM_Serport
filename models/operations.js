export const getOperations = async () => {
    const respuesta = await fetch(`${process.env.API_URL}/operations/`, { cache: 'no-store' });
    const resultado = await respuesta.json();

    return resultado;
}

export const getOperation = async () => {
    const respuesta = await fetch(`${process.env.API_URL}/operations/${id}`, { cache: 'no-store' });
    const resultado = await respuesta.json();

    return resultado;
}

export const postOperation = async (operation) => {

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/operations/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json'
        },
        body: JSON.stringify(operation)
    });

    if (response.status === 201) {

        const newOperation = await response.json();

        return newOperation;
    } else {

        throw new Error('No se pudo crear la operacion');
    }
};

export const editOperation = async (id, operation) => {

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/operations/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json'
        },
        body: JSON.stringify(operation)
    });

    if (response.status === 200) {

        const OperationEdited = await response.json();

        return OperationEdited;
    } else {
        throw new Error('No se pudo editar la operacion');
    }
};

export const deleteOperation = async (id) => {

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/operations/${id}`, {
        method: 'DELETE',
    });

    if (response.status === 200) {

        const OperationDeleted = await response.json();

        return OperationDeleted;
    } else {
        throw new Error('No se pudo eliminar la operacion');
    }
};