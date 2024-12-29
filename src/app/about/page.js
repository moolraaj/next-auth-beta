import { auth } from "@/auth"
import { logoutProvider } from "@/components/actions/Actions"
import { redirect } from "next/navigation"

 

async function page() {
    const session=await auth()
    if(!session.user) redirect('/')
        
  return (
    <div>
       welcome, {session.user.name}

       <form action={logoutProvider}>
        <button type="submit">logout {session.user.name}</button>
       </form>
 
    </div>
  )
}

export default page
