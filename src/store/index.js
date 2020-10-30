import Vue from 'vue';
import Vuex from 'vuex';

// пример импорта из './module-example'

Vue.use(Vuex);

/*
 * При отсутствии построения в режиме SSR 
 * можно непосредственно экспортировать экземпляр Store
 */

export default function( /* { ssrContext } */ ) {
    const Store = new Vuex.Store({
        modules: {
            // пример
        },

        // включить строгий режим только для 
        // режима разработки  (лишние издержки!)
        strict: process.env.DEV
    });

    return Store;
}