<template>
  <div v-for="routineDay in routine" :key="routineDay.id">
    <h2 class="routine-list-item__title">{{ routineDay.id }}</h2>
    <ul>
      <li v-for="movement in routineDay.movements" :key="movement.name">
        {{ movement.name }}
        <br />
        <span class="routine-list-item__reps">Reps: {{ movement.reps }} </span>
      </li>
    </ul>
    <span v-if="routineDay.perform">
      Performance pour passé à la prochaine étape :
      <span class="routine-list-item__perform"> {{ routineDay.perform }}</span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'RoutineListItem',
  props: ['routine'],
};
</script>
