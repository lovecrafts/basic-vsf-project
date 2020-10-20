import { setup } from '@vue-storefront/commercetools-api';
import { Logger } from '@vue-storefront/core'
import { setContext } from 'apollo-link-context';
import { ApolloLink, Observable } from 'apollo-link';
//import { winstonLogger } from '../utils/lcLogger.js';
//import { logger } from '../utils/lcLogger.js';

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

export default (context) => {
    //winstonLogger.error('Test Error 1');
    Logger.error('Test Error 2');
    setup({
        api: {},
        customOptions: {
            link: createLink(context.req),
        },
    });
};
