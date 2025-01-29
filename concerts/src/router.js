import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Basket from "@/views/Basket.vue";
import PaymentPage from "@/views/PaymentPage.vue";

const routes = [
    { path: "/", name: "Home", component: Home },
    { path: "/basket", name: "Basket", component: Basket },
    { path: "/payment", name: "Payment", component: PaymentPage },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
