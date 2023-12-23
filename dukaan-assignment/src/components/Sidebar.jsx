// Sidebar.js
import React, { useState } from "react";
import SidebarOption from "./SidebarOption";

import "../css/Sidebar.css";
import img1 from "../pics/Image1.png";
import home from "../pics/home.png";
import order from "../pics/order.png";
import products from "../pics/products.png";
import delivery from "../pics/delivery.png";
import marketing from "../pics/marketing.png";
import payments from "../pics/payments.png";
import analytics from "../pics/analytics.png";
import payouts from "../pics/payouts.png";
import discount from "../pics/discount.png";
import audience from "../pics/audience.png";
import appearance from "../pics/appearance.png";
import plugins from "../pics/plugins.png";
import wallet from "../pics/wallet.png";
import search from "../pics/search.png";
import menu1 from "../pics/menu1.png";
import menu2 from "../pics/menu2.png";
import arrow from "../pics/arrow.png";
import Payouts from "./Payouts";
import vector from "../pics/Vector.png";
import sort from "../pics/Sort.png";
import download from "../pics/download.png";
import Refunds from "./Refunds";

const data = [
  {
    s1: "",
    s2: "Processing",
    s3: "131634495747",
    s4: "₹10,125.00",
    s5: "₹1,125.00",
    s6: "₹9,312",
  },
  {
    s1: "",
    s2: "Processing",
    s3: "131634495747",
    s4: "₹10,125.00",
    s5: "₹1,125.00",
    s6: "₹9,312",
  },
  {
    s1: "",
    s2: "Processing",
    s3: "131634495747",
    s4: "₹10,125.00",
    s5: "₹1,125.00",
    s6: "₹9,312",
  },
  {
    s1: "",
    s2: "Processing",
    s3: "131634495747",
    s4: "₹10,125.00",
    s5: "₹1,125.00",
    s6: "₹9,312",
  },
  {
    s1: "",
    s2: "Processing",
    s3: "131634495747",
    s4: "₹10,125.00",
    s5: "₹1,125.00",
    s6: "₹9,312",
  },
  {
    s1: "",
    s2: "Processing",
    s3: "131634495747",
    s4: "₹10,125.00",
    s5: "₹1,125.00",
    s6: "₹9,312",
  },
  {
    s1: "",
    s2: "Processing",
    s3: "131634495747",
    s4: "₹10,125.00",
    s5: "₹1,125.00",
    s6: "₹9,312",
  },
];

const data2 = [
  {
    s1: "#281209",
    s2: "Processing",
    s3: "131634495747",
    s4: "₹10,125.00",
    
    s6: "₹9,312",
  },
  {
    s1: "#281208",
    s2: "Processing",
    s3: "131634495747",
    s4: "₹10,125.00",
   
    s6: "₹9,312",
  },
  {
    s1: "#281207",
    s2: "Processing",
    s3: "131634495747",
    s4: "₹10,125.00",
   
    s6: "₹9,312",
  },
  {
    s1: "#281206",
    s2: "Processing",
    s3: "131634495747",
    s4: "₹10,125.00",
    
    s6: "₹9,312",
  },
  {
    s1: "#281205",
    s2: "Processing",
    s3: "131634495747",
    s4: "₹10,125.00",
   
    s6: "₹9,312",
  },
  {
    s1: "#281204",
    s2: "Processing",
    s3: "131634495747",
    s4: "₹10,125.00",
   
    s6: "₹9,312",
  },
  {
    s1: "#281203",
    s2: "Processing",
    s3: "131634495747",
    s4: "₹10,125.00",
    
    s6: "₹9,312",
  },
];

