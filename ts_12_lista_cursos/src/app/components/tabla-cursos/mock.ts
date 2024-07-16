import { Curso } from "../../models/curso-to";

export const cursos: Curso[] = [
	{
		materia: 'JavaScript',
		dificultad: 9,
		requiere: 'HTML y CSS'
	},
	{
		materia: 'TypeScript',
		dificultad: 7,
		requiere: 'JavaScript'
	},
	{
		materia: 'Angular',
		dificultad: 9,
		requiere: 'HTML, CSS, JS y TS'
	},
	{
		materia: 'React',
		dificultad: 7,
		requiere: 'HTML, CSS, JS'
	},
]