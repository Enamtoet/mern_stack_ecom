import { Link } from "react-router-dom"
import CommonForm from "@/component/common/forms"
import { loginFormControls } from "@/config"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { loginUser } from "@/store/auth-slice"
import { useToast } from "@/hooks/use-toast"


const initialState ={
  email : '', 
  password : ''

}

function AuthLogin() {
 const [formData, setFormData] = useState(initialState)
 const dispatch = useDispatch()
  const { toast } = useToast()

function onSubmit(event){
  event.preventDefault()
 dispatch(loginUser(formData)).then((data)=>{
  if (data?.payload?.success){
    return toast({
      title : data?.payload?.message
    })
  }else {
    return toast({
      title : data?.payload?.message,
      variant: "destructive" 

    })
  }

 })
}
  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <img className="mx-auto w-40" src="../../../public/logo.png" alt="logo" />
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Sign in to account </h1>
        <p className="mt-2">You Don't have an account
          <Link className="font-medium text-primary ml-2 hover:underline" to ="../register">Register</Link>
        </p>
      </div>
      <CommonForm
       formControls={loginFormControls}
       buttonText={'Sign in '}
       formData={formData}
       setFormData={setFormData}
       onSubmit={onSubmit}
       />
    </div>
  )
}
export default AuthLogin