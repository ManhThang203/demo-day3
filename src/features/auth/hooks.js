import { getCurrentUser } from "@/services/product";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthFetching, selectAuthSlide } from "./select";

export const useFetchCurrentUser = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);
};

export const useCurrentUser = () => {
  const user = useSelector(selectAuthSlide);
  return user;
};

export const useFetching = () => {
  const fetching = useSelector(selectAuthFetching);
  return fetching;
};
