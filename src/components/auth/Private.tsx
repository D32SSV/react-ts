import Login from "./Login";
import { ProfileProp } from "./Profile";

type Props = {
  isLoggedIn: boolean;
  component: React.ComponentType<ProfileProp>;
};

export const Private = ({ isLoggedIn, component: Component }: Props) => {
  if (isLoggedIn) {
    return <Component name={"Bahubali"} />;
  } else
    return (
      <>
        <Login />
      </>
    );
};
