import { revalidatePath } from "next/cache"
import { NextRequest } from "next/server"
export async function GET(request: NextRequest){

  const searchParams = request.nextUrl.searchParams

  const revalidate = searchParams.get('revalidate')

  if(revalidate === 'books'){
    revalidatePath('/books', 'page')
  }else{
    revalidatePath('/')
  }
  
  return Response.json({message: 'Revalidate ' + revalidate})
}