import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import HomePage from "./root/page";

// auth pages

import SignIn from "./auth/sign-in/page";
import SignUp from "./auth/sign-up/page";
import AuthLayout from "./auth/layout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ROOT "/" */}
        <Route path="/" element={<HomePage />} />

        {/* AUTH GROUP LIKE NEXT.JS (auth/) */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
