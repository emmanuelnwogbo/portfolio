import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      current_content: null,
      current_route: "/",
      slide_items: [
        {
          id: 0,
          image:
            "https://images.unsplash.com/photo-1532017737543-8743f2938776?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=635&q=80"
        },
        {
          id: 1,
          image:
            "https://images.unsplash.com/photo-1564271239004-2071332b16af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        },
        {
          id: 2,
          image:
            "https://images.unsplash.com/photo-1528750717929-32abb73d3bd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
          id: 3,
          image:
            "https://images.unsplash.com/photo-1554866585-cd94860890b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80"
        },
        {
          id: 4,
          image:
            "https://images.unsplash.com/photo-1548364538-60b952c308b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        },
        {
          id: 5,
          image:
            "https://images.unsplash.com/photo-1550634487-24e377301911?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"
        }
      ]
    },
    mutations: {
      setCurrentContent(state, data) {
        state.current_content = data;
      },
      setRoute(state, data) {
        state.current_route = data;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        vuexContext.commit("setCurrentContent", {
          id: 0,
          name: "photography",
          photo:
            "https://images.unsplash.com/photo-1587366802383-2e3e3e07aaf5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        });
      },
      setCurrentContentAction(vuexContext, content_data) {
        vuexContext.commit("setCurrentContent", content_data);
      },
      setRoute(vuexContext, route_data) {
        vuexContext.commit("setRoute", route_data);
      }
    },
    getters: {
      current_content(state) {
        return state.current_content;
      },
      current_route(state) {
        return state.current_route;
      },
      slide_items(state) {
        return state.slide_items;
      }
    }
  });
};

export default createStore;
