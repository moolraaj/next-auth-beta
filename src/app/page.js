import { loginWithProvider } from "@/components/actions/Actions";
 

export default function Home() {
  return (
   <>
   <form action={loginWithProvider}>
    <button type='submit' name='action' value='google'>login with google</button><br/>
    <button type='submit' name='action' value='github'>login with github</button>
   </form>
   </>
  );
}
