import { Routes, Route } from 'react-router-dom'

import { PersonalPage } from './PersonalPage'
import { ProfilePage } from './ProfilePage'
import { TradePage } from './TradePage'
import { ReportPage } from './ReportPage'
import { TestPage } from './TestPage'

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<PersonalPage />} />
      <Route path="/trade" element={<TradePage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/report" element={<ReportPage />} />
      <Route path="/test" element={<TestPage />} />
    </Routes>
  )
}
