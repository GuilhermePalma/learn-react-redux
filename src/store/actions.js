export function toggleLesson(module, leasson){
    // Esse return segue o padrão abaixo conforme as boas-praticas
    return {
        type: "TOGGLE_LESSON", // TYPE UNIQUE NO ESCOPO DO REDUX GLOBAL
        module, 
        leasson
    }
}