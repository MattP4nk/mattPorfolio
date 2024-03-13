import { AbmModel } from "./AbmModel";
import { EduModel } from "./EduModel";
import { JobModel } from "./JobModel";
import { ProjectModel } from "./ProjectModel";
import { SkillModel } from "./SkillModel";

export class AnswerModel{
    message!: string;
    response!: (AbmModel | SkillModel | ProjectModel | JobModel | EduModel | any);
    currentTask?: string;
}