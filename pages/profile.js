import withAuth from "../components/withAuth";
function Profile() {
  return (
    <div>
      <h1>User Profile</h1>
    </div>
  );
}

export default withAuth(Profile);
