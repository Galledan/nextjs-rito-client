import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);
  console.log(session);
  
  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      }
    }
  }

  return {
    props: {session}
  }

}


export default function Home() {

  
  return (
   <div className="w-4/5 min-w-[800px] h-[865px] min-h-[600px] flex flex-row">
     <button onClick={() => signOut()} className="text-white">Sign Out</button>
   </div>
  );
}
