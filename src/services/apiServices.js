import API_BASE_URL from "api/baseUrl";
import ENDPOINT from "api/endpoints/products";
import { Header } from "helpers/headerHelper";
import * as services from "helpers/axiosHelper";

export const getProductList = async () => {
  try {
    const request = await services.GET(
      `${API_BASE_URL}${ENDPOINT.products}?limit=10`
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

export const getJobListByParams = async (isFullTime, desc, loct) => {
  try {
    const request = await services.GET(
      `${API_BASE_URL}${ENDPOINT.getJobList}?full_time=${isFullTime}&description=${desc}&location=${loct}&page=1`,
      Header()
    );
    if (request.status === 200) {
      const { data } = request;
      return data;
    }
  } catch (error) {
    console.log(error, "err");
  }
};

export const getDetailJob = async (id) => {
  try {
    const request = await services.GET(
      `${API_BASE_URL}${ENDPOINT.getDetailJob}/${id}`,
      Header()
    );
    if (request.status === 200) {
      const { data } = request;
      return data;
    }
  } catch (error) {
    console.log(error, "err");
  }
};
