<template>
    <div>
        Cookie: {{ result }}
    </div>
</template>

<script>
import { ref } from '@vue/composition-api';
import { apolloClient } from '@vue-storefront/commercetools-api';
import { onSSR } from '@vue-storefront/core';
import gql from 'graphql-tag';
import { Logger } from '@vue-storefront/core'


const query = gql`
  query {
      example
  }
`;

export default {
    setup(props, context) {
        Logger.info('Test info');
        Logger.error('Test Error');
        const result = ref(null);
        onSSR(async () => {
            await new Promise((resolve, reject) => {
                setTimeout(resolve, 3000);
            });
            result.value = await apolloClient.query({
                query,
                fetchPolicy: 'no-cache',
            }).then(res => res.data.example);
        });

        return {
            result
        }
    }
}
</script>