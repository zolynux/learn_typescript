interface Programador1 {
  nombre: string,
  tecnologias: string[],
  tomaMate?: boolean | null
}

let dev: Programador1 = {
  nombre: 'Sergie Code',
  tecnologias: ['React', 'Anuglar', 'Sevlte'],
  tomaMate: true
}

let dev2 = {
  nombre: 'Federico',
  tecnologias: ['Html', 'Cobol'],
  tomaMate: null,
  apellido: 'Buenardo',
  recibido: false
}

function enviarCurriculum(programador: Programador1) {
  console.log(`Este Curriculum es de ${programador.nombre}`)
}

enviarCurriculum(dev2)