import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            concerts: [
                {
                    id: 1,
                    name: "The Weeknd",
                    city: "Los Angeles",
                    date: "10 June 2025",
                    time: "19:00",
                    price: 150,
                    image: "https://www.billboard.com/wp-content/uploads/2022/12/the-weeknd-after-hours-tour-2022-billboard-1548.jpg",
                },
                {
                    id: 2,
                    name: "Coldplay",
                    city: "Copenhagen",
                    date: "12 May 2025",
                    time: "18:00",
                    price: 135,
                    image: "https://i.scdn.co/image/ab6761610000e5eb1ba8fc5f5c73e7e9313cc6eb",
                },
                {
                    id: 3,
                    name: "Travis Scott",
                    city: "Sao Paulo",
                    date: "15 September 2025",
                    time: "20:30",
                    price: 170,
                    image: "https://www.aljazeera.com/wp-content/uploads/2021/11/AP21310133188103.jpg?resize=770%2C513&quality=80",
                },
                {
                    id: 4,
                    name: "Kendrick Lamar",
                    city: "Toronto",
                    date: "28 August 2025",
                    time: "18:00",
                    price: 190,
                    image: "https://www.rollingstone.com/wp-content/uploads/2022/12/Kendrick-Lamar-OSHEAGA.jpg?w=500&h=375&crop=1",
                },
                {
                    id: 5,
                    name: "Bruno Mars",
                    city: "London",
                    date: "25 June 2025",
                    time: "19:00",
                    price: 145,
                    image: "https://people.com/thmb/pIbnj5ES_mpVxAC_z1yVWSCh0nE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(499x0:501x2)/Bruno-Mars-121123-tout-622c757ac3564da8b72a007daa2e216e.jpg",
                },
                {
                    id: 6,
                    name: "Metro Boomin",
                    city: "Dubai",
                    date: "5 February 2025",
                    time: "20:00",
                    price: 100,
                    image: "https://www.billboard.com/wp-content/uploads/2024/06/metro-boomin-press-credit-nabil-1-2024-billboard-1548.jpg",
                },
                {
                    id: 7,
                    name: "Tyler,The Creator",
                    city: "Berlin",
                    date: "7 June 2025",
                    time: "19:00",
                    price: 110,
                    image: "https://media.pitchfork.com/photos/60df879d316238f6226d2605/master/pass/TylerTheCreator_GettyImages-1325814253.jpg",
                },
                {
                    id: 8,
                    name: "Travis Scott",
                    city: "Los Angeles",
                    date: "3 September 2025",
                    time: "20:00",
                    price: 190,
                    image: "https://www.aljazeera.com/wp-content/uploads/2021/11/AP21310133188103.jpg?resize=770%2C513&quality=80",
                },
                {
                    id: 9,
                    name: "The Weeknd",
                    city: "Paris",
                    date: "29 June 2025",
                    time: "19:00",
                    price: 140,
                    image: "https://www.billboard.com/wp-content/uploads/2022/12/the-weeknd-after-hours-tour-2022-billboard-1548.jpg",
                },
            ],
            cart: []
        };
    },
    getters: {
        getConcerts(state) {
            return state.concerts;
        },
        getCart(state) {
            return state.cart;
        },
        getTotalPrice(state) {
            return state.cart.reduce((total, item) => total + item.price, 0);
        },
        isInCart: (state) => (concertId) => {
            return state.cart.some(item => item.id === concertId);
        },
    },
    mutations: {
        addToCart(state, concert) {
            if (!state.cart.find(item => item.id === concert.id)) {
                state.cart.push(concert);
            }
        },
        removeFromCart(state, concertId) {
            state.cart = state.cart.filter(item => item.id !== concertId);
        },
    },
    actions: {
        addToCart({ commit }, concert) {
            commit("addToCart", concert);
        },
        removeFromCart({ commit }, concertId) {
            commit("removeFromCart", concertId);
        },
    },

});

export default store;
