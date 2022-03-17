import { get } from "./index";

export const fetchUsers = () => {
  return get("users");
};
