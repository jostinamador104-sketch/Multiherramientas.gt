const listaProductos = [
    // --- Productos originales (del sitio web actual) ---
    { id: 1, nombre: "Tricket de 3.5 Toneladas", imagen: "Tricket de 3.5 ton.png", resumen: "Gato hidráulico de patín de alta resistencia.", especificaciones: ["Capacidad: 3.5 Toneladas", "Doble bomba", "Acero reforzado"] },
    { id: 2, nombre: "Desmontadora de Llantas", imagen: "Desmontadora de llantas.png", resumen: "Equipo profesional para neumáticos.", especificaciones: ["Operación neumática", "Mordazas auto-centrables", "Protección para aros"] },
    { id: 3, nombre: "Cortadora de Concreto", imagen: "Cortadora de concreto.png", resumen: "Cortes rectos en pavimentos.", especificaciones: ["Motor a gasolina", "Tanque de agua integrado", "Guía de corte"] },
    { id: 4, nombre: "Afilador de Discos / Cizalla", imagen: "Afilador de discos.png", resumen: "Mantenimiento y corte de varilla.", especificaciones: ["Palanca de fuerza", "Cuchillas templadas", "Base sólida"] },
    { id: 5, nombre: "Bomba para Agua Centrífuga", imagen: "Bomba para agua.png", resumen: "Alto flujo para riego o desagüe.", especificaciones: ["Hierro fundido", "Polea triple", "Alta succión"] },
    { id: 6, nombre: "Hidrolavadora DeWALT", imagen: "Hidroladora delwalt.png", resumen: "Limpieza profunda de alta potencia.", especificaciones: ["Motor de alta gama", "Ruedas neumáticas", "Manguera reforzada"] },
    { id: 7, nombre: "Cepilladora de Banco", imagen: "Cepilladora.png", resumen: "Regruesadora de madera precisa.", especificaciones: ["Estructura de fundición", "Ajuste milimétrico", "Mesa rectificada"] },
    { id: 8, nombre: "Compresor de Aire 115 Litros", imagen: "Compresor 115 litros.png", resumen: "Compresor vertical potente.", especificaciones: ["Tanque vertical Rhino", "Doble salida", "Manómetros de seguridad"] },
    { id: 9, nombre: "Compresor de Aire 80 Galones", imagen: "Compresor 80 galones.png", resumen: "Gran capacidad para alta demanda.", especificaciones: ["Tanque industrial", "Cabezal de gran cilindrada", "Sistema de purga"] },
    { id: 10, nombre: "Cabezal para Compresor", imagen: "Cabezal para compresor.png", resumen: "Repuesto de alta eficiencia.", especificaciones: ["Alta durabilidad", "Para sistemas de aire pesado"] },

    // --- Productos nuevos (los que me enviaste hoy) ---
    { id: 11, nombre: "Soldadora 3 en 1 195 A", imagen: "Soldadora rhino.png", resumen: "Inversora profesional 110/220 V", especificaciones: ["Marca: Rhino Tools", "Precio: Q2,000", "Amperaje: 195 A"] },
    { id: 12, nombre: "Soldadora Inversora 300 A", imagen: "Soldadora xcort.png", resumen: "MIG/MAG/MMA 3 en 1", especificaciones: ["Marca: XCORT", "Precio: Q3,600", "Amperaje: 300 A"] },
    { id: 13, nombre: "Generador Inversor 2600 W", imagen: "Generador inversor.png", resumen: "Generador a gasolina 110 V", especificaciones: ["Marca: A-iPower", "Precio: Q12,500", "Potencia: 2600 W"] },
    { id: 14, nombre: "Revolvedora 5 HP", imagen: "Mezcladora 2 sacos 4 llantas.png", resumen: "Revolvedora remolcable", especificaciones: ["Marca: Honda", "Precio: Q12,500", "Potencia: 5 HP"] },
    { id: 15, nombre: "Desgranadora de Maíz", imagen: "Desgranador.png", resumen: "Con motor eléctrico", especificaciones: ["Marca: Tudor", "Precio: Q1,750", "Motor 1.5 HP"] },
    { id: 16, nombre: "Fumigadora de Parihuela", imagen: "Fumigadora para parihuela.png", resumen: "Equipo profesional", especificaciones: ["Marca: No especificada", "Precio: Consultar"] },
    { id: 17, nombre: "Molino para Nixtamal", imagen: "Molino para nixtamal.png", resumen: "Molino familiar", especificaciones: ["Marca: Corona", "Precio: Consultar"] },
    { id: 18, nombre: "Rodillo Compactador", imagen: "Rodo compactador .png", resumen: "Compactación de suelos", especificaciones: ["Marca: Honda", "Precio: Consultar"] },
    { id: 19, nombre: "Hidrolavadora 3,300 PSI", imagen: "Hidrolabadora honda.png", resumen: "Alta presión", especificaciones: ["Marca: Honda", "Precio: Consultar", "Presión: 3,300 PSI"] },
    { id: 20, nombre: "Mezcladora 2 sacos (9 HP)", imagen: "Mezcladora 2 sacos.png", resumen: "Alta capacidad", especificaciones: ["Marca: Honda", "Precio: Consultar", "Potencia: 9 HP"] },
    { id: 21, nombre: "Revolvedora 600 L", imagen: "Revolvedora de cemento.png", resumen: "Reforzada de 2 sacos", especificaciones: ["Marca: Honda", "Precio: Q19,000", "Capacidad: 600 L"] },
    { id: 22, nombre: "Revolvedora 1 saco", imagen: "Revolvedora 1 saco.png", resumen: "A gasolina", especificaciones: ["Marca: Rhino Tools", "Precio: Q4,000"] },
    { id: 23, nombre: "Hidrolavadora Industrial", imagen: "Hidrolabadora rhino.png", resumen: "Alta potencia", especificaciones: ["Marca: Rhino Tools", "Precio: Q4,300", "Presión: 2000 PSI"] },
    { id: 24, nombre: "Vibradora para Concreto", imagen: "Bibrador de concreto.png", resumen: "Eléctrica 1600 W", especificaciones: ["Marca: Rhino Tools", "Precio: Q1,450"] },
    { id: 25, nombre: "Juego de Copas 26 piezas", imagen: "Juegos de copas 1.png", resumen: "Copas de impacto", especificaciones: ["Marca: Rhino Tools", "Precio: Q1,300"] },
    { id: 26, nombre: "Pistola de Impacto", imagen: "Pistola de impacto milwaukee.png", resumen: "Industrial 1/2", especificaciones: ["Marca: Milwaukee", "Precio: Q5,800"] },
    { id: 27, nombre: "Llave de Impacto 1/2", imagen: "Llave de impacto milwaukee.png", resumen: "Profesional", especificaciones: ["Marca: Milwaukee", "Precio: Consultar"] }
];
