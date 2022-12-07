import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'text', nullable: false })
    firstName: string;

    @Column({ type: 'text', nullable: false })
    lastName: string;

    @Column({ type: 'bool', nullable: false })
    isActive: boolean;
}
