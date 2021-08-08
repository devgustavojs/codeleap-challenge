import './styles.scss'
interface ButtonProps {
  value: string,
  isActive: boolean,
  onClick?: | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
  | undefined;
}

export function Button({value, isActive, ...rest}: ButtonProps){

  return(
    <button className="componentButton" disabled={!isActive} {...rest}>{value}</button>
  )

}