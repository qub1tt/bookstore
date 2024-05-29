import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BooksDetailContainer from "./containers/book.detail.container";
import CartContainer from "./containers/cart.container";
import ProfileContainer from "./containers/profile.container";
import NotFound from "./components/404/NotFound";
import LoginRegisterContainer from "./containers/login.container";
import VerifyRegisterAccountContainer from "./containers/verify.register.container";
import VerifyPaymentContainer from "./containers/verify.payment.container";
import ForgotPasswordContainer from "./containers/forgot.password.container";
import HistoryPurchase from "./containers/history.purchase.container";
import HomePageContainer from "./containers/home.container";
import CategoryContainer from "./containers/category.container";
import BookPageContainer from "./containers/allbook.container";
import BookPageContaineraz from "./containers/allbookaz.container";
import BookPageContainerza from "./containers/allbookza.container";
import BookPageContainerhighlow from "./containers/allbookhighlow.container";
import BookPageContainerlowhigh from "./containers/allbooklowhigh.container";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePageContainer />} />
        <Route path="/book/:id" element={<BooksDetailContainer />} />
        <Route path="/cart" element={<CartContainer />} />
        <Route path="/profile/:email" element={<ProfileContainer />} />
        <Route path="/loading" element={<NotFound />} />
        <Route path="/login" element={<LoginRegisterContainer />} />
        <Route path="/forgotpass/" element={<ForgotPasswordContainer />} />
        <Route
          path="/confirm/:token"
          element={<VerifyRegisterAccountContainer />}
        />
        <Route path="/payment/:token" element={<VerifyPaymentContainer />} />

        <Route path="/purchase_history" element={<HistoryPurchase />} />
        <Route path="/category/:id" element={<CategoryContainer />} />
        <Route path="/allbook/page/:pageNumber" element={<BookPageContainer />}/>
        <Route path="/allbook/page/az/:pageNumber" element={<BookPageContaineraz />}/>
        <Route path="/allbook/page/za/:pageNumber" element={<BookPageContainerza />}/>
        <Route path="/allbook/page/priceHighToLow/:pageNumber" element={<BookPageContainerhighlow />}/>
        <Route path="/allbook/page/priceLowToHigh/:pageNumber" element={<BookPageContainerlowhigh />}/>
      </Routes>
    </Router>
  );
};

export default App;
