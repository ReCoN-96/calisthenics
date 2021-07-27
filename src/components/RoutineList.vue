<template>
  <section class="content-container">
    <h1 class="routine__title">Routine street workout sur une semaine</h1>
    <img
      src="https://static.vecteezy.com/system/resources/previews/002/908/930/non_2x/street-workout-isometric-flowchart-illustration-vector.jpg"
      class="routine__image"
      alt="Bannière ayant pour titre street workout"
    />
    <p class="routine__text">
      L'objectif de cette routine est d'optimiser les exercices dans le but de
      se focaliser sur la maîtrise de 3 mouvements de calisthenics, le pistol
      squat, le muscle up et le handstand push up. Mais aussi de garder un corps
      homogène en travaillant tous les groupes musculaires.
    </p>
    <p class="routine__text">
      J'ai opté pour une approche étape par étape, le programme est amené à
      changer en fonction des performances, chaque journée de routine posséde un
      mouvement de transition, qui une fois répété suffisamment permet de passer
      à un mouvement et une routine plus complexe.
    </p>
    <routine-list-item v-bind:routine="routine" />
  </section>
</template>

<script>
import routine from '../api';
import RoutineListItem from './RoutineListItem.vue';

export default {
  components: {RoutineListItem},
  name: 'RoutineList',
  data() {
    return {routine};
  },
};
</script>
