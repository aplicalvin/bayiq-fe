import { useUserContext } from "./LoginSlice";
import { Navigate, Outlet } from "react-router-dom";
export const CekAuth = () => {
  const { state } = useUserContext();

  return !state.loading ? (
    <Outlet />
  ) : state.UserData.accessToken ? (
    <Navigate to="/login" replace />
  ) : (
    <Navigate to="/Unauthorize" replace />
  );
};
