import { getCurrentUser } from "@/services/product";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "./select";

export const useFetchCurrentUser = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);
};

export const useCurrent = () => {
  const currentUser = useSelector(selectCurrentUser);
  return currentUser;
};
