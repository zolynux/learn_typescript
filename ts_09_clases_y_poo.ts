class Pelicula {
  nombre?: string
  protagonistas?: string[]
  actores?: string[]

  proyectarEnCine() {
    console.log(`La pelicula ${this.nombre} está siendo proyectada`)
  }

  constructor(nombre: string, protagonistas: string[], actores: string[]) {
    this.nombre = nombre,
      this.protagonistas = protagonistas,
      this.actores = actores
  }
}

const pelicula = new Pelicula('Barbie', ['Barbie', 'Ken'], ['Margot Robbies', 'Ryan Golsing'])
const pelicula2 = new Pelicula('Oppenheimer', ['Oppenheimer', 'Strauss'], ['Cillian Murphy', 'Robert Downey'])

pelicula.proyectarEnCine()
console.log(pelicula)
console.log(pelicula2)