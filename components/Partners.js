import ExpandCollapse from 'react-expand-collapse';

export const PartnerInfo = ({ t }) => {
  const options = {
    previewHeight: '6em', // 1 line = 3em => 2 lines
    expandText: 'more',
    collapseText: 'less',
  };

  return (
    <div className="row center-xs pt-large pb">
      <div className="col-xs-11 start-xs exchanges bb">
        <div className="start-sm pb-small">
          <h2>
            {t('home:partnership.intro', {
              defaultValue: 'On our mission for mass adoption',
            })}{' '}
            <span className="hidden-xs">
              <br />
            </span>
            {t('home:partnership.subintro', {
              defaultValue: 'we are supported by the following partners:',
            })}
          </h2>
        </div>
        <div className="partners-grid">
          <div>
            <a href="https://www.mindgeek.com/">
              <img src="/static/img/partners/mindgeek.png" alt="mindgeek" />
            </a>
            <ExpandCollapse {...options}>
              {t('home:partnership.mindgeek', {
                defaultValue: `MindGeek is a global industry-leading information technology firm
                headquartered in Luxembourg, with offices in Nicosia, London,
                Miami, Montreal and Los Angeles. MindGeek continues to drive the
                state of technology forward, developing industry-leading solutions
                enabling faster, more efficient delivery of content every second
                to millions of customers worldwide.`,
              })}
            </ExpandCollapse>
          </div>
          <div>
            <a href="https://net-cents.com/">
              <img src="/static/img/partners/netcents.png" alt="netcents" />
            </a>
            <ExpandCollapse {...options}>
              {t('home:partnership.netcents', {
                defaultValue: `NetCents is a next-generation online payment processing platform,
                  offering consumers and merchants online services for managing
                  electronic payments. The Company is focused on capturing the
                  migration from cash to digital currency by utilizing innovative
                  Blockchain Technology to provide payment solutions that are simple
                  to use, secure and worry-free. NetCents has partnered with Verge
                  along with its financial partners, mobile operators, exchanges,
                  etc., to streamline the user experience of transacting online.`,
              })}
            </ExpandCollapse>
          </div>
          <div>
            <a href="https://www.tokenpay.com/">
              <img src="/static/img/partners/tokenpay.png" alt="tokenpay" />
            </a>
            <ExpandCollapse {...options}>
              {t('home:partnership.tpay', {
                defaultValue: `TokenPay was created with the fundamental desire to bridge
                    modern-day financial institutions with the benefits of the
                    blockchain space. TPAY is an open-sourced, decentralized, and
                    self-verifying payment platform project with a passionate
                    community following with a focus on adoption, decentralization and
                    ease of use for digital currencies in todays mixed currency global
                    financial system.`,
              })}
            </ExpandCollapse>
          </div>
          <div>
            <a href="https://poweredbyzomongo.com/">
              <img src="/static/img/partners/poweredbyzomongo.png" alt="zomongo" />
            </a>
            <ExpandCollapse {...options}>
              {t('home:partnership.zomongo', {
                defaultValue: `ZOMONGO is one of the fastest growing digital networks in North America and is currently in 90,000+ 
                ZOMONGO merchant locations, 3.5 million hotel rooms, and 22 major airports, as well as having a strong social presence 
                with over 600,000 followers. ZOMONGO’s mission is to become the leader in this point-of-sale media by providing a 
                fully managed, totally turnkey, digital signage, media/product dissemination, and couponing solution.
                The powered by ZOMONGO app is available on Google Play and Apple Store.`,
              })}
            </ExpandCollapse>
          </div>
          <div>
            <a href="https://www.plaak.com/">
              <img src="/static/img/partners/plaak.png" alt="plaak" />
            </a>
            <ExpandCollapse {...options}>
              {t('home:partnership.plaak', {
                defaultValue: `PLAAK is a Singaporean based Software Development & Blockchain Technology 
                Company with a suite of high-tech and easy to use applications for mobile and desktop 
                computer devices. Developing useful everyday applications that can store, transact and 
                also trade digital currencies encourages global use and wider spread adoption. 
                One such product, is the PLAAK Core Card a sleek and easy to carry and use device, 
                enabling Core Card owners to safely store, transact and receive digital currencies anywhere.`,
              })}
            </ExpandCollapse>
          </div>
          <div>
            <a href="https://paycent.com/">
              <img src="/static/img/partners/paycent.png" alt="paycent" />
            </a>
            <ExpandCollapse {...options}>
              {t('home:partnership.paycent', {
                defaultValue: `Paycent aims to be the global leader for complete mobile and cashless transactions - the Paycent App and Paycent Card are the tools you 
                need for your digital assets. Spend your digital assets globally in real time or withdraw cash in local currency at ATMs and offline merchants in over 
                200 countries at over 36 Million points, through existing payment channels with the help of the Paycent Card.`,
              })}
            </ExpandCollapse>
          </div>
          <div>
            <a href="https://www.xceltrip.com/">
              <img src="/static/img/vendors/latest/xceltrip.png" alt="xceltrip" />
            </a>
            <ExpandCollapse {...options}>
              {t('home:partnership.xceltrip', {
                defaultValue: `
                XcelTrip is a full-service online Travel platform providing travel services, including airline tickets, accommodation, vehicle rentals, 
                restaurants, etc. powered by blockchain technology. 
                Use $XVG to book over 800,000 #hotels, 300+ #airlines, and/or top up your cellphone across 900 operators across 160 nations. 
                Grab it now on the Apple Store or Google Play.`,
              })}
            </ExpandCollapse>
          </div>
          <div>
            <a href="https://pacquiaofoundation.org/">
              <img src="/static/img/vendors/latest/pacfoundation.png" alt="pacfoundation" class="img--wider" />
            </a>
            <ExpandCollapse {...options}>
              {t('home:partnership.pacfoundation', {
                defaultValue: `
                Named and founded on behalf of future Hall of Fame Boxer Manny Pacquiao, The Manny Pacquiao Foundation 
                seeks to empower communities and individuals through charitable support and a message of hope and change.`,
              })}
            </ExpandCollapse>
          </div>
          <div>
            <a href="https://www.xcelpay.io/">
              <img src="/static/img/vendors/latest/xcelpay.png" alt="xcelpay" />
            </a>
            <ExpandCollapse {...options}>
              {t('home:partnership.xcelpay', {
                defaultValue: `XcelPay is a next-generation integrated crypto wallet, payment solution and point of sale (POS) device, connecting users and merchants worldwide. 
                XcelPay is a groundbreaking wallet which serves both consumers and merchants. It offers consumers the flexibility to store, 
                send and receive cryptos from around the world, and it enables businesses to receive payment both online and offline through its POS device, 
                which facilitates physical in-person cryptocurrency transactions.`,
              })}
            </ExpandCollapse>
          </div>
          <div></div>
          <div>
            <a href="https://atomicwallet.io/">
              <img src="/static/img/vendors/latest/atomicwallet.png" alt="atomicwallet" className="img--smaller"/>
            </a>
            <ExpandCollapse {...options}>
              {t('home:partnership.atomicwallet', {
                defaultValue: `
                Atomic Wallet provides a powerful, in-demand service that allows users to reduce effort spent on managing crypto assets​ and makes it transparent and reliable.
                For coins not yet supported by Atomic Swap, ShapeShift, ChangeNOW and Changelly exchanges are built-in.`,
              })}
            </ExpandCollapse>
          </div>
        </div>
      </div>
    </div>
  );
};
