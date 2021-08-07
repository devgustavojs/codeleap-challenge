import './styles.scss'


interface ButtonProps {
  value: string,
}

export function Button({value, ...rest}: ButtonProps){

  return(
    <button>{value}</button>

  )

}