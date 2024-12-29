'use server'

import { signIn, signOut } from "@/auth"

export async function loginWithProvider(formData){
    let action=formData.get('action')
    await signIn(action,{redirectTo:'/about'})
 
}
export async function logoutProvider(){
    await signOut({redirectTo:'/'})
}