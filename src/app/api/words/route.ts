export async function GET() {
  return Response.json([
    {
      id: 1,
      name: 'lucas'
    },
    {
      id: 2,
      name: 'marcos'
    }
  ])
}