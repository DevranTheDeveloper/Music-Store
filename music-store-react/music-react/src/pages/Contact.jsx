import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

function Contact() {
  return (
    <>
    <Navbar />
    <header className="conh">
        <h1>CONTACT US</h1>
      </header>
      <div className="contact">
        <div className="row">
            <div className="l-co col-4">
                <h1>Address</h1>
                <ul>
                    <li>
                        <h2>Istabul</h2>
                        <ul>
                            <li><i className="fa-solid fa-map-location-dot fa-xl" style={{color: "#91C499;"}}></i> <a href="https://www.google.com/maps/place/Zuhal+Müzik+Showroom/@41.0277563,28.9723716,18z/data=!4m10!1m2!2m1!1szuhal+müzik!3m6!1s0x14cab9e0c60290ab:0xc8d14bb61e426ebc!8m2!3d41.0277555!4d28.9743863!15sCgx6dWhhbCBtw7x6aWsiA4gBAVoOIgx6dWhhbCBtw7x6aWuSAQttdXNpY19zdG9yZeABAA!16s%2Fg%2F1ptyz2zvh?entry=ttu">Şahkulu, Galip Dede Cd. No:33, 34421 Beyoğlu/İstanbul</a></li>
                            <li><i className="fa-solid fa-envelope fa-xl" style={{color: "#91C499;"}}></i> <a href="mail:onane8867@gmail.com">onane8867@gmail.com</a></li>
                            <li><i className="fa-solid fa-phone fa-xl" style={{color: "#91C499;"}}></i> <a href="tel:02122493035">(0212) 249 30 35</a></li>
                        </ul>
                    </li>
                    <li>
                        <h2>Ankara</h2>
                        <ul>
                            <li><i className="fa-solid fa-map-location-dot fa-xl" style={{color: "#91C499;"}}></i> <a href="https://www.google.com/maps/place/Kar+Müzik/@39.9339759,32.8717127,17.25z/data=!4m10!1m2!2m1!1zYW5rYXJhIG3DvHppayBkw7xra2FhbsSx!3m6!1s0x14d34f068951c109:0x9c56b15bf547a82!8m2!3d39.9346116!4d32.8747758!15sChdhbmthcmEgbcO8emlrIGTDvGtrYW7EsVoZIhdhbmthcmEgbcO8emlrIGTDvGtrYW7EsZIBGG11c2ljYWxfaW5zdHJ1bWVudF9zdG9yZeABAA!16s%2Fg%2F11qh232lgb?entry=ttu">Hacettepe, Talatpaşa Blv 155/B, 06230 Altındağ/Ankara</a></li>
                            <li><i className="fa-solid fa-envelope fa-xl" style={{color: "#91C499;"}}></i> <a href="mail:onane1095@gmail.com">onane1095@gmail.com</a></li>
                            <li><i className="fa-solid fa-phone fa-xl" style={{color: "#91C499;"}}></i> <a href="tel:05354574773">0535 457 47 73</a></li>
                        </ul>
                    </li>
                    <li>
                        <h2>Bursa</h2>
                        <ul>
                            <li><i className="fa-solid fa-map-location-dot fa-xl" style={{color: "#91C499;"}}></i> <a href="https://www.google.com/maps/place/Gürdağ+Müzik+Evi/@40.1979966,29.0623591,16z/data=!4m10!1m2!2m1!1zYnVyc2EgbcO8emlrIGTDvGtrYWFuxLE!3m6!1s0x14ca3e1349a67115:0xd34c4382da67c16a!8m2!3d40.1987063!4d29.0645597!15sChZidXJzYSBtw7x6aWsgZMO8a2thbsSxWhgiFmJ1cnNhIG3DvHppayBkw7xra2FuxLGSARhtdXNpY2FsX2luc3RydW1lbnRfc3RvcmXgAQA!16s%2Fg%2F1hc1tl5f5?entry=ttu">Bahar, 5. Cami Sk. No:11, 16240 Osmangazi/Bursa</a></li>
                            <li><i className="fa-solid fa-envelope fa-xl" style={{color: "#91C499;"}}></i> <a href="mail:dvrnsvr1098@gmail.com">dvrnsvr1098@gmail.com</a></li>
                            <li><i className="fa-solid fa-phone fa-xl" style={{color: "#91C499;"}}></i> <a href="tel:02242516548">(0224) 251 65 48</a></li>
                        </ul>
                    </li>
                    <li>
                        <h2>Deutchland</h2>
                        <ul>
                            <li><i className="fa-solid fa-map-location-dot fa-xl" style={{color: "#91C499;"}}></i> <a href="https://www.google.com/maps/place/Music+Store+Professional+Shop/@50.9458097,6.9873543,16z/data=!3m1!5s0x47bf25df6d429a6f:0x7ffa5e80451f41ee!4m10!1m2!2m1!1smusic+store+germany!3m6!1s0x47bf25d8c9f9ae55:0x931a6fdd6dd86ef8!8m2!3d50.9458096!4d6.9968813!15sChNtdXNpYyBzdG9yZSBnZXJtYW55WhUiE211c2ljIHN0b3JlIGdlcm1hbnmSARhtdXNpY2FsX2luc3RydW1lbnRfc3RvcmXgAQA!16s%2Fg%2F12lsv4m1n?entry=ttu">Istanbulstraße 22-26, 51103 Köln, Almanya</a></li>
                            <li><i className="fa-solid fa-envelope fa-xl" style={{color: "#91C499;"}}></i> <a href="mail:yuruyen26@gmail.com">mail:yuruyen26@gmail.com</a></li>
                            <li><i className="fa-solid fa-phone fa-xl" style={{color: "#91C499;"}}></i> <a href="tel:+4922188840">+49 221 88840</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="r-co col-8">
                <h1>Maps</h1>
                <iframe title='asd' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5027.611033239195!2d6.987354308366779!3d50.94580965727715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf25d8c9f9ae55%3A0x931a6fdd6dd86ef8!2sMusic%20Store%20Professional%20Shop!5e0!3m2!1str!2str!4v1690113197814!5m2!1str!2str" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Contact