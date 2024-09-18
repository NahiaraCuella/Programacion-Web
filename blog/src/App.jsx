import { useEffect, useState } from "react";
import { supabase } from "./lib/helper/supabaseClient";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.log(error);
      } else {
        setUser(data?.session?.user);
      }
    };
    getSession();
  }, []);

  const handleClick = async () => {
    const { data, error } = supabase.auth.signInWith0Auth({
      provider: "github",
    });
  };
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
}
return (
  <>
    <>
      <header>
        este es el header
        <button onClick={handleClick}>Conectar con github</button>
      </header>
    </>
  </>
);
