import { DataTypes } from 'sequelize';
import { Table, Model, Column, ForeignKey } from 'sequelize-typescript';
import { User } from 'src/users/users.model';
import { Role } from './roles.model';


@Table({ tableName: 'user_roles', createdAt: false, updatedAt: false })
export class UserRoles extends Model<UserRoles> {

    @Column({
        type: DataTypes.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @ForeignKey(() => User)
    @Column({
        type: DataTypes.INTEGER,
        allowNull: false
    })
    user_id: number;

    @ForeignKey(() => Role)
    @Column({
        type: DataTypes.INTEGER,
        allowNull: false
    })
    role_id: number;
}