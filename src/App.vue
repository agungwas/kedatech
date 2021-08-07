<template>
  <div class="home">
    <div>Name</div>
    <div class="radios">
      <div v-for="index in labels" :key="index">
        <input
          type="radio"
          v-model="selectedRadio"
          name="selectedRadio"
          :value="index"
          :id="'radio' + index"
        />
        <label :for="'radio' + index">{{ index }}</label>
      </div>
    </div>
    <div>Subcomponents!</div>
    <TextField :label="labels[0]" v-if="selectedRadio === labels[0]" />
    <DateField :label="labels[1]" v-else-if="selectedRadio === labels[1]" />
    <SubmitField :label="labels[2]" v-else-if="selectedRadio === labels[2]" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import TextField from '@/components/TextField.vue';
import DateField from '@/components/DateField.vue';
import SubmitField from '@/components/SubmitField.vue';


@Component({
  components: {
    TextField,
    DateField,
    SubmitField
  },
})
export default class App extends Vue {
  @Prop({}) readonly labels!: string[];
  public selectedRadio: string = '';
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  .radios {
    display: flex;
    justify-content: center;
  }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
