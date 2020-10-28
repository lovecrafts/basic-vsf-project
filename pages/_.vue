<template>
    <div>
        Cookie: {{ result }}
    </div>
</template>

<script>
import { ref } from '@vue/composition-api';
import { getSettings } from '@vue-storefront/commercetools-api';
import { onSSR } from '@vue-storefront/core';
import gql from 'graphql-tag';


const query = gql`
  query {
      example
  }
`;

export default {
    setup() {
        const result = ref(null);
        onSSR(async () => {
            await new Promise((resolve, reject) => {
                setTimeout(resolve, 3000);
            });
            const { client } = getSettings();
            result.value = await client.query({
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