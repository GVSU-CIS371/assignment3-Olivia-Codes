import { defineStore } from "pinia";
import temperatures from "../data/tempretures.json";
import bases from "../data/bases.json";
import creamers from "../data/creamers.json";
import syrups from "../data/syrups.json";

interface Beverage {
  name: string;
  temperature: string;
  base: string;
  creamer: string;
  syrup: string;
}

export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    temps: temperatures,
    bases: bases,
    creamers: creamers,
    syrups: syrups,
    currentTemp: temperatures[0],
    currentBase: bases[0].name,
    currentCreamer: creamers[0].name,
    currentSyrup: syrups[0].name,
    beverageName: "",
    savedBeverages: [] as Beverage[],
    displayedBeverage: null as Beverage | null,
  }),

  actions: {
    makeBeverage() {
      if (!this.beverageName.trim()) {
        alert("Please enter a name for your beverage!");
        return;
      }
      
      this.savedBeverages.push({
        name: this.beverageName,
        temperature: this.currentTemp,
        base: this.currentBase,
        creamer: this.currentCreamer,
        syrup: this.currentSyrup,
      });
      
      this.displayedBeverage = this.savedBeverages[this.savedBeverages.length - 1];
      this.beverageName = "";
    },

    showBeverage(beverage: Beverage) {
      this.displayedBeverage = beverage;
      this.currentTemp = beverage.temperature;
      this.currentBase = beverage.base;
      this.currentCreamer = beverage.creamer;
      this.currentSyrup = beverage.syrup;
    },
  },
  
  persist: true,
});