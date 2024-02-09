import { ReactNode } from "react"
import { WordProvider} from '@/contexts/WordContext'
interface Props {
  children: ReactNode
}
export const Provider = ({children}:Props) => {
  return <WordProvider>{children}</WordProvider>
}