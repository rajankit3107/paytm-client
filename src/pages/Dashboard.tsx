import { Appbar } from "../components/AppBar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";

export const Dashboard = () => {
  return (
    <div>
      <Appbar />
      <Balance value={4000} />
      <Users />
    </div>
  );
};
