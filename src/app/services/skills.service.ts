import {Injectable} from "@angular/core";
import {SkillSection} from "../helpers";
import {from, Observable, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SkillsService {
  cachedSkills?: SkillSection[]

  constructor(private client: HttpClient) {
  }

  getSkills(): Observable<SkillSection[]> {
    if (this.cachedSkills)
      return from([this.cachedSkills])
    return this.client.get<SkillSection[]>('/skills.json').pipe(tap(value => this.cachedSkills = value))
  }
}
