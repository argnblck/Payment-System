import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { ValidationException } from 'src/exception/validation.exception';


@Injectable()
export class ValidationPipes implements PipeTransform<any> {
    async transform(value: any, metadata: ArgumentMetadata) {
        const object = plainToClass(metadata.metatype, value);
        const error = await validate(object);

        if (error.length) {
            let message = error.map(err => {
                return `${err.property} - ${Object.values(err.constraints)}`
            })
            throw new ValidationException(message);
        }
        return value;
    }
}