<template>
  <TheHeader />
  <RoutineList />
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import RoutineList from '@/components/RoutineList.vue';

export default {
  name: 'Home',
  components: {
    TheHeader,
    RoutineList,
  },
};
</script>
