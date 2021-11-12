import withAuth from "../components/withAuth";

function Cart() {
  return (
    <div>
      <h1>Hello User</h1>
      <h1>User Cart</h1>
    </div>
  );
}

export default withAuth(Cart);
