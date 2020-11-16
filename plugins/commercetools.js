import { setup } from '@vue-storefront/commercetools-api';
import { Logger, registerIntegration } from '@vue-storefront/core'
import { setContext } from 'apollo-link-context';
import { ApolloLink, Observable } from 'apollo-link';

function createLink(req) {
    const logLink = setContext((_, { headers }) => {
        Logger.info('request', req.headers.cookie);
        if (req) {
            return {
                headers: {
                    ...headers,
                    'cookie': req.headers.cookie
                }
            };
        }
    });

    const fakeLink = new ApolloLink((operation, forward) => {
        return new Observable(observer => {
            const data = {example: operation.getContext().headers.cookie};
            observer.next({ data });
            observer.complete();
        });
    });

    return ApolloLink.from([logLink, fakeLink]);
}

export default registerIntegration((context) => {
    const config = {
        api: {},
        customOptions: {
            link: createLink(context.req),
        },
    }

    context.vsf.configure(setup(config))
});
