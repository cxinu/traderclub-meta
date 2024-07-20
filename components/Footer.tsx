import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer bg-slate-200 px-4 py-6">
      <div className="footer__content container flex justify-between">
        <div className="">
          <div className="header__logo">
            <div className="header__image">
              <Image src="/logo-dark.png" alt="logo" fill={true} />
            </div>
            <h4 className="header__text">TRADER CLUB</h4>
          </div>
        </div>
        <p className="text-base flex flex-col justify-end">
          ©2024 Traderclub All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
