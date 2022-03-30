import { Loader } from '../components/Loader'
import { Drawer } from '../components/Drawer'

export const TestPage = () => {
  return (
    <div>
      <h1>Test page</h1>

      <p>Spinner</p>
      <Loader />
      <Drawer />
    </div>
  )
}
