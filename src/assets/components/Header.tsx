export default function Header(props: {
  statusNow: boolean;
  setStatus: Function;
  modeCard: boolean;
  setList: Function;
}) {
  return (
    <>
      <h1>Campus Club Dashboard</h1>
      <section id="Header-controler">
        <input
          id="header-checkbox"
          type="checkbox"
          onClick={() => {
            props.setStatus((prev: boolean) => !prev);
          }}
        />
        <label htmlFor="header-checkbox">Show only active members</label>
        <button
          id="header-List"
          onClick={() => {
            props.setList(false);
          }}
        >
          List
        </button>
        <button
          id="header-Grid"
          onClick={() => {
            props.setList(true);
          }}
        >
          Grid
        </button>
        <input type="text" placeholder="Serch members by name" />
      </section>
    </>
  );
}
