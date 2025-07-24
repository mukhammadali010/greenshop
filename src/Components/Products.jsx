import React, { useState } from 'react';
import img01 from '../assets/11.png';
import img02 from '../assets/15.png';
import img03 from '../assets/16.png';

const initialProducts = [
  {
    id: 1,
    name: 'Barberton Daisy',
    sku: '1995751877966',
    price: 119,
    image: img01,
    quantity: 2,
  },
  {
    id: 2,
    name: 'Blushing Bromeliad',
    sku: '19957518757065',
    price: 139,
    image: img02,
    quantity: 6,
  },
  {
    id: 3,
    name: 'Aluminum Plant',
    sku: '1995751877786',
    price: 179,
    image: img03,
    quantity: 9,
  },
];

export default function Products() {
  const [products, setProducts] = useState(initialProducts);
  const [coupon, setCoupon] = useState('');
  const shipping = 16;

  const handleQuantity = (id, delta) => {
    setProducts(products =>
      products.map(p =>
        p.id === id
          ? { ...p, quantity: Math.max(0, p.quantity + delta) }
          : p
      )
    ); 
  };

  const handleRemove = id => {
    setProducts(products => products.filter(p => p.id !== id));
  };

  const subtotal = products.reduce((sum, p) => sum + p.price * p.quantity, 0);
  const couponDiscount = 0;
  const total = subtotal - couponDiscount + shipping;

  return (
    <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start', fontFamily: 'inherit', padding: 32 }}>
      {/* Products Table */}
      <div style={{ flex: 2 }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #eaeaea' }}>
              <th style={{ textAlign: 'left', padding: 12 }}>Products</th>
              <th style={{ textAlign: 'left', padding: 12 }}>Price</th>
              <th style={{ textAlign: 'left', padding: 12 }}>Quantity</th>
              <th style={{ textAlign: 'left', padding: 12 }}>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map(p => (
              <tr key={p.id} style={{ borderBottom: '1px solid #f5f5f5' }}>
                <td style={{ padding: 12, display: 'flex', alignItems: 'center', gap: 16 }}>
                  <img src={p.image} alt={p.name} style={{ width: 56, height: 56, borderRadius: 8, objectFit: 'cover' }} />
                  <div>
                    <div style={{ fontWeight: 600 }}>{p.name}</div>
                    <div style={{ color: '#A5A5A5', fontSize: 13 }}>SKU: {p.sku}</div>
                  </div>
                </td>
                <td style={{ padding: 12, fontWeight: 500 }}>${p.price.toFixed(2)}</td>
                <td style={{ padding: 12 }}>
                  <button onClick={() => handleQuantity(p.id, -1)} style={btnStyle}>-</button>
                  <span style={{ margin: '0 12px', fontWeight: 500 }}>{p.quantity}</span>
                  <button onClick={() => handleQuantity(p.id, 1)} style={btnStyle}>+</button>
                </td>
                <td style={{ padding: 12, color: '#46A358', fontWeight: 600 }}>
                  ${(p.price * p.quantity).toLocaleString(undefined, { minimumFractionDigits: 2 })}
                </td>
                <td style={{ padding: 12 }}>
                  <button onClick={() => handleRemove(p.id)} style={trashBtnStyle} title="Remove">
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Cart Totals */}
      <div style={{
        flex: 1,
        background: '#fff',
        borderRadius: 8,
        padding: 24,
        minWidth: 320,
        boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
      }}>
        <div style={{ fontWeight: 600, fontSize: 18, marginBottom: 16, borderBottom: '1px solid #eaeaea', paddingBottom: 8 }}>
          Cart Totals
        </div>
        <div style={{ marginBottom: 16 }}>
          <div style={{ fontSize: 14, marginBottom: 6 }}>Coupon Apply</div>
          <div style={{ display: 'flex', gap: 8 }}>
            <input
              type="text"
              placeholder="Enter coupon code here..."
              value={coupon}
              onChange={e => setCoupon(e.target.value)}
              style={{
                flex: 1,
                padding: 8,
                border: '1px solid #46A358',
                borderRadius: 4,
                outline: 'none'
              }}
            />
            <button style={{
              background: '#46A358',
              color: '#fff',
              border: 'none',
              borderRadius: 4,
              padding: '0 20px',
              fontWeight: 600,
              cursor: 'pointer'
            }}>Apply</button>
          </div>
        </div>
        <div style={{ fontSize: 16, marginBottom: 8, display: 'flex', justifyContent: 'space-between' }}>
          <span>Subtotal</span>
          <span style={{ fontWeight: 600 }}>${subtotal.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
        </div>
        <div style={{ fontSize: 16, marginBottom: 8, display: 'flex', justifyContent: 'space-between' }}>
          <span>Coupon Discount</span>
          <span>(-) {couponDiscount.toFixed(2)}</span>
        </div>
        <div style={{ fontSize: 16, marginBottom: 8, display: 'flex', justifyContent: 'space-between' }}>
          <span>Shiping</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        <div style={{ fontSize: 13, color: '#46A358', marginBottom: 16, textAlign: 'right', cursor: 'pointer' }}>
          View shipping charge
        </div>
        <div style={{ fontSize: 20, fontWeight: 700, color: '#46A358', marginBottom: 24, display: 'flex', justifyContent: 'space-between' }}>
          <span>Total</span>
          <span>${total.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
        </div>
        <button style={{
          width: '100%',
          background: '#46A358',
          color: '#fff',
          border: 'none',
          borderRadius: 4,
          padding: '14px 0',
          fontWeight: 600,
          fontSize: 16,
          marginBottom: 12,
          cursor: 'pointer'
        }}>
          Proceed To Checkout
        </button>
        <div style={{ textAlign: 'center', color: '#46A358', cursor: 'pointer', fontSize: 15 }}>
          Continue Shopping
        </div>
      </div>
    </div>
  );
}

const btnStyle = {
  background: '#46A358',
  color: '#fff',
  border: 'none',
  borderRadius: '50%',
  width: 32,
  height: 32,
  fontSize: 20,
  cursor: 'pointer'
};

const trashBtnStyle = {
  background: 'none',
  border: 'none',
  color: '#A5A5A5',
  fontSize: 22,
  cursor: 'pointer'
};