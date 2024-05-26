import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActions from "../API/product.action";
import * as userActions from "../API/user.action";
import Loading from "../components/loading/Loading";
import Modal from "../components/Modal/Modal";

const ModalContainer = ({
    bookId,
    actions,
    mproductDetail,
    nameAuthor,
    productActions,
    closeModal // Receive closeModal as a prop
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
                <Modal
                    mproductDetail={mproductDetail}
                    nameAuthor={nameAuthor}
                    addToCart={productActions.addToCart} // Pass addToCart action
                    closeModal={closeModal} // Pass closeModal to Modal
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
)(ModalContainer);
