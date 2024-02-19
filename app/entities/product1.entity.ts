import { Column, Entity, PrimaryGeneratedColumn , CreateDateColumn , UpdateDateColumn} from "typeorm";

@Entity()
export class Product1 {
    @PrimaryGeneratedColumn()
    id : number;

    @CreateDateColumn()
    createdAt:  Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @Column({nullable: false })
    productCategory : string;

    @Column({ unique: true , nullable: false })
    productName : string;

    @Column({unique: true , nullable: false})
    serialNumber : number;

    @Column({ nullable: false})
    price : number;

}
