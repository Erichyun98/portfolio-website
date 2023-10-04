import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer__icon-container">
        <a href="https://github.com/Erichyun98" className="footer__link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            id="github"
            className="footer__icon"
          >
            <path d="M10.07031,20.50291a1.00008,1.00008,0,0,0-1.18115-.9834c-1.30908.24024-2.96191.27637-3.40137-.958a5.70754,5.70754,0,0,0-1.83691-2.415,1.20073,1.20073,0,0,1-.1665-.10938,1,1,0,0,0-.93067-.64551H2.54883a.99965.99965,0,0,0-1,.99512c-.00391.81543.811,1.33789,1.1416,1.51465a4.4408,4.4408,0,0,1,.92383,1.35937c.36426,1.02344,1.42285,2.57617,4.46582,2.376.001.03516.00195.06836.00244.09863l.00439.26758a1,1,0,0,0,2,0l-.00488-.31836C10.07715,21.4951,10.07031,21.22068,10.07031,20.50291Zm10.667-15.126c.03174-.125.063-.26367.09034-.41992a6.27792,6.27792,0,0,0-.40821-3.293,1.002,1.002,0,0,0-.61572-.58007c-.356-.12012-1.67041-.35645-4.18408,1.25a13.86918,13.86918,0,0,0-6.354,0C6.76221.751,5.45459.9658,5.10205,1.07908a.99744.99744,0,0,0-.63135.584,6.3003,6.3003,0,0,0-.40332,3.35644c.02442.12793.05078.2461.07813.35449A6.26928,6.26928,0,0,0,2.89014,9.20311a8.42168,8.42168,0,0,0,.04248.92187c.334,4.60254,3.334,5.98438,5.42431,6.459-.04345.125-.083.25878-.11816.40039a1.00023,1.00023,0,0,0,1.94238.47851,1.6784,1.6784,0,0,1,.46778-.87793.99947.99947,0,0,0-.5459-1.74512c-3.4541-.39453-4.95362-1.80175-5.1792-4.89843a6.61076,6.61076,0,0,1-.03369-.73828,4.25769,4.25769,0,0,1,.91943-2.71289,3.022,3.022,0,0,1,.1958-.23145.99988.99988,0,0,0,.188-1.02441,3.3876,3.3876,0,0,1-.15527-.55567A4.09356,4.09356,0,0,1,6.1167,3.06346a7.54263,7.54263,0,0,1,2.415,1.17968,1.00877,1.00877,0,0,0,.82764.13282,11.77716,11.77716,0,0,1,6.17285.001,1.00549,1.00549,0,0,0,.83056-.13769,7.572,7.572,0,0,1,2.40528-1.19043,4.03977,4.03977,0,0,1,.0874,1.57812,3.205,3.205,0,0,1-.16895.60743.9999.9999,0,0,0,.188,1.02441c.07715.08691.1543.18066.22363.26855A4.12186,4.12186,0,0,1,20,9.20311a7.03888,7.03888,0,0,1-.0376.77734c-.22021,3.05566-1.72558,4.46387-5.1958,4.85937a1,1,0,0,0-.54541,1.7461,1.63079,1.63079,0,0,1,.46631.9082,3.06079,3.06079,0,0,1,.09229.81934v2.334C14.77,21.2949,14.77,21.78025,14.77,22.00291a1,1,0,1,0,2,0c0-.2168,0-.69238.00977-1.33984V18.31346a4.8815,4.8815,0,0,0-.15479-1.31153,4.25638,4.25638,0,0,0-.11621-.416,6.51258,6.51258,0,0,0,5.44531-6.42383A8.69677,8.69677,0,0,0,22,9.20311,6.13062,6.13062,0,0,0,20.7373,5.37693Z"></path>
          </svg>
        </a>
        <a
          href="../../../public/Resume-Eric-Hyun.docx"
          download="Resume-Eric-Hyun.docx"
          className="footer__link"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 512 512"
            id="resume"
            className="footer__icon"
          >
            <path d="M128.14 263.5a7.5 7.5 0 1 0 7.5 7.5 7.5 7.5 0 0 0-7.5-7.5Zm0 135a7.5 7.5 0 1 0 7.5 7.5 7.5 7.5 0 0 0-7.5-7.5Zm0-90a7.5 7.5 0 1 0 7.5 7.5 7.5 7.5 0 0 0-7.5-7.5Zm0 135a7.5 7.5 0 1 0 7.5 7.5 7.5 7.5 0 0 0-7.5-7.5Zm134.38-241.24v-5.63A47.44 47.44 0 0 0 224 150.07l-9.25-1.76a42.62 42.62 0 0 0 15.79-33.12v-22.4a20.14 20.14 0 0 0-4.16-12.25 18.52 18.52 0 0 0 4.16-11.71V50.9a7.5 7.5 0 0 0-7.5-7.5H163.8c-11 0-18.67 10.68-18.67 20.27v27.49a6.84 6.84 0 0 0 .05.79c0 .28-.05.56-.05.84v22.4a42.62 42.62 0 0 0 15.79 33.12l-9.25 1.76a47.44 47.44 0 0 0-38.53 46.56v5.63a29 29 0 0 0 29 29h91.38a29 29 0 0 0 29-29ZM160.13 63.67c0-2.49 2.19-5.27 3.67-5.27h51.73v10.43a3.68 3.68 0 0 1-3.67 3.67 6.85 6.85 0 0 0-.79 0h-45.64a20.23 20.23 0 0 0-5.3.72Zm0 51.52v-22.4a5.3 5.3 0 0 1 5.3-5.29h44.8a5.3 5.3 0 0 1 5.3 5.29v22.4a27.7 27.7 0 1 1-55.4 0Zm34.92 42.08v2.1a7.22 7.22 0 1 1-14.44 0v-2.1a42.35 42.35 0 0 0 14.44 0Zm-66.91 45v-5.63a32.44 32.44 0 0 1 26.33-31.83l11.38-2.16a22.22 22.22 0 0 0 44 0l11.38 2.16a32.44 32.44 0 0 1 26.33 31.83v5.63a14 14 0 0 1-14 14h-91.42a14 14 0 0 1-14-14.01Zm0 151.24a7.5 7.5 0 1 0 7.5 7.5 7.5 7.5 0 0 0-7.5-7.51Zm263.22-137.24H291.7a7.5 7.5 0 0 0 0 15h99.66a7.5 7.5 0 0 0 0-15Zm0-30H291.7a7.5 7.5 0 0 0 0 15h99.66a7.5 7.5 0 0 0 0-15Zm0-141.27H291.7a7.5 7.5 0 0 0 0 15h99.66a7.5 7.5 0 0 0 0-15ZM291.7 90h54.66a7.5 7.5 0 0 0 0-15H291.7a7.5 7.5 0 0 0 0 15ZM406.36 0H105.64a37.54 37.54 0 0 0-37.5 37.5v437a37.54 37.54 0 0 0 37.5 37.5h300.72a37.54 37.54 0 0 0 37.5-37.5v-437A37.54 37.54 0 0 0 406.36 0Zm22.5 474.5a22.52 22.52 0 0 1-22.5 22.5H105.64a22.52 22.52 0 0 1-22.5-22.5v-437a22.52 22.52 0 0 1 22.5-22.5h300.72a22.52 22.52 0 0 1 22.5 22.5Zm-37.5-76H167.72a7.5 7.5 0 0 0 0 15h223.64a7.5 7.5 0 0 0 0-15Zm0 45H167.72a7.5 7.5 0 0 0 0 15h223.64a7.5 7.5 0 0 0 0-15Zm0-180H167.72a7.5 7.5 0 0 0 0 15h223.64a7.5 7.5 0 0 0 0-15Zm0 90H167.72a7.5 7.5 0 0 0 0 15h223.64a7.5 7.5 0 0 0 0-15Zm0-45H167.72a7.5 7.5 0 0 0 0 15h223.64a7.5 7.5 0 0 0 0-15Z"></path>
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/seungik-hyun/"
          className="footer__link"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            id="linkedin"
            className="footer__icon"
          >
            <path d="M17.5,8.999a5.41868,5.41868,0,0,0-2.56543.64453A.99918.99918,0,0,0,14,8.999H10a.99943.99943,0,0,0-1,1v12a.99942.99942,0,0,0,1,1h4a.99942.99942,0,0,0,1-1v-5.5a1,1,0,1,1,2,0v5.5a.99942.99942,0,0,0,1,1h4a.99942.99942,0,0,0,1-1v-7.5A5.50685,5.50685,0,0,0,17.5,8.999Zm3.5,12H19v-4.5a3,3,0,1,0-6,0v4.5H11v-10h2v.70313a1.00048,1.00048,0,0,0,1.78125.625A3.48258,3.48258,0,0,1,21,14.499Zm-14-12H3a.99943.99943,0,0,0-1,1v12a.99942.99942,0,0,0,1,1H7a.99942.99942,0,0,0,1-1v-12A.99943.99943,0,0,0,7,8.999Zm-1,12H4v-10H6ZM5.01465,1.542A3.23283,3.23283,0,1,0,4.958,7.999h.02832a3.23341,3.23341,0,1,0,.02832-6.457ZM4.98633,5.999H4.958A1.22193,1.22193,0,0,1,3.58887,4.77051c0-.7461.55957-1.22852,1.42578-1.22852A1.2335,1.2335,0,0,1,6.41113,4.77051C6.41113,5.5166,5.85156,5.999,4.98633,5.999Z"></path>
          </svg>
        </a>
      </div>
      <p className="footer__copyright">
        @2023 - Eric Hyun. All Rights Reserved.{" "}
      </p>
    </footer>
  );
}

export default Footer;