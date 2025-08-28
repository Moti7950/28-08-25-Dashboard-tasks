import Members from "./Members.tsx";

export default function Main(props:{statusNow:boolean}) {
  return (
    <>
      <section id="members-controler">
        <Members
          userInitials="AR"
          name="Alex Rivera"
          userType="Leader"
          status="active"
        />
        <Members
          userInitials="CK"
          name="Casey Kim"
          userType="Member"
          status="unactive"
        />
        {props.statusNow && <Members
          userInitials="CK"
          name="Jordan Lee "
          userType="Member"
          status="Inactive"
        />}
        <Members
          userInitials="SC"
          name="Sam Cohen"
          userType="Guest"
          status="Active"
        />
        {props.statusNow && <Members
          userInitials="TB"
          name="Taylor Brooks "
          userType="Guest"
          status="Inactive"
        />}
      </section>
    </>
  );
}
