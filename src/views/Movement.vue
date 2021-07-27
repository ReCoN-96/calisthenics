<template>
  <the-header />
  <movement-explained />
</template>

<script>
// @ is an alias to /src
import TheHeader from '@/components/TheHeader.vue';
import MovementExplained from '@/components/MovementExplained.vue';

export default {
  name: 'Movement',
  components: {
    TheHeader,
    MovementExplained,
  },
};
</script>
