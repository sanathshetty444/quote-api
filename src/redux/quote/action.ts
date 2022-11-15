import axios from "axios";
import { Dispatch } from "redux";
import { Category, CategoryDescription } from "./type";
import {
  ERROR,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORY_SUCCESS,
  HIDE_LOADER,
  SHOW_LOADER,
} from "./types";

export const showLoader = () => {
  return {
    type: SHOW_LOADER,
  };
};
export const hideLoader = () => {
  return {
    type: HIDE_LOADER,
  };
};
export const fetchedCategorySuccessfully = (payload: CategoryDescription) => {
  return {
    type: FETCH_CATEGORY_SUCCESS,
    payload,
  };
};
export const fetchedCategoriesSuccessfully = (payload: Category[]) => {
  return {
    type: FETCH_CATEGORIES_SUCCESS,
    payload,
  };
};
export const showError = () => {
  return {
    type: ERROR,
  };
};
export const fetchCategories = () => {
  return async function (dispatch: Dispatch) {
    try {
      dispatch(showLoader());
      const response = await axios.get(
        "https://qodapi.azurewebsites.net/api/Categories"
      );
      console.log(response);
      dispatch(fetchedCategoriesSuccessfully(response.data));
    } catch (error) {
      dispatch(showError());
    } finally {
      dispatch(hideLoader());
    }
  };
};
export const fetchCategory = (category: string) => {
  return async function (dispatch: Dispatch) {
    try {
      dispatch(showLoader());
      const response = await axios.get(
        `https://qodapi.azurewebsites.net/api/Quote/${category}`
      );
      console.log(response);

      dispatch(fetchedCategorySuccessfully(response.data));
    } catch (error) {
      dispatch(showError());
    } finally {
      dispatch(hideLoader());
    }
  };
};
