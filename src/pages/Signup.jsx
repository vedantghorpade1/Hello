import signupImg from "../assets/Images/lasdf.jpg"
import Template from "../components/core/Auth/Template"

function Signup() {
  return (
    <Template
      title="Join thousands transforming with City Gym — start free."
      description1="Build strength for today, endurance for tomorrow, and confidence for life."
      description2="Smart fitness solutions to future-proof your health and performance."
      image={signupImg}
      formType="signup"
    />
  )
}

export default Signup
