import { Column, PrimaryGeneratedColumn } from "typeorm";

export class AbstractEntity {
    @PrimaryGeneratedColumn()
    id:number;
    @Column({default: new Date()})
    createdDate: Date;
    @Column({default: new Date()})
    updatedDate: Date;
    @Column({default: true})
    isActive: boolean;
}