type props = {
  status: "loading" | "error" | "success";
};
const Status = ({ status }: props) => {
  let msg;
  if (status === "loading") msg = "Loading...";
  else if (status === "success") msg = "Data Fetch success!";
  else if (status === "error") msg = "Error";
  else msg = "Unknown value";
  return <p>{msg}</p>;
};

export default Status;
