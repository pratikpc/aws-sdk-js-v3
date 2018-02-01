import {List as _List_} from '@aws/types';

export const _DelegationSetNameServers: _List_ = {
    type: 'list',
    min: 1,
    member: {
        shape: {
            type: 'string',
        },
        locationName: 'NameServer',
    },
};