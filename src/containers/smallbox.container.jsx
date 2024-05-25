import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActions from "../API/product.action";
import * as userActions from "../API/user.action";
import Loading from "../components/loading/Loading";
import SmallBoxDetail2 from "../components/SmallBoxDetail/SmallBoxDetail2";

const SmallBoxContainer = ({
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
        <SmallBoxDetail2
          mproductDetail={mproductDetail}
          bookId={bookId}  // Pass bookId to SmallBoxDetail2
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
)(SmallBoxContainer);
