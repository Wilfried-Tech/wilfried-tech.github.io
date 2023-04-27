import {Injectable} from '@angular/core';
import {Project} from '../helpers';
import {HttpClient} from '@angular/common/http';
import {from, Observable, tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  cachedProjects?: Project[]

  constructor(private client: HttpClient) {
  }

  getProjects(): Observable<Project[]> {
    if (this.cachedProjects)
      return from([this.cachedProjects])
    return this.client.get<Project[]>('/projects.json').pipe(tap(value => this.cachedProjects = value))
  }
}
