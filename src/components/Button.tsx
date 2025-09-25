interface ButtonProps {
  color: string,
  label: string,
}

const handleClick = (label: string) => {
  console.log(`Button clicked: ${label}`)
}

const Button = ({ color, label }: ButtonProps) => {
  return (
    <div>
      <button style={{ backgroundColor: color, color: "white"}} onClick={() => handleClick(label)} >{label}</button>
    </div>
  )
}

export default Button
