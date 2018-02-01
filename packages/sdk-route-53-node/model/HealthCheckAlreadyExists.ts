import {Structure as _Structure_} from '@aws/types';

export const HealthCheckAlreadyExists: _Structure_ = {
    type: 'structure',
    required: [],
    members: {
        message: {
            shape: {
                type: 'string',
            },
        },
    },
    exceptionType: 'HealthCheckAlreadyExists',
};