export default function Members(props:{userInitials:string ,name:string,userType:string ,status:string}) {
  return (
    <>
        <section id="card-controler">
          <section id="cart-avatar">{props.userInitials}</section>
          <p id="card-name">{props.name}</p>
          <p id="card-user-type">{props.userType}</p>
          <p id="card-status">{props.status}</p>
          <button id="card-button">Role</button>
        </section>
    </>
  );
}
