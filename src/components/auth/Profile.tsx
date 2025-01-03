
export type ProfileProp = {
  name: string;
};

const Profile = ({ name }: ProfileProp) => {
  return <div>Provate Profile. Namwa ka hai? {name}</div>;
};

export default Profile;
