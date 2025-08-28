export default function Header(props:{statusNow:boolean, setstatus:Function}) {
  return (
    <>
      <section id="Header-controler" >
        <h1>Campus Club Dashboard</h1>
        <input
          id="header-checkbox"
          type="checkbox"
          onClick={() => {
            props.setstatus(prev => !prev)
          }}
        />
        <label htmlFor="header-checkbox">Show only active members</label>
        <button id="header-List">List</button>
        <button id="header-Grid">Grid</button>
        <input type="text" placeholder="Serch members by name" />
      </section>
    </>
  );
}
