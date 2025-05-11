import { WrapperContainer } from "./styles";
interface WrapperProps {
  children: React.ReactNode;
}

export function Wrapper({children}: WrapperProps) {
  return (
   <WrapperContainer>
    {children}
    </WrapperContainer>
  )
}
