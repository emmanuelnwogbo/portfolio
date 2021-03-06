import Vuex from "vuex";
import AWS from "aws-sdk";

const s3 = new AWS.S3({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  Bucket: process.env.GALLERY_STORE
});

const createStore = () => {
  return new Vuex.Store({
    state: {
      current_content: null,
      current_route: "/",
      prev_route: null,
      advertising_photos: [],
      portrait_photos: [],
      product_photos: [],
      slide_items: [
        {
          id: 0,
          image:
            "https://images.unsplash.com/photo-1606845023594-4395299f0b23?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
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
      },
      setadvertisingPhotos(state, data) {
        state.advertising_photos = data;
      },
      setPortraitPhotos(state, data) {
        state.portrait_photos = data;
      },
      setProductPhotos(state, data) {
        state.product_photos = data;
      },
      setPrevRoute(state, data) {
        state.prev_route = data;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return (async function() {
          try {
            const advertising = await s3
              .listObjectsV2({
                Bucket: "advertising-samson",
                Prefix: "advertising"
              })
              .promise();

            const portraits = await s3
              .listObjectsV2({
                Bucket: "advertising-samson",
                Prefix: "potraits"
              })
              .promise();

            const products = await s3
              .listObjectsV2({
                Bucket: "advertising-samson",
                Prefix: "productphotos"
              })
              .promise();

            vuexContext.commit("setProductPhotos", products.Contents);
            vuexContext.commit("setadvertisingPhotos", advertising.Contents);
            vuexContext.commit("setPortraitPhotos", portraits.Contents);
          } catch (error) {
            //console.log(error, "there is error");
          }
        })();
      },
      setCurrentContentAction(vuexContext, content_data) {
        vuexContext.commit("setCurrentContent", content_data);
      },
      setRoute(vuexContext, route_data) {
        vuexContext.commit("setRoute", route_data);
      },
      setPrevRoute(vuexContext, route_data) {
        vuexContext.commit("setPrevRoute", route_data);
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
      },
      advertising_items(state) {
        return state.advertising_photos;
      },
      portrait_items(state) {
        return state.portrait_photos;
      },
      product_items(state) {
        return state.product_photos;
      },
      prev_route(state) {
        return state.prev_route;
      }
    }
  });
};

export default createStore;
