import {List as _List_} from '@aws/types';

export const _ResettableElementNameList: _List_ = {
    type: 'list',
    member: {
        shape: {
            type: 'string',
            min: 1,
        },
        locationName: 'ResettableElementName',
    },
};