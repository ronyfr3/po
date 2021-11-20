import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AdminNavbar from '../components/AdminNavbar';
import AdminSidebar from '../components/AdminSidebar';
import './AdminProductDetailsScreen.css';

const AdminProductDetailsScreen = ({ match }) => {
  const { products } = useSelector((state) => state.productsReducer);
  const singleProduct = products.filter(
    (product) => product._id === match.params.id,
  );

  return (
    <section className='adminProductDetailsSection'>
      <AdminSidebar />
      <div className='adminProductDetailsRight'>
        <AdminNavbar />
        <div className='adminProductDetails'>
          <div>
            <h4>PRODUCT DETAILS</h4>
          </div>
          {/* <div> */}
          {/* <Link to="/admin/productcreate" className="btn addNewBtn">+ ADD NEW</Link> */}
          {/* </div> */}
        </div>
        <div className='adminProductDetailsWithPictures'>
          <div className='adminProductDetailsWrapper'>
            <div className='leftAdminProductDetails'>
              <div className='bigOne'>
                {/* <img src="/images/m416.png" alt="" /> */}
                <img
                  src={
                    `${process.env.PUBLIC_URL}` +
                    `/uploads/${singleProduct[0]?.files?.files[0].filename}`
                  }
                  alt=''
                />
              </div>
              <div className='adminMultipleImage'>
                {singleProduct[0]?.productInfo?.image?.map((image) => (
                  <div className='img'>
                    <img src={image} alt='' />
                  </div>
                ))}
              </div>
            </div>
            <div className='rightAdminProductDetails'>
              <div className='rightAdminProductDetailsHead'>
                <div className='left-head'>
                  <h5>PRODUCT NAME:</h5>
                </div>
                <div className='button-edit'>
                  <Link
                    to={`/admin/productupdate/${match.params.id}`}
                    className='btn editBtn'
                  >
                    EDIT INFO
                  </Link>
                </div>
              </div>
              <div className='name-product'>
                <h3>{singleProduct[0]?.productInfo?.title}</h3>
              </div>
              <div className='info-product-section'>
                <div className='head-product-info'>
                  <h5>PRODUCT INFO</h5>
                </div>
                <ul>
                  <li>
                    {/* <span>Serial no.:</span> <span>#1231234</span> */}
                  </li>
                  <li>
                    <span>Category:</span>{' '}
                    <span>{singleProduct[0]?.category}</span>
                  </li>
                  <li>
                    <span>Sub-category:</span>{' '}
                    <span>{singleProduct[0]?.subcategory}</span>
                  </li>
                  <li>
                    <span>Brand:</span> <span>{singleProduct[0]?.brand}</span>
                  </li>
                </ul>
                <div className='description-product-info'>
                  <h5>Description:</h5>
                  <p>{singleProduct[0]?.productInfo?.shortdescription}</p>
                </div>
              </div>
              <div className='info-sales-section'>
                <div className='head-sales-info'>
                  <h5>SALES INFO</h5>
                </div>
                <ul>
                  <li>
                    <span>Price:</span>{' '}
                    <span>${singleProduct[0]?.productInfo?.price} AUD</span>
                  </li>
                  <li>
                    <span>Availability:</span> <span>In Stock</span>
                  </li>
                  <li>
                    <span>Amount:</span> <span>25 pcs</span>
                  </li>
                </ul>
              </div>
              <div className='specification-section'>
                <div className='head-specification'>
                  <h5>SPECIFICATION</h5>
                </div>
                <ul>
                  {singleProduct[0]?.productInfo?.info?.name?.map((name) => (
                    <li>{name}</li>
                  ))}
                </ul>
                <ul>
                  {singleProduct[0]?.productInfo?.info?.values?.map((value) => (
                    <li>{value}</li>
                  ))}
                </ul>
              </div>
              <div className='blabla'>
                <p>{singleProduct[0]?.productInfo?.longdescription}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminProductDetailsScreen;
