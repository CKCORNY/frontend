import React from 'react'
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';


export default function about() {
  return (
    <>
    <Head>
     <title>Corny</title> <link rel="icon" href="/icon.png" type="image/icon"/> 
    </Head>

 
    

    <header data-bs-theme="dark">
<nav className="navbar navbar-expand-lg bg-body-tertiary">
   <div className="container">
    <Link className="navbar-brand" Link href="/."> 
      <img src="logocorny.GIF" alt="Bootstrap" width={50} height={50} />&nbsp;  
      Corny
      </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" link href="/.">Index</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          ของในร้าน
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" Link href="filmcamera">สูท</Link></li>
            <li><Link className="dropdown-item" Link href="film">ฮู้ด </Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link className="dropdown-item" Link href="lens">เสื้อยืด</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link" Link href="about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" Link href="support">Support</Link>
        </li>
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>&nbsp; &nbsp; &nbsp; &nbsp; 
      </form>
      
       
    </div>
    
  </div>
  <div>
  <button type="button" className="btn btn-outline-primary me-2">Login</button>
  <button type="button" className="btn btn-primary">Sign-up</button>&nbsp; &nbsp;   
   </div>
</nav>
</header>

<main>

<section className="section about-section gray-bg" id="about">
  <div className="container">
    <div className="row align-items-center flex-row-reverse">
      <div className="col-lg-6">
        <div className="about-text go-to">
          <h3 className="dark-color">About Me</h3>
          <h6 className="theme-color lead">ร้าน Corny Shop</h6>
          <p> ร้านผมเป็นร้านขายสูทเล็กๆ
              โดยมีผมทำคนเดียว                                   
          </p>   
          <ul type="disc">
                        สิ่งที่ร้านผมขายและทำ
                     <li>ทำได้ทั้งฮูดแล้วก็สูท(LOGOก็ทำได้นะ) </li>
                     <li>ราคาเป็นมิตร <br>  
                     </br>เรื่มต้น150บาทราคาไม่แรง</li>
                     <li>ทำได้ทุกสีอยู่ที่ลูกค้าสั่ง(ถ้ามีแบบมายิ่งดีทำให้งานเสร็จไวและตามแบบ) </li>
               </ul>
          
              </div>
            </div>
      <div className="col-lg-6">
        <div className="about-avatar">
          <img src="LOGO ดาบ.jpg" title alt />
        </div>
      </div>
    </div>
  </div>
</section>

</main>

<footer>
  
<div>
  <div className="b-example-divider" />
  <div className="container">
    <footer className="py-5">
      <div className="row">
        <div className="col-6 col-md-2 mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
          </ul>
        </div>
        <div className="col-6 col-md-2 mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
          </ul>
        </div>
        <div className="col-6 col-md-2 mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Home</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Features</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Pricing</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
          </ul>
        </div>
        <div className="col-md-5 offset-md-1 mb-3">
          <form>
            <h5>Subscribe to our newsletter</h5>
            <p>Monthly digest of what's new and exciting from us.</p>
            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
              <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
              <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
              <button className="btn btn-primary" type="button">Subscribe</button>
            </div>
            <div className="d-flex flex-column flex-sm-row w-100 gap-2">  
              <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
            </div>
          </form>
        </div>
      </div>
      <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
        <p>© 2022 Company, Inc. All rights reserved.</p>
        <ul className="list-unstyled d-flex">
          <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#twitter" /></svg></a></li>
          <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#instagram" /></svg></a></li>
          <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#facebook" /></svg></a></li>
        </ul>
      </div>
    </footer>
  </div>
</div>

</footer> 
</>
  )
}
