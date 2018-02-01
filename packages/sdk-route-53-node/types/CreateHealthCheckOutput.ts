import {_UnmarshalledHealthCheck} from './_HealthCheck';
import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * <p>A complex type containing the response information for the new health check.</p>
 */
export interface CreateHealthCheckOutput {
    /**
     * <p>A complex type that contains identifying information about the health check.</p>
     */
    HealthCheck: _UnmarshalledHealthCheck;

    /**
     * <p>The unique URL representing the new health check.</p>
     */
    Location: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}