import {ResponseMetadata as __ResponseMetadata__, ServiceException as __ServiceException__} from '@aws/types';

/**
 * <p>The specified VPC and hosted zone are not currently associated.</p>
 */
export interface VPCAssociationNotFound extends __ServiceException__<_VPCAssociationNotFoundDetails> {
    name: 'VPCAssociationNotFound';
}

export interface _VPCAssociationNotFoundDetails {
    /**
     * <p>Descriptive message for the error response.</p>
     */
    message?: string;
}