import Input from "./Input";
import {useForm} from "react-hook-form";

function Signup() {
  // const create = async (data) => {
  //   try {
  //     const userData = await authService.createAccount(data);
  //     if (userData) {
  //       console.log("create account data : ", userData);
  //       // const userData = await authService.getCurrentUser()
  //       // if(userData) dispatch(login(userData));
  //       // navigate("/")
  //     }
  //   } catch (error) {
  //     console.log("create account error => ", error);
  //   }
  // };

  // useEffect(() => {
  //   const data = {
  //     email: "one@one.com",
  //     password: "12345678",
  //     name: "one",
  //   }
  //   create(data);
  // },[])

  const {register, handleSubmit} = useForm();

   const create = async (data) => {
    try {
     console.log(data);
     
    } catch (error) {
      console.log("create account error => ", error);
    }
  };
  
  return <>
  <form onSubmit={handleSubmit(create)}>
    <Input />
  </form>
  </>;
}

export default Signup;
