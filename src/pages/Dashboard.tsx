import { Appbar } from "../components/AppBar";
import { Balance } from "../components/Balance";

export const Dashboard = () => {
  return (
    <div>
      <Appbar />
      <Balance value={4000} />
    </div>
  );
};
