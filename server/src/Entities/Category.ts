import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Category extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number;
    
    @Column()
    categoryname! : string

    @Column()
    categorydes! : string

    


}