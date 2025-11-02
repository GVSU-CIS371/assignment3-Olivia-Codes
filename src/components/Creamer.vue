<template>
  <div class="froth">
    <div v-for="n in 5" :key="n" class="foam"></div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  isIced?: boolean;
}>();
</script>

<style lang="scss" scoped>
.froth {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 20%;
  width: 100%;
  background-color: #d4cfc0; /* Slightly darker base */
  z-index: 10;
}

.foam {
  display: block;
  background: #f0ede3; 
  border-radius: 50%;
  height: 40px;
  width: 40px;
  position: absolute;
  top: 0px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1); 
}

.foam:nth-child(1) {
  left: -3px;
}

.foam:nth-child(2) {
  left: 55px;
}

.foam:nth-child(3) {
  width: 30px;
  height: 30px;
  left: 30px;
  top: 3px;
}

.foam:nth-child(4) {
  width: 30px;
  height: 30px;
  right: -2px;
  top: 5px;
}

.foam:nth-child(5) {
  right: 10px;
  top: 2px;
}
</style>
