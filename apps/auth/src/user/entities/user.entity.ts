import { AbstractEntity } from "@app/lib-base/abstract.entity";
import { Column, Entity } from "typeorm";

@Entity()
export class User extends AbstractEntity {
    @Column()
    login: string;
    @Column()
    password: string;
}
