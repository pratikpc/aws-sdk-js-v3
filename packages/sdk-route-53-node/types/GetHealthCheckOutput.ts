import {_UnmarshalledHealthCheck} from './_HealthCheck';
import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * <p>A complex type that contains the response to a <code>GetHealthCheck</code> request.</p>
 */
export interface GetHealthCheckOutput {
    /**
     * <p>A complex type that contains information about one health check that is associated with the current AWS account.</p>
     */
    HealthCheck: _UnmarshalledHealthCheck;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}