import { Component, OnInit } from '@angular/core';
import { cursos } from './mock';
import { Curso } from '../../models/curso-to';

@Component({
  selector: 'app-tabla-cursos',
  standalone: true,
  imports: [],
  templateUrl: './tabla-cursos.component.html',
  styleUrl: './tabla-cursos.component.css'
})
export class TablaCursosComponent implements OnInit
{
  public cursos?: Curso[]

  ngOnInit(): void
  {
    this.cursos = cursos
  }
}
