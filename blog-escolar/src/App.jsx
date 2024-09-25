import { useEffect, useState } from "react";
import { supabase } from "./lib/helper/supabaseClient";

export default function App() {
 const [user, setUser] = useState(null);

 useEffect(() => {
   const session = supabase.auth.getSession();
   setUser(session?.user);
   const {
     data: { subscription },
   } = supabase.auth.onAuthStateChange((event, session) => {
     switch (event) {
       case "SIGNED_IN":
         setUser(session?.user);
         break;
       case "SIGNED_OUT":
         setUser(null);
         break;
       default:
     }
   });
   return () => {
     subscription.unsubscribe();
   };
 }, []);


 const login = async () => {
   await supabase.auth.signInWithOAuth({
     provider: "github",
   });
 };
 const logout = async () => {
   await supabase.auth.signOut();
 };


 return (
   <div>
     {user ? (
       <div>
         <h1>Authenticated</h1>
         <button onClick={logout}>Logout</button>
       </div>
     ) : (
       <button onClick={login}>Login with Github</button>
      )}
      </div>
    );
   }
   
 /* useEffect(() => {
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
);*/
