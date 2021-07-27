<template>
  <the-header />
  <not-found />
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import NotFound from '@/components/NotFound.vue';

export default {
  name: 'PageNotFound',
  components: {
    TheHeader,
    NotFound,
  },
};
</script>
