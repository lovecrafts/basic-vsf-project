<template>
    <div>
        Cookie: {{ result }}
    </div>
</template>

<script>
import { ref } from '@vue/composition-api';
import { getSettings } from '@vue-storefront/commercetools-api';
import { onSSR } from '@vue-storefront/core';
import { useContext } from '@nuxtjs/composition-api'
import gql from 'graphql-tag';
import { result } from './shared'

const query = gql`
  query {
      example
  }
`;


export default {
    setup() {
        const context = useContext();

        onSSR(async () => {
            await new Promise((resolve, reject) => {
                setTimeout(resolve, 3000);
            });
            const res = await context.$vsf.ct.client.query({
                query,
                fetchPolicy: 'no-cache',
            }).then(res => res.data.example);

            if (result.value == 3) {
                result.value = res
            }
        });

        return {
            result
        }
    }
}
</script>
