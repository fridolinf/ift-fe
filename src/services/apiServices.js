import API_BASE_URL from "api/baseUrl";
import ENDPOINT from "api/endpoints/products";
import * as services from "helpers/axiosHelper";

export const getCountProduct = async () => {
  try {
    const request = await services.GET(`${API_BASE_URL}${ENDPOINT.products}`);
    if (request.status === 200) {
      const { data } = request;
      return data.length;
    }
  } catch (error) {
    console.log(error, "err");
  }
};
export const getProductList = async (limit, sort) => {
  try {
    const request = await services.GET(
      `${API_BASE_URL}${ENDPOINT.products}?limit=${limit}&sort=${sort}`
    );
    if (request.status === 200) {
      const { data } = request;
      return data;
    }
  } catch (error) {
    console.log(error, "err");
  }
};

export const getDetailProduct = async (id) => {
  try {
    const request = await services.GET(
      `${API_BASE_URL}${ENDPOINT.products}/${id}`
    );
    if (request.status === 200) {
      const { data } = request;
      return data;
    }
  } catch (error) {
    console.log(error, "err");
  }
};
