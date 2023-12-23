export const getComponents = async () => {
    const respuesta = await fetch(`${process.env.API_URL}/components/`, { cache: 'no-store' });
    const resultado = await respuesta.json();

    return resultado;
}

export const getComponent = async () => {
    const respuesta = await fetch(`${process.env.API_URL}/components/${id}`, { cache: 'no-store' });
    const resultado = await respuesta.json();

    return resultado;
}

export const postComponent = async (component) => {

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/components/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json'
        },
        body: JSON.stringify(component)
    });

    if (response.status === 201) {

        const newComponent = await response.json();

        return newComponent;
    } else {

        throw new Error('No se pudo crear el componente');
    }
};

export const editComponent = async (id, component) => {

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/components/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json'
        },
        body: JSON.stringify(component)
    });

    if (response.status === 200) {

        const componentEdited = await response.json();

        return componentEdited;
    } else {
        throw new Error('No se pudo editar el componente');
    }
};

export const deleteComponent = async (id) => {

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/components/${id}`, {
        method: 'DELETE',
    });

    if (response.status === 200) {

        const componentDeleted = await response.json();

        return componentDeleted;
    } else {
        throw new Error('No se pudo eliminar el componente');
    }
};