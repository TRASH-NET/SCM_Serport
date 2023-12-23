export const getMaintenanceRoutes = async () => {
    const respuesta = await fetch(`${process.env.API_URL}/maintenance_routes/`, { cache: 'no-store' });
    const resultado = await respuesta.json();

    return resultado;
}

export const getMaintenanceRoute = async () => {
    const respuesta = await fetch(`${process.env.API_URL}/maintenance_routes/${id}`, { cache: 'no-store' });
    const resultado = await respuesta.json();

    return resultado;
}

export const getMaintenanceRouteToDoInMonth = async () => {
    const respuesta = await fetch(`${process.env.API_URL}/maintenance_routes/to_do_in_month`, { cache: 'no-store' });
    const resultado = await respuesta.json();

    return resultado;
}

export const postMaintenanceRoute = async (maintenance_route) => {

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/maintenance_routes/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json'
        },
        body: JSON.stringify(maintenance_route)
    });

    if (response.status === 201) {

        const newMaintenanceRoute = await response.json();

        return newMaintenanceRoute;
    } else {

        throw new Error('No se pudo crear la rutina de mantenimiento');
    }
};

export const editMaintenanceRoute = async (id, maintenance_route) => {

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/maintenance_routes/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json'
        },
        body: JSON.stringify(maintenance_route)
    });

    if (response.status === 200) {

        const maintenanceRouteEdited = await response.json();

        return maintenanceRouteEdited;
    } else {
        throw new Error('No se pudo editar la rutina de mantenimiento');
    }
};

export const deleteMaintenanceRoute = async (id) => {

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/maintenance_routes/${id}`, {
        method: 'DELETE',
    });

    if (response.status === 200) {

        const maintenanceRouteDeleted = await response.json();

        return maintenanceRouteDeleted;
    } else {
        throw new Error('No se pudo eliminar la rutina de mantenimiento');
    }
};