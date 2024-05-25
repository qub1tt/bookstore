import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActions from "../API/product.action";
import * as userActions from "../API/user.action";
import Loading from "../components/loading/Loading";
import BestSeller2 from "../components/content2/BestSeller2";

const BestSellerContainer = ({
  bookId,  // Make sure bookId is received as a prop
  actions,
  mproductDetail,
  nameAuthor,
  productActions,
}) => {
    useEffect(() => {
        actions.auth();
        productActions.getBookDetail(bookId);
}, [bookId, productActions, actions]);
      


  useEffect(() => {
    if (mproductDetail) {
      productActions.getNameAuthorByID(mproductDetail.id_author);
    }
  }, [mproductDetail, productActions]);

  if (mproductDetail && nameAuthor) {
    return (
      <div>
        <BestSeller2
          mproductDetail={mproductDetail}
          bookId={bookId}
          nameAuthor={nameAuthor}
          addToCart={(product) => productActions.addToCart(product)}
        />
      </div>
    );
  } else {
    return <Loading />;
  }
};

const mapStateToProps = (state) => ({
  mproductDetail: state.bookReducers.book.productDetail,
  nameAuthor: state.bookReducers.book.nameAuthor,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(userActions, dispatch),
  productActions: bindActionCreators(productActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BestSellerContainer);
