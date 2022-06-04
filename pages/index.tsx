import type { NextPage } from 'next'
import { Chat, Menu } from '../components'

const Home: NextPage = () => (
  <div id="main" className="grid h-screen w-full grid-cols-12 gap-0">
    <Menu />
    <Chat />
  </div>
)
export default Home
