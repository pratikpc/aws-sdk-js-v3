import {_UnmarshalledReusableDelegationSetLimit} from './_ReusableDelegationSetLimit';
import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * <p>A complex type that contains the requested limit. </p>
 */
export interface GetReusableDelegationSetLimitOutput {
    /**
     * <p>The current setting for the limit on hosted zones that you can associate with the specified reusable delegation set.</p>
     */
    Limit: _UnmarshalledReusableDelegationSetLimit;

    /**
     * <p>The current number of hosted zones that you can associate with the specified reusable delegation set.</p>
     */
    Count: number;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}