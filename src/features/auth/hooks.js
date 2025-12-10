import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "@/services/product";
import { selectCurrentUser } from "./select";

export const useFetchCurrentUser = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);
};

export const useCurrent = () => {
  const user = useSelector(selectCurrentUser);
  return user;
};
