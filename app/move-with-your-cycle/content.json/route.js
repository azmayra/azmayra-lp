import { readFileSync } from 'fs'
import { join } from 'path'

export async function GET() {
  const content = readFileSync(join(process.cwd(), 'public', 'move-with-your-cycle-content.json'), 'utf8')
  return new Response(content, {
    headers: { 'Content-Type': 'application/json; charset=utf-8' }
  })
}
