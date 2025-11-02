<template>
  <div id="app">
   
    <Beverage 
      :isIced="store.currentTemp === 'Cold'" 
      :drink="store.currentBase" 
      :creamer="store.currentCreamer"
      :syrup="store.currentSyrup"
    />
    

    <div class="beverage-form">
      <div class="name-input-section">
        <label for="beverage-name">Name:</label>
        <input 
          type="text" 
          id="beverage-name" 
          v-model="store.beverageName" 
          placeholder="Enter beverage name"
        />
        <button @click="store.makeBeverage()" class="make-beverage-btn">
          Make Beverage
        </button>
      </div>
      
  
      <ul>
        <li>
          <h3>Temperature</h3>
          <template v-for="temp in store.temps" :key="temp">
            <label>
              <input
                type="radio"
                name="temperature"
                :id="`r${temp}`"
                :value="temp"
                v-model="store.currentTemp"
              />
              {{ temp }}
            </label>
          </template>
        </li>
        
        <li>
          <h3>Drink</h3>
          <template v-for="beverage in store.bases" :key="beverage.id">
            <label>
              <input
                type="radio"
                name="drink"
                :id="beverage.id"
                :value="beverage.name"
                v-model="store.currentBase"
              />
              {{ beverage.name }}
            </label>
          </template>
        </li>
        
        <li>
          <h3>Creamer</h3>
          <template v-for="creamer in store.creamers" :key="creamer.id">
            <label>
              <input
                type="radio"
                name="creamer"
                :id="creamer.id"
                :value="creamer.name"
                v-model="store.currentCreamer"
              />
              {{ creamer.name }}
            </label>
          </template>
        </li>
        
        <li>
          <h3>Syrup</h3>
          <template v-for="syrup in store.syrups" :key="syrup.id">
            <label>
              <input
                type="radio"
                name="syrup"
                :id="syrup.id"
                :value="syrup.name"
                v-model="store.currentSyrup"
              />
              {{ syrup.name }}
            </label>
          </template>
        </li>
      </ul>
    </div>
    

    <div id="beverage-container" v-if="store.savedBeverages.length > 0">
      <h2>Saved Beverages</h2>
      <div class="saved-beverages">
        <button 
          v-for="(beverage, index) in store.savedBeverages" 
          :key="index"
          @click="store.showBeverage(beverage)"
          class="beverage-btn"
          :class="{ active: store.displayedBeverage === beverage }"
        >
          {{ beverage.name }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Beverage from "./components/Beverage.vue";
import { useBeverageStore } from "./stores/beverageStore";


const store = useBeverageStore();
</script>

<style lang="scss">
body,
html {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #6e4228;
  background: linear-gradient(to bottom, #6e4228 0%, #956f5a 100%);
  margin: 0;
  padding: 20px;
}

#app {
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.beverage-form {
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 10px;
  width: 100%;
}

.name-input-section {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  padding: 15px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  
  label {
    color: #fff;
    font-weight: bold;
    font-size: 16px;
  }
  
  input[type="text"] {
    flex: 1;
    padding: 8px 12px;
    border: 2px solid #fff;
    border-radius: 5px;
    font-size: 14px;
    background: rgba(255, 255, 255, 0.9);
    
    &:focus {
      outline: none;
      border-color: #ffd89b;
      background: #fff;
    }
  }
  
  .make-beverage-btn {
    padding: 8px 20px;
    background: #634caf;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s;
    
    &:hover {
      background: #7445a0;
    }
    
    &:active {
      transform: scale(0.98);
    }
  }
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  
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
      margin-bottom: 5px;
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

#beverage-container {
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  
  h2 {
    color: #fff;
    margin-top: 0;
    margin-bottom: 15px;
    text-align: center;
  }
  
  .saved-beverages {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    
    .beverage-btn {
      padding: 10px 20px;
      background: rgba(255, 255, 255, 0.2);
      color: white;
      border: 2px solid rgba(255, 255, 255, 0.3);
      border-radius: 20px;
      font-size: 14px;
      cursor: pointer;
      transition: all 0.3s;
      
      &:hover {
        background: rgba(255, 255, 255, 0.3);
        border-color: #ffd89b;
      }
      
      &.active {
        background: #ffd89b;
        color: #6e4228;
        border-color: #ffd89b;
        font-weight: bold;
      }
    }
  }
}
</style>
