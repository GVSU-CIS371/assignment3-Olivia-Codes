<template>
  <div>
    <Beverage 
      :isIced="currentTemp === 'Cold'" 
      :drink="currentBeverage" 
      :creamer="currentCreamer"
      :syrup="currentSyrup"
    />
    <ul>
      <li>
        <h3>Temperature</h3>
        <template v-for="temp in temps" :key="temp">
          <label>
            <input
              type="radio"
              name="temperature"
              :id="`r${temp}`"
              :value="temp"
              v-model="currentTemp"
            />
            {{ temp }}
          </label>
        </template>
      </li>
      
      <li>
        <h3>Drink</h3>
        <template v-for="beverage in bases" :key="beverage.id">
          <label>
            <input
              type="radio"
              name="drink"
              :id="beverage.id"
              :value="beverage.name"
              v-model="currentBeverage"
            />
            {{ beverage.name }}
          </label>
        </template>
      </li>
      
      <li>
        <h3>Creamer</h3>
        <template v-for="creamer in creamers" :key="creamer.id">
          <label>
            <input
              type="radio"
              name="creamer"
              :id="creamer.id"
              :value="creamer.name"
              v-model="currentCreamer"
            />
            {{ creamer.name }}
          </label>
        </template>
      </li>
      
      <li>
        <h3>Syrup</h3>
        <template v-for="syrup in syrups" :key="syrup.id">
          <label>
            <input
              type="radio"
              name="syrup"
              :id="syrup.id"
              :value="syrup.name"
              v-model="currentSyrup"
            />
            {{ syrup.name }}
          </label>
        </template>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Beverage from "./components/Beverage.vue";
import { temps, bases, creamers, syrups, currentTemp } from "./stores/beverage";

const currentBeverage = ref('Coffee');
const currentCreamer = ref('No Cream');
const currentSyrup = ref('No Syrup');
</script>

<style lang="scss">
body,
html {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #6e4228;
  background: linear-gradient(to bottom, #6e4228 0%, #956f5a 100%);
}

ul {
  list-style: none;
  padding: 20px;
  
  li {
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    
    h3 {
      color: #fff;
      margin-right: 15px;
      margin-bottom: 0;
      font-size: 16px;
      min-width: 120px;
    }
    
    label {
      display: inline-flex;
      align-items: center;
      color: #fff;
      margin-right: 15px;
      margin-bottom: 0;
      cursor: pointer;
      
      input[type="radio"] {
        margin-right: 5px;
        cursor: pointer;
      }
      
      &:hover {
        color: #ffd89b;
      }
    }
  }
}
</style>
