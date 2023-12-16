import {reactive} from 'vue';

export const useUi = reactive<{
    background: 'coffee_main' | 'none' | 'tea'
}>({
    background: 'none',
});