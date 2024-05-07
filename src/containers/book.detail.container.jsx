import React, { useEffect, Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import BookDetailsPage from "../pages/BookDetails";
import * as productActions from "../API/product.action";
import { useParams } from "react-router-dom";

const BooksDetailContainer = ({
  mproductDetail,
  nameCategory,
  namePublisher,
  nameAuthor,
  productActions,
}) => {
  const { id } = useParams();

  useEffect(() => {
    productActions.getBookDetail(id);
    productActions.getBookRelated(id);
    productActions.getCommentByIDBook(id);
  }, [id, productActions]);

  useEffect(() => {
    if (mproductDetail) {
      productActions.getNameCategoryByID(mproductDetail.id_category);
      productActions.getNamePubliserByID(mproductDetail.id_nsx);
      productActions.getNameAuthorByID(mproductDetail.id_author);
    }
  }, [mproductDetail, productActions]);

  if (mproductDetail && nameCategory && namePublisher && nameAuthor) {
    return (
      <div>
        <BookDetailsPage
          mproductDetail={mproductDetail}
          nameCategory={nameCategory}
          namePublisher={namePublisher}
          id_book={id}
          nameAuthor={nameAuthor}
        />
      </div>
    );
  }

  return null;
};

const mapStateToProps = (state) => ({
  mproductDetail: state.bookReducers.book.productDetail,
  nameCategory: state.bookReducers.book.nameCategory,
  namePublisher: state.bookReducers.book.namePublisher,
  nameAuthor: state.bookReducers.book.nameAuthor,
});

const mapDispatchToProps = (dispatch) => ({
  productActions: bindActionCreators(productActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BooksDetailContainer);
