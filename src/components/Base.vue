<template>
  <div class="baseBeverage" :class="drinkClass">
    <div v-if="syrup === 'Vanilla'" class="vanilla-stripes"></div>
    <div v-if="syrup === 'Caramel'" class="caramel-stripes"></div>
    <div v-if="syrup === 'Hazelnut'" class="hazelnut-stripes"></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  drink: string;
  creamer: string;
  syrup: string;
}>();

const drinkClass = computed(() => {
  const hasCreamer = props.creamer === 'Milk' || props.creamer === 'Cream' || props.creamer === 'Half & Half';
  
  if (hasCreamer) {
    if (props.drink === 'Green Tea') {
      return 'green-tea-with-creamer';
    } else {
      return 'coffee-with-creamer';
    }
  } else {
    switch (props.drink) {
      case 'Coffee':
        return 'coffee';
      case 'Green Tea':
        return 'green-tea';
      case 'Black Tea':
        return 'black-tea';
      default:
        return 'coffee';
    }
  }
});
</script>

<style scoped>
.baseBeverage {
  position: relative;
  width: 100%;
  height: 100%;
  bottom: 0;
  animation: pour-tea 2s;
  z-index: 300;
  overflow: hidden;
}


.baseBeverage.coffee {
  background-color: #3e2723;
}

.baseBeverage.green-tea {
  background-color: #2d5016;
}

.baseBeverage.black-tea {
  background-color: #553f3b;
}


.baseBeverage.coffee-with-creamer {
  background-color: #a68351ff;
}

.baseBeverage.green-tea-with-creamer {
  background-color: #89d873ff;
}


.vanilla-stripes,
.caramel-stripes,
.hazelnut-stripes {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.vanilla-stripes {
  background-image: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 10px,
    rgba(255, 255, 255, 0.3) 10px,
    rgba(255, 255, 255, 0.3) 20px
  );
}

.caramel-stripes {
  background-image: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 10px,
    rgba(218, 165, 32, 0.5) 10px,
    rgba(218, 165, 32, 0.5) 20px
  );
}

.hazelnut-stripes {
  background-image: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 10px,
    rgba(107, 68, 35, 0.6) 10px,
    rgba(107, 68, 35, 0.6) 20px
  );
}
</style>
