const FOOTER_BULLET_DATA = [
  {
    id: 1,
    name: "footerBulletStyle",
    icon: "fa-solid fa-check",
    text: "Shop the world's largest wine marketplace",
    span: "footerBulletInfo",
  },
  {
    id: 2,
    name: "footerBulletStyle",
    icon: "fa-brands fa-whatsapp",
    text: "Our support team is always here to help",
    span: "footerBulletInfo",
  },
  {
    id: 3,
    name: "footerBulletStyle",
    icon: "fa-solid fa-truck",
    text: "Careful delivery right to your doorstep",
    span: "footerBulletInfo",
  },
  {
    id: 4,
    name: "footerBulletStyle",
    icon: "fa-regular fa-handshake",
    text: "Check honest reviews of any wine before purchase",
    span: "footerBulletInfo",
  },
];

const FOOTER_MAP_DATA = [
  {
    id: 1,
    name: "APP",
  },
  {
    id: 2,
    name: "About",
  },
  {
    id: 3,
    name: "Contact",
  },
  {
    id: 4,
    name: "Drink News",
  },
  {
    id: 5,
    name: "Drink Style Awards",
  },
  {
    id: 6,
    name: "Merchants",
  },
  {
    id: 7,
    name: "Sponsorships",
  },
  {
    id: 8,
    name: "Become an Affiliate",
  },
  {
    id: 9,
    name: "careers",
  },
  {
    id: 10,
    name: "Terms of Use",
  },
  {
    id: 11,
    name: "Content of Policy",
  },
  {
    id: 12,
    name: "Sitemap",
  },
];
const Footer = () => {
  return (
    <footer>
      <section className=" bg-Beige-50 py-7 ">
        <div className=" flex-col items-center  justify-center  max-w-7xl  mx-auto">
          <h1 className=" text-90  font-extrabold p-8 text-center">
            Trusted by millions to discover and buy the right drink every time.
          </h1>
          <div className=" flex  items-center justify-around">
            {FOOTER_BULLET_DATA.map(({ id, name, icon, text, span }) => {
              return (
                <div
                  className=" flex  items-center justify-center  max-w-5xl  "
                  key={id}
                >
                  <div className=" flex items-cente    ">
                    <i className={`${icon}  text-100 p-7`} />
                  </div>
                  <div>
                    <span className=" text-60">{text}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="   bg-Beige-100  py-5">
        <div className=" flex-col items-center  justify-items-center  max-w-7xl  mx-auto"></div>
      </section>
    </footer>
  );
};

export default Footer;
