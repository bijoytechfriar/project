import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Brand extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number;
    
    @Column()
    brandname! : string

    @Column()
    branddes! : string

    


}