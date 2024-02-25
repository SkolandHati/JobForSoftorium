import { defineStore } from 'pinia'
import axios from "axios";

export const useStore = defineStore('store', {
    state: () => ({
        data: null
    }),

    actions: {
        async getDataFromDataBase() {
            const config = {
                "Content-Type": "application/json",
            }
            await axios
                .get(`https://newsite.softorium.pro/admin-area/api/visitor/vacancy/`, config)
                .then(response => (this.data = response.data));
        },
    }
})