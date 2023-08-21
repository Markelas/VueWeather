import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    city: [
      "Kazan",
      "Moscow",
      "Barnaul",
      "Neftekamsk",
      "Ufa",
      "Saint Petersburg",
      "Irkutsk",
      "Omsk",
      "Magadan",
      "Novorossiysk",
    ],
    activeCity: "",
    cityTemp: "",
  },
  getters: {},
  mutations: {
    updTemp(state, context) {
      state.cityTemp = context;
    },
  },
  actions: {
    async loadWeather(context, payload) {
      //Передаём выбранный город
      console.log(payload);
      try {
        const { data } = await axios.get(
          `http://api.weatherapi.com/v1/current.json?key=7826d28b54cf46c3ba2174336232108&q=${payload}`
        );
        const temp = data.current.temp_c; //Получаем температуру
        console.log(temp);
        context.commit("updTemp", temp); //Передаём значение температуры в мутации, для изменения state
      } catch (e: any) {
        console.log(e.message);
      }
    },
  },
  modules: {},
});
