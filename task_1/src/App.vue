<template>
  <students-list-component/>
  <evaluation-system/>
  <students-category-filter />
</template>

<script>
import EvaluationSystem from './components/EvaluationSystem.vue';
import StudentsCategoryFilter from './components/StudentsCategoryFilter.vue';
import StudentsListComponent from './components/StudentsListComponent.vue';



export default {
  name: "App",
  components: {
    StudentsListComponent,
    EvaluationSystem,
    StudentsCategoryFilter
},
data() {
  return {
  }
},
};
</script>

<style lang="scss">
@import url(./assets/reset.scss);
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: gray;
  width: 100%;
  min-height: 100%;
  color: #fff;
  padding: 50px 100px 0;
  display: flex;
  align-items: flex-start;
  column-gap: 50px;
}
</style>
