import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Users extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number;
    
    @Column()
    productname! : string

    @Column()
    price! : string

    @Column()
    quantity! : string

    @Column()
    category! : string

    @Column()
    brand! : string
    
    @Column()
    image!: string


}