export const formatearFecha = (fecha) => {
    const year = fecha.getFullYear();
    const month = (fecha.getMonth() + 1).toString().padStart(2, '0'); // Se suma 1 porque los meses comienzan desde 0
    const day = fecha.getDate().toString().padStart(2, '0');

    return `${year}-${month}-${day}`;
};

export const formatearFecha2 = (fechaString) => {
    const fecha = new Date(fechaString);

    const meses = [
        "Ene", "Feb", "Mar", "Abr", "May", "Jun",
        "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"
    ];

    // Obtener el nombre del mes
    const nombreMes = meses[fecha.getMonth()];

    // Obtener el día del mes y el año
    const dia = fecha.getDate() + 1;
    const ano = fecha.getFullYear();

    // Construir la cadena formateada
    const fechaFormateada = `${nombreMes} ${dia}, ${ano}`;

    return fechaFormateada;
}

export const formatearFecha3 = (fechaString) => {
    const fecha = new Date(fechaString);

    const meses = [
        "Ene", "Feb", "Mar", "Abr", "May", "Jun",
        "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"
    ];

    // Obtener el nombre del mes
    const nombreMes = meses[fecha.getMonth()];

    // Obtener el día del mes y el año
    const dia = fecha.getDate();
    const ano = fecha.getFullYear();

    // Construir la cadena formateada
    const fechaFormateada = `${nombreMes} ${dia}, ${ano}`;

    return fechaFormateada;
}

export const getCurrentWeek = () => {
    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    const diff = currentDate.getDate() - currentDay + (currentDay === 0 ? -6 : 1);
    const startDate = new Date(currentDate.setDate(diff));
    const endDate = new Date(currentDate.setDate(diff + 6));

    return `${formatearFecha(startDate)} - ${formatearFecha(endDate)}`;
};

export const getCurrentMonth = () => {
    const currentDate = new Date();
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

    return `${formatearFecha3(firstDayOfMonth)} - ${formatearFecha3(lastDayOfMonth)}`;
};
