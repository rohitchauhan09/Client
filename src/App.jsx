import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Signup from "./Pages/Signup.jsx";
import Login from "./Pages/Login.jsx";
import Error from "./Pages/Error.jsx";
import Dashboard from "./Components/Dashboard/Dashboard.jsx";
import MailVerficationSucess from "./Components/MailVerification/MailVerficationSucess.jsx";
import MailVerificationFailed from "./Components/MailVerification/MailVerificationFailed.jsx";
import { Toaster } from "react-hot-toast";
import EnterEmail from "./Components/Reset Password/EnterEmail.jsx";
import EnterOtp from "./Components/Reset Password/EnterOtp.jsx";
import ResetPassword from "./Components/Reset Password/ResetPassword.jsx";
import { EmailProvider } from "./Components/Context Api Store/EmailContext.jsx";
import MailVerification from "./Components/MailVerification/MailVerification.jsx";
import CreateBlog from "./Components/Dashboard/CreateBlog.jsx";
import BlogCard from "./Components/Dashboard/BlogCard.jsx";
import HomeDashboard from "./Components/Dashboard/HomeDashboard.jsx";
import Upload from "./Components/Dashboard/Upload.jsx";
import LatestBlogs from "./Components/Latest/LatestBlogs.jsx";
import About from "./Pages/About.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path:"/about",
    element: <About/>

  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "homedashboard",
        element: <HomeDashboard />,
      },
      {
        path: "createblogs",
        element: <CreateBlog />,
      },
      {
        path: "viewblogs",
        element: <BlogCard />,
      },
    ],
  },
  {
    path: "/mailverification",
    element: <MailVerification />,
  },
  {
    path: "/mailverified",
    element: <MailVerficationSucess />,
  },
  {
    path: "/mailnotverified",
    element: <MailVerificationFailed />,
  },
  {
    path: "*",
    element: <Error />,
  },
  {
    path: "/sendotp",
    element: <EnterEmail />,
  },
  {
    path: "/verifyotp",
    element: <EnterOtp />,
  },
  {
    path: "/resetpassword",
    element: <ResetPassword />,
  },
  {
    path: "/upload",
    element: <Upload />,
  },
  {
    path: "latestblogs",
    element: <LatestBlogs />,
  },
]);

const App = () => {
  return (
    <EmailProvider>
      <RouterProvider router={router} />
      <Toaster position="top-right" />
    </EmailProvider>
  );
};

export default App;