const Sidebar = () => {
  const [payout,setPayout]=useState(true)

  const handleClick2=()=>{
    setPayout(false)
  }

  const handleClick1=()=>{
    setPayout(true)
  }
  return (
    <div style={{ display: "flex" }}>
      <div className="sidebar">
        <div className="logobox">
          <div>
            <img alt="pics" src={img1} className="logo" />
          </div>

          <div className="logobox1">

            <div className="name1">Nishyan</div>
            <div className="name2">Visit store</div>
          </div>

          <div>
            <img alt="vector" src={vector} />
          </div>
        </div>
        <div className="sidebar1">
          <SidebarOption title="Home" icon={home} />
          <SidebarOption title="Orders" icon={order} />
          <SidebarOption title="Products" icon={products} />
          <SidebarOption title="Delivery" icon={delivery} />
          <SidebarOption title="Marketing" icon={marketing} />
          <SidebarOption title="Analytics" icon={analytics} />
          <SidebarOption title="Payouts" icon={payouts} />
          <SidebarOption title="Discounts" icon={discount} />
          <SidebarOption title="Audience" icon={audience} />
          <SidebarOption title="Appearance" icon={appearance} />
          <SidebarOption title="Plugins" icon={plugins} />
        </div>

        <div className="logobox2">
          <div className="logobox21">
            <div className="logo2">
              <img alt="pics" src={wallet} className="logo1" />
            </div>

            <div className="logobox22">

              <div className="name11">Available credits</div>
              <div className="name22">222.10</div>
            </div>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="searchbox">
          <div className="s1">
            <div className="s11">How it works</div>
          </div>
          <div className="s2">
            <img alt="search" src={search} />
            <div className="s22">Search features, tutorials, etc.</div>
          </div>
          <div className="s3">
            <img alt="menu1" src={menu1} className="menu" />
            <img alt="menu2" src={menu2} className="menu" />
          </div>
        </div>

        <div className="overview">
          <div className="o1">Overview</div>

          <div className="o2">
            <div className="o22">
              This month
              <img alt="arrow" src={arrow} />
            </div>
          </div>
        </div>

        <div className="flexbox">
          <div className="f1">
            <div className="f11">
              <div className="f111">Next Payment</div>
              <div className="f1111">
                <div className="f112">₹92,312.20</div>
                <div className="f114">23 orders</div>
              </div>

              <div className="f12">
                <div className="f121">Next payout date:</div>
                <div className="f122">Today, 04:00PM</div>
              </div>
            </div>
          </div>

          <div className="f2">
            <div className="f22">
              <div className="f222">Amount Pending</div>
              <div className="f2222">
                <div className="f223">₹92,312.20</div>
                <div className="f224">23 orders</div>
              </div>
            </div>
          </div>

          <div className="f2">
            <div className="f22">
              <div className="f222">Amount Pending</div>
              <div className="f2222">
                <div className="f223">₹92,312.20</div>
                <div className="f224">23 orders</div>
              </div>
            </div>
          </div>
        </div>

        <div className="part3">
          <div className="trans">
            <div>Transactions | This Month</div>
            <div className="trans2">
              <button className="b1" onClick={handleClick1} >Payouts (22)</button>
              <button className="b2" onClick={handleClick2}>Refund (2)</button>
            </div>
          </div>

          <div className="p1">
            <div className="p11">
              <div className="p112">
                <div>
                  <img alt="search" src={search} />
                </div>
                <div className="p111">Order ID or transaction ID</div>
              </div>
            </div>

            <div className="f11111">
              <div className="p12">
                <div className="p122">Sort</div>
                <div>
                  <img alt="sort" src={sort} />
                </div>
              </div>
              <div className="p13">
                <img alt="doenload" src={download} />
              </div>
            </div>
          </div>

          {payout && <div className="p2">
            <div>Date</div>
            <div>Status</div>
            <div>Transaction ID</div>
            <div>Order amount</div>
            <div>Transaction fees</div>
            <div>Total</div>
          </div>}

          {payout===false && <div className="p41">
            <div>Order ID</div>
            <div>Status</div>
            <div>Transaction ID</div>
            <div>Refund date</div>
            {/* <div>Transaction fees</div> */}
            <div>Order amount</div>
          </div>}

          <div >

            
            {payout && data.map((el) => (
              <Payouts
                s1={el.s1}
                s2={el.s2}
                s3={el.s3}
                s4={el.s4}
                s5={el.s5}
                s6={el.s6}
              />
            ))}

{payout===false && data2.map((el) => (
              <Refunds
                s1={el.s1}
                s2={el.s2}
                s3={el.s3}
                s4={el.s4}
                
                s6={el.s6}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
