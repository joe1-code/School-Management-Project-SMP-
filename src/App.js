import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './store';
import Login from "./home/login/login";
import Passcode from "./home/forgotPassword/forgotpass";
import Dashboard from "./dashboard/Admin/dashboard";
import ManagementPanel from "./dashboard/Admin/ManagePanel/management";
import RegisterGroup from "./home/registerGroup/registerGroup";
import Member from "./dashboard/Admin/Panel/Member/members";
import Regulations from "./dashboard/Admin/Panel/Regulations/regulations";
import AddWindow from "./dashboard/Admin/Panel/Window/addwindow";
import AccountantPanel from "./dashboard/Admin/Panel/Accountant/Accountant";
import Approve from "./dashboard/Admin/Panel/Accountant/approve";
import Debt from "./dashboard/Admin/ManagePanel/paydebt";
import Reset from "./home/forgotPassword/resetpass";
import Newwindow from "./dashboard/Admin/Panel/Window/newwindow";
import NewwindowTable from "./dashboard/tables/newwindowtable";
import Index from "./home/Index";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Index />}>
          <Route path="login" element={<Login />} />
          <Route path="forgotpassword" element={<Passcode />} />
          <Route path="resetpassword" element={<Reset />} />
        </Route>
        <Provider store={store}>
          <Passcode />
        </Provider>
        {/* <Route path="/" element={<Passcode />} /> */}
        <Route path="/registerGroup" element={<RegisterGroup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/paydebt" element={<Debt />} />
        <Route path="/panel" element={<ManagementPanel />} />
        <Route path="/members" element={<Member />} />
        <Route path="/regulations" element={<Regulations />} />
        <Route path="/window" element={<AddWindow />} />
        <Route path="/regwindow" element={<Newwindow />} />
        <Route path="/accountant" element={<AccountantPanel />} />
        <Route path="/approve" element={<Approve />} />
        <Route path="/resetpassword" element={<Reset />} />
        <Route path="/virtuoso" element={<NewwindowTable />} />
      </Routes>

    </div>

  )

}

export default App;