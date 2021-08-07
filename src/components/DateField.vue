<template>
  <div class="sub">
    {{ label }}
    <input value="" type="date" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'


@Component({

})
export default class TextField extends Vue {
  @Prop({}) readonly label!: string;
}
</script>

<style lang="scss">
.sub {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  input{
    width: 50vw;
  }
}
</style>