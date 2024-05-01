import React, { FC } from "react";
import "./App.scss"
import AppRoutes from "./routes/AppRoutes";
import AuthProvider from "./routes/Auth";
const App: FC = () => {

  return (
    <>
      <AppRoutes />
    </>
  )
}
export default App