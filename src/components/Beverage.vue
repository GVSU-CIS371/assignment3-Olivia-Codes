<template>
  <Mug>
    <Cold v-if="isIced" />
    <Hot v-else />
    <Contents>
      <template v-slot:top>
        <Creamer v-if="hasCreamer" :isIced="isIced" />
      </template>
      <template v-slot:mid>
        <Syrup :syrup="syrup" />
      </template>
      <template v-slot:bottom>
        <Base :drink="drink" :creamer="creamer" :syrup="syrup" />
      </template>
    </Contents>
  </Mug>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import Contents from "./Contents.vue";
import Mug from "./Mug.vue";
import Syrup from "./Syrup.vue";
import Base from "./Base.vue";
import Creamer from "./Creamer.vue";
import Hot from "./Hot.vue";
import Cold from "./Cold.vue";

type Props = {
  isIced: boolean;
  drink: string;
  creamer: string;
  syrup: string;
};

const props = defineProps<Props>();

const hasCreamer = computed(() => {
  return props.creamer === 'Milk' || props.creamer === 'Cream' || props.creamer === 'Half & Half';
});
</script>
