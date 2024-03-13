import { AbmModel } from "./AbmModel";

export class PetitionModel{
    request!:string;
    area!: string;
    target!: string;
    key?: string;
    aboutPackage?: AbmModel;
    expPackage?: string;
    eduPackage?: string;
    skillPackage?: string;
    projectPackage?: string;
}