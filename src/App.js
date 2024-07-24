import { useForm } from "react-hook-form"


export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()


  const onSubmit = (data) => console.log(data)


  console.log(watch("example")) 


  return (
    
    <form onSubmit={handleSubmit(onSubmit)}>
        {/* a, form submit -> input / button */}
      <ul>
        <li>
          <label htmlFor="">성함</label>
          <input defaultValue="기본값" {...register("wr_name")} />
          {/* register 가 name 이다 {...register("데이터베이스필드명")}*/}
        </li>        

        <li>
          <label htmlFor="">아이디</label>
          <input {...register("wr_id", { required: true })} />
        </li>

        <li>
          {errors.wr_id && <span>This field is required</span>}
          <input type="submit" value='회원가입' />
        </li>      
      </ul>   
        
    </form>
      
  )
}