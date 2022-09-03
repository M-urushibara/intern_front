import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import Ye from "./ywpage";
import Bl from "./blpage"
import {TopPage} from "./toppage"
import SearchTL from './searchtl'
import {NotFound} from './NotFound'
import  {ProductPage} from './ProductPage'

const App: React.FC = () => {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<TopPage/>}/>
              <Route path="ywpage" element={<Ye />} />
              <Route path="blpage" element={<Bl />} />
              <Route path="not" element={<NotFound />} />
            <Route path="product" element={<ProductPage />} />
          </Routes>
      </BrowserRouter>
  )
}

export default App


