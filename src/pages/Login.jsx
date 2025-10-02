import loginImg from "../assets/Images/hope.webp"
import Template from "../components/core/Auth/Template"

function Login() {
  return (
    <Template
      title="Welcome Back"
      description1="Build strength for today, endurance for tomorrow, and confidence for life."
      description2="Smart fitness solutions to future-proof your health and performance."
      image={loginImg}
      formType="login"
    />
  )
}

export default Login
