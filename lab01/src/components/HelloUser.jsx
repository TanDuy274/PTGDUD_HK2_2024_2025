import { useState } from "react";

function HelloUser() {
  const [name, setName] = useState("");

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault(),
            setName("Hello " + event.target.querySelector(".ipName").value);
        }}
      >
        <input type="text" className="ipName" />
        <button type="submit">Click</button>
      </form>

      <span>{name}</span>
    </>
  );
}

export default HelloUser;
