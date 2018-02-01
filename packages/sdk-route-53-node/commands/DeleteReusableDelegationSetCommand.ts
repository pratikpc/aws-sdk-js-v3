import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_route53_id_normalizer_middleware from '@aws/route53-id-normalizer-middleware';
import * as __aws_types from '@aws/types';
import * as _stream from 'stream';
import {DeleteReusableDelegationSet} from '../model/DeleteReusableDelegationSet';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {DeleteReusableDelegationSetInput} from '../types/DeleteReusableDelegationSetInput';
import {DeleteReusableDelegationSetOutput} from '../types/DeleteReusableDelegationSetOutput';
import {Route53ResolvedConfiguration} from '../Route53Configuration';

export class DeleteReusableDelegationSetCommand implements __aws_types.Command<
    InputTypesUnion,
    DeleteReusableDelegationSetInput,
    OutputTypesUnion,
    DeleteReusableDelegationSetOutput,
    Route53ResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        DeleteReusableDelegationSetInput,
        DeleteReusableDelegationSetOutput,
        _stream.Readable
    >();

    constructor(readonly input: DeleteReusableDelegationSetInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: Route53ResolvedConfiguration
    ): __aws_types.Handler<DeleteReusableDelegationSetInput, DeleteReusableDelegationSetOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: DeleteReusableDelegationSet
        };
        stack.add(
            __aws_route53_id_normalizer_middleware.idNormalizerMiddleware,
            {
                step: 'initialize',
                priority: 0,
                tags: {NORMALIZE_ROUTE53_IDS: true}
            }
        );
        return stack.resolve(
            handler<DeleteReusableDelegationSetInput, DeleteReusableDelegationSetOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}