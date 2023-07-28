import { DataTypes } from 'sequelize';
import { Table, Model, Column, BelongsToMany } from 'sequelize-typescript';
import { UserRoles } from './user-roles.model';
import { User } from 'src/users/users.model';
import { ApiProperty } from '@nestjs/swagger';

interface ICreateRoleAttrs {
    value: string;
    description: string;
}

@Table({ tableName: 'Roles' })
export class Role extends Model<Role, ICreateRoleAttrs> {

    @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
    @Column({
        type: DataTypes.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @ApiProperty({ example: 'ADMIN', description: 'Уникальное значение роли' })
    @Column({
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    })
    value: string;

    @ApiProperty({ example: 'Администратор', description: 'Описание роли' })
    @Column({
        type: DataTypes.STRING,
        allowNull: false
    })
    description: string;

    @BelongsToMany(() => User, () => UserRoles)
    users: User[];
}