import { getCurrentUser } from "@/services/product";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthSlide } from "./select";

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
