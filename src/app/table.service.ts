import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TableService {
    CourseService(): any[]{
        throw new Error("Method not implemented.");
    }
    constructor() { }

    getReina(){
        return[
            {id:0, hobby:"Membaca", ket:"Membaca novel, membaca majalah, dan lainnya"},
            {id:1, hobby:"Menonton film", ket:"Menonton film untuk mengisi waktu luang"},
            {id:2, hobby:"Mendengarkan musik", ket:"Menghilangkan bosan biasanya saya mendengarkan musik"}
        ]
    }
}