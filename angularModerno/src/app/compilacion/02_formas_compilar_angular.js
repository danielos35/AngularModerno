/**
 *
 * FORMAS DE COMPILAR EN ANGULAR
 * - JUST IN TIME (JIT) (en tiempo de ejecución)
 * - AHEAD OF TIME (AOT) (De forma anticipada)
 *
 *
 * ¿Cuando se usa cada una?
 *
 * - Al desarrollar se utiliza JIT (es mas rapido en la compilación)
 * --- ng s --aot
 * --- ng b --aot
 *
 * -- Cuando generamos una aplicación para producción (ng build --prod) se usa AOT
 *
 *
 * BENEFICIOS AOT
 * - Se le entrega al navegador una aplicación ya precompilada (sin tener que hacer esfuerzo de mas)
 * - Hay menos solicitudes asincronas
 * --- Los componentes se consulta cada vez que son necesarios
 * - Pesa menos la aplicación (pues no necesitamos el compilador de angular)
 * - Detecta errores en plantilla (un error de declaración o sintaxis o de llamado) y por tal no se va a poder compilar
 * - Mejor seguridad (bajamos el riesgo que tengamos inyección de codigo)
 *
 *
 * DONDE VER LA CONFIGURACIÓN
 * - En angular.json siempre validar que tengamos aot:true para tener todos los beneficios
 * - Algunas librerias no funcionan por defecto para AOT (aún así se debe buscar la opción de usar AOT)
 *
 *
 * */
