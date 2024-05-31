import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import BookDetailsPage from "../pages/BookPage/BookDetails";
import * as productActions from "../API/product.action";
import * as userActions from "../API/user.action";
import { useParams } from "react-router-dom";
import Loading from "../components/loading/Loading";

const BooksDetailContainer = ({
  actions,
  mproductDetail,
  nameCategory,
  namePublisher,
  nameAuthor,
  productActions,
  page,
  islogin,
  comment,
  totalpage,
}) => {
  const { id } = useParams();

  useEffect(() => {
    actions.auth();
    productActions.getBookDetail(id);
    productActions.getBookRelated(id);
    productActions.getCommentByIDBook(id);
  }, [id, productActions, actions]);

  useEffect(() => {
    if (mproductDetail) {
      productActions.getNameCategoryByID(mproductDetail.id_category);
      productActions.getNamePublisherByID(mproductDetail.id_nsx);
      productActions.getNameAuthorByID(mproductDetail.id_author);
    }
  }, [mproductDetail, productActions]);

  useEffect(() => {
    productActions.getCommentByIDBook(id);
  }, [id, page, productActions]);

  if (mproductDetail && nameCategory && namePublisher && nameAuthor) {
    return (
      <div>
        <BookDetailsPage
          mproductDetail={mproductDetail}
          nameCategory={nameCategory}
          namePublisher={namePublisher}
          islogin={islogin}
          logout={() => actions.logout()}
          id_book={id}
          submitComment={(name, comment, id_book) =>
            productActions.submitComment(name, comment, id_book)
          }
          comment={comment}
          nameAuthor={nameAuthor}
          addToCart={(product) => productActions.addToCart(product)}
          totalpage={totalpage}
          page={page}
          backPage={() => productActions.backPage()}
          nextPage={() => productActions.nextPage()}
          setPage={(page) => productActions.setPage(page)}
        />
      </div>
    );
  } else {
    return <Loading />;
  }
};

const mapStateToProps = (state) => ({
  mproductDetail: state.bookReducers.book.productDetail,
  nameCategory: state.bookReducers.book.nameCategory,
  namePublisher: state.bookReducers.book.namePublisher,
  nameAuthor: state.bookReducers.book.nameAuthor,
  islogin: state.userReducers.login.islogin,
  comment: state.bookReducers.book.comment,
  totalpage: state.bookReducers.book.totalpage,
  page: state.bookReducers.book.page,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(userActions, dispatch),
  productActions: bindActionCreators(productActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BooksDetailContainer);
